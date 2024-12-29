// src/app/api/team-scaling/analyze-full/route.ts

import { NextResponse } from 'next/server';
import { generateComprehensiveScalingPlan } from '../../../(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/teamScalingService';
console.log('Imported generateComprehensiveScalingPlan:', generateComprehensiveScalingPlan);
import { checkRateLimit, getCachedValue, setCachedValue } from '../../../(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/rateLimit';
import { validateFullAssessment, ValidationError } from '../../../(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/apiValidation';

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
    if (validationErrors && validationErrors.length > 0) {
      return NextResponse.json({ error: 'Validation Error', message: validationErrors }, { status: 400 });
    }

    // Generate cache key based on crucial assessment data
    const cacheKey = `scaling-plan-${JSON.stringify({
      companyInfo: {
        size: assessment.companyInfo.size,
        stage: assessment.companyInfo.stage,
      },
      departments: assessment.currentStructure.departments.length,
      skillGaps: assessment.skillsGaps.length,
      version: assessment.version,
    })}`;

    const cached = getCachedValue(cacheKey);
    if (cached) {
      return NextResponse.json(cached);
    }

    try {
      console.log('Generating scaling plan with assessment:', assessment);
      const scalingPlan = await generateComprehensiveScalingPlan(assessment);

      if (!scalingPlan) {
        console.error('Scaling plan generation returned null/undefined');
        throw new Error('Failed to generate comprehensive scaling plan');
      }

      console.log('Generated scaling plan:', scalingPlan);
      setCachedValue(cacheKey, scalingPlan);
      return NextResponse.json(scalingPlan);
    } catch (error) {
      console.error('Error in generateComprehensiveScalingPlan:', error);
      throw error;
    }
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
