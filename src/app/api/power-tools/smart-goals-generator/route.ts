// src/app/api/power-tools/smart-goals-generator/route.ts
import { NextResponse } from 'next/server';
import rateLimit from '../../../../app/(protected)/perjalanan-bisnis/power-tools/smart-goals-generator/lib/rateLimit';
import {
  createAnthropicClient,
  processWithClaude,
} from '../../../../app/(protected)/perjalanan-bisnis/power-tools/smart-goals-generator/lib/anthropicClient';

export const runtime = 'edge';

const limiter = {
  check: rateLimit.check,
  getCachedValue: rateLimit.getCachedValue,
  setCachedValue: rateLimit.setCachedValue,
};

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';
    if (!(await limiter.check(ip))) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }

    const { goalStatement, category, timeline, industry, currentMetrics, resources, constraints } = await request.json();

    if (!goalStatement || !category || !timeline) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const prompt = `Context: Converting a business goal into SMART format
Input Goal: ${goalStatement}
Category: ${category}
Timeline: ${timeline}
${industry ? `Industry: ${industry}` : ''}
${currentMetrics ? `Current Metrics: ${currentMetrics}` : ''}
${resources ? `Resources: ${resources.join(', ')}` : ''}
${constraints ? `Constraints: ${constraints}` : ''}

Instructions:
1. Analyze the input goal
2. Transform it into SMART criteria
3. Generate specific metrics
4. Create milestone breakdown
5. Suggest tracking methods

Please provide:
1. Specific: Clear, detailed objective
2. Measurable: Quantifiable metrics
3. Achievable: Realistic target considering resources/constraints
4. Relevant: Business impact alignment
5. Time-bound: Timeline with milestones`;

    const response = await processWithClaude(prompt);

    return NextResponse.json({
      smart_goal: JSON.parse(response),
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}
