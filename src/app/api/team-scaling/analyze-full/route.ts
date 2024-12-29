// src/app/api/team-scaling/analyze-full/route.ts

import { NextResponse } from 'next/server';
import { generateComprehensiveScalingPlan } from '@/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/teamScalingService';
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

    const body = await request.json().catch(() => null);
    if (!body || !body.assessment) {
      return NextResponse.json({ error: 'Invalid Request', message: 'Format request tidak valid' }, { status: 400 });
    }

    const { assessment } = body;

    // Comprehensive validation
    const validationErrors = validateFullAssessment(assessment);
    if (validationErrors.length > 0) {
      return NextResponse.json({ error: 'Validation Error', message: validationErrors }, { status: 400 });
    }

    // Generate cache key based on crucial assessment data
    const cacheKey = `scaling-plan-${JSON.stringify({
      companyInfo: {
        size: assessment.companyInfo.currentSize,
        target: assessment.companyInfo.targetSize,
        stage: assessment.companyInfo.stage,
      },
      departments: assessment.currentStructure.departments.length,
      skillGaps: assessment.skillsAssessment.gaps.length,
      version: assessment.version,
    })}`;

    const cached = getCachedValue(cacheKey);
    if (cached) {
      return NextResponse.json(cached);
    }

    const scalingPlan = await generateComprehensiveScalingPlan(assessment);
    if (!scalingPlan) {
      throw new Error('Failed to generate comprehensive scaling plan');
    }

    setCachedValue(cacheKey, scalingPlan);
    return NextResponse.json(scalingPlan);
  } catch (error) {
    console.error('Comprehensive Analysis Error:', error);

    if (error instanceof ValidationError) {
      return NextResponse.json({ error: 'Validation Error', message: error.errors }, { status: 400 });
    }

    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

    return NextResponse.json(
      {
        error: 'Server Error',
        message: 'Gagal menganalisis rencana scaling. Silakan coba lagi.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}
