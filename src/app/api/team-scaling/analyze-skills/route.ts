// src/app/api/team-scaling/analyze-skills/route.ts

import { NextResponse } from 'next/server';
import { analyzeSkillsGap } from '@/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/teamScalingService';
import { checkRateLimit, getCachedValue, setCachedValue } from '../../../(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/rateLimit';
import { validateSkillsRequest, ValidationError } from '@/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/apiValidation';

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
    if (!body || !body.assessment?.skillsAssessment) {
      return NextResponse.json({ error: 'Invalid Request', message: 'Format request tidak valid' }, { status: 400 });
    }

    const { currentSkills, requiredSkills } = body.assessment.skillsAssessment;

    // Validate skills data
    const validationErrors = validateSkillsRequest(currentSkills, requiredSkills);
    if (validationErrors.length > 0) {
      return NextResponse.json({ error: 'Validation Error', message: validationErrors }, { status: 400 });
    }

    interface Skill {
      name: string;
      currentTeamCount?: number;
      requiredCount?: number;
    }

    interface SkillsAssessment {
      currentSkills: Skill[];
      requiredSkills: Skill[];
    }

    interface Assessment {
      skillsAssessment: SkillsAssessment;
    }

    const cacheKey = `skills-gap-${JSON.stringify({
      current: currentSkills.map((s: Skill) => ({ name: s.name, count: s.currentTeamCount })),
      required: requiredSkills.map((s: Skill) => ({ name: s.name, count: s.requiredCount })),
    })}`;

    const cached = getCachedValue(cacheKey);
    if (cached) {
      return NextResponse.json(cached);
    }

    const analysis = await analyzeSkillsGap(body.assessment);
    if (!analysis) {
      throw new Error('Failed to analyze skills gap');
    }

    setCachedValue(cacheKey, analysis);
    return NextResponse.json(analysis);
  } catch (error) {
    console.error('Skills Analysis Error:', error);

    if (error instanceof ValidationError) {
      return NextResponse.json({ error: 'Validation Error', message: error.errors }, { status: 400 });
    }

    return NextResponse.json(
      {
        error: 'Server Error',
        message: 'Gagal menganalisis gap skills. Silakan coba lagi.',
      },
      { status: 500 }
    );
  }
}
