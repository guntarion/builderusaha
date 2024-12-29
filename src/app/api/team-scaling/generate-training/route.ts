// src/app/api/team-scaling/generate-training/route.ts

import { NextResponse } from 'next/server';
import { generateTrainingPlan } from '@/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/teamScalingService';
import { checkRateLimit, getCachedValue, setCachedValue } from '@/lib/rateLimit';
import { ValidationError } from '@/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/apiValidation';

function validateTrainingRequest(assessment: any): string[] {
  const errors: string[] = [];

  if (!assessment?.skillsAssessment?.gaps) {
    errors.push('Data gap skills wajib diisi');
    return errors;
  }

  if (!Array.isArray(assessment.skillsAssessment.gaps)) {
    errors.push('Format gap skills tidak valid');
    return errors;
  }

  assessment.skillsAssessment.gaps.forEach((gap: any, index: number) => {
    if (!gap.skillId) {
      errors.push(`Skill ID untuk gap #${index + 1} wajib diisi`);
    }
    if (typeof gap.gap !== 'number') {
      errors.push(`Gap value untuk skill #${index + 1} harus berupa angka`);
    }
    if (!gap.priority) {
      errors.push(`Priority untuk skill gap #${index + 1} wajib diisi`);
    }
  });

  if (!assessment.trainingPlan?.budget) {
    errors.push('Budget training wajib diisi');
  }

  return errors;
}

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

    // Validate training request
    const validationErrors = validateTrainingRequest(assessment);
    if (validationErrors.length > 0) {
      return NextResponse.json({ error: 'Validation Error', message: validationErrors }, { status: 400 });
    }

    const cacheKey = `training-plan-${JSON.stringify({
      gaps: assessment.skillsAssessment.gaps.map((g: any) => ({
        id: g.skillId,
        gap: g.gap,
        priority: g.priority,
      })),
      budget: assessment.trainingPlan.budget,
    })}`;

    const cached = getCachedValue(cacheKey);
    if (cached) {
      return NextResponse.json(cached);
    }

    const trainingPlan = await generateTrainingPlan(assessment);
    if (!trainingPlan) {
      throw new Error('Failed to generate training plan');
    }

    setCachedValue(cacheKey, trainingPlan);
    return NextResponse.json(trainingPlan);
  } catch (error) {
    console.error('Training Plan Generation Error:', error);

    if (error instanceof ValidationError) {
      return NextResponse.json({ error: 'Validation Error', message: error.errors }, { status: 400 });
    }

    return NextResponse.json(
      {
        error: 'Server Error',
        message: 'Gagal membuat rencana training. Silakan coba lagi.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
