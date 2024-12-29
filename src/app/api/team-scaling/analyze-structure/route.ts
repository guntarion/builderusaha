// src/app/api/team-scaling/analyze-structure/route.ts

import { NextResponse } from 'next/server';
import { analyzeTeamStructure } from '@/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/teamScalingService';
import { checkRateLimit, getCachedValue, setCachedValue } from '../../../(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/rateLimit';
import { validateFullAssessment, ValidationError } from '@/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/apiValidation';

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error: 'Rate Limit Exceeded',
          message: 'Terlalu banyak permintaan. Silakan coba lagi dalam beberapa menit.',
        },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json().catch(() => null);
    if (!body || !body.assessment) {
      return NextResponse.json({ error: 'Invalid Request', message: 'Format request tidak valid' }, { status: 400 });
    }

    const { assessment } = body;

    // Validate assessment
    const validationErrors = validateFullAssessment(assessment);
    if (validationErrors.length > 0) {
      return NextResponse.json({ error: 'Validation Error', message: validationErrors }, { status: 400 });
    }

    // Generate cache key based on relevant assessment data
    const cacheKey = `structure-analysis-${JSON.stringify({
      currentSize: assessment.companyInfo.currentSize,
      targetSize: assessment.companyInfo.targetSize,
      departments: assessment.currentStructure.departments.map((d: { name: string }) => d.name),
      stage: assessment.companyInfo.stage,
    })}`;

    const cached = getCachedValue(cacheKey);
    if (cached) {
      return NextResponse.json(cached);
    }

    const analysis = await analyzeTeamStructure(assessment);
    if (!analysis) {
      throw new Error('Failed to generate structure analysis');
    }

    setCachedValue(cacheKey, analysis);
    return NextResponse.json(analysis);
  } catch (error) {
    console.error('Structure Analysis Error:', error);

    if (error instanceof ValidationError) {
      return NextResponse.json({ error: 'Validation Error', message: error.errors }, { status: 400 });
    }

    return NextResponse.json(
      {
        error: 'Server Error',
        message: 'Gagal menganalisis struktur tim. Silakan coba lagi.',
      },
      { status: 500 }
    );
  }
}
