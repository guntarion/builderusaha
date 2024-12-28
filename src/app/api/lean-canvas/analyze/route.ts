// src/app/api/lean-canvas/analyze/route.ts

import { NextResponse } from 'next/server';
import { processWithClaude } from '@/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/lib/anthropicClient';
import { checkRateLimit, getCachedValue, setCachedValue } from '@/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/lib/rateLimit';

function parseClaudeResponse(response: string) {
  const sections = response.split('\n\n');
  return {
    analysis:
      sections
        .find((s) => s.startsWith('Analisis:'))
        ?.replace('Analisis:', '')
        .trim() || '',
    suggestions:
      sections
        .find((s) => s.startsWith('Saran:'))
        ?.replace('Saran:', '')
        .split('\n-')
        .filter(Boolean)
        .map((s) => s.trim()) || [],
    questions:
      sections
        .find((s) => s.startsWith('Pertanyaan:'))
        ?.replace('Pertanyaan:', '')
        .split('\n-')
        .filter(Boolean)
        .map((s) => s.trim()) || [],
    nextSteps:
      sections
        .find((s) => s.startsWith('Langkah Selanjutnya:'))
        ?.replace('Langkah Selanjutnya:', '')
        .split('\n-')
        .filter(Boolean)
        .map((s) => s.trim()) || [],
  };
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';

  // Check rate limit
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Terlalu banyak permintaan. Silakan coba lagi nanti.' }, { status: 429 });
  }

  try {
    const { prompt, systemPrompt } = await request.json();

    // Check cache
    const cacheKey = `${prompt}-${systemPrompt}`.slice(0, 100); // Use first 100 chars as key
    const cached = getCachedValue(cacheKey);
    if (cached) {
      return NextResponse.json(cached);
    }

    const response = await processWithClaude(prompt, systemPrompt);
    const structuredResponse = parseClaudeResponse(response);

    // Cache the response
    setCachedValue(cacheKey, structuredResponse);

    return NextResponse.json(structuredResponse);
  } catch (error) {
    console.error('Analysis Error:', error);
    return NextResponse.json({ error: 'Terjadi kesalahan saat menganalisis canvas' }, { status: 500 });
  }
}
