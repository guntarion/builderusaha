// src/app/api/mvp-designer/analyze/route.ts

import { NextResponse } from 'next/server';
import { processWithClaude } from '../../../(protected)/perjalanan-bisnis/fase-2/mvp-designer/lib/anthropicClient';
import { MVPDesign, GeneratedMVP, Feature } from '../../../(protected)/perjalanan-bisnis/fase-2/mvp-designer/lib/MVPTypes';
import { generateMVPAnalysisPrompt, parseAIResponse } from '../../../(protected)/perjalanan-bisnis/fase-2/mvp-designer/lib/mvpPrompts';
import { checkRateLimit, getCachedValue, setCachedValue } from '../../../(protected)/perjalanan-bisnis/fase-2/mvp-designer/lib/rateLimit';

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Terlalu banyak permintaan. Silakan coba lagi dalam beberapa menit.' }, { status: 429 });
  }

  try {
    const { design } = await request.json();

    // Generate cache key based on essential design properties
    const cacheKey = `mvp-analysis-${JSON.stringify({
      problem: design.baseInfo.problem,
      features: design.features.map((f: Feature) => f.name),
    })}`;

    // Check cache
    const cached = getCachedValue(cacheKey);
    if (cached) {
      return NextResponse.json(cached);
    }

    // Generate prompt and process with AI
    const prompt = generateMVPAnalysisPrompt(design);
    const response = await processWithClaude(prompt);

    // Parse and structure the response
    const analysis = parseAIResponse(response);

    // Cache the result
    setCachedValue(cacheKey, analysis);

    return NextResponse.json(analysis);
  } catch (error) {
    console.error('MVP Analysis Error:', error);
    return NextResponse.json({ error: 'Terjadi kesalahan saat menganalisis MVP. Silakan coba lagi.' }, { status: 500 });
  }
}
