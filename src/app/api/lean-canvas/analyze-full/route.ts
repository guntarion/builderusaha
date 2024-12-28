// src/app/api/lean-canvas/analyze-full/route.ts

import { NextResponse } from 'next/server';
import { processWithClaude } from '@/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/lib/anthropicClient';
import { checkRateLimit, getCachedValue, setCachedValue } from '@/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/lib/rateLimit';

/**
 * Parse Claude's response into structured format
 * @param response - Raw response from Claude
 * @returns Structured analysis object
 */
function parseFullAnalysis(response: string) {
  try {
    const sections = response.split('\n\n');
    return {
      summary:
        sections
          .find((s) => s.startsWith('Ringkasan:'))
          ?.replace('Ringkasan:', '')
          .trim() || '',
      strengths:
        sections
          .find((s) => s.startsWith('Kekuatan:'))
          ?.replace('Kekuatan:', '')
          .split('\n-')
          .filter(Boolean)
          .map((s) => s.trim()) || [],
      weaknesses:
        sections
          .find((s) => s.startsWith('Kelemahan:'))
          ?.replace('Kelemahan:', '')
          .split('\n-')
          .filter(Boolean)
          .map((s) => s.trim()) || [],
      recommendations:
        sections
          .find((s) => s.startsWith('Rekomendasi:'))
          ?.replace('Rekomendasi:', '')
          .split('\n-')
          .filter(Boolean)
          .map((s) => s.trim()) || [],
      risks:
        sections
          .find((s) => s.startsWith('Risiko:'))
          ?.replace('Risiko:', '')
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
      assumptions:
        sections
          .find((s) => s.startsWith('Asumsi Kritis:'))
          ?.replace('Asumsi Kritis:', '')
          .split('\n-')
          .filter(Boolean)
          .map((s) => s.trim()) || [],
    };
  } catch (error) {
    console.error('Error parsing analysis:', error);
    throw new Error('Failed to parse analysis response');
  }
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      {
        error: 'Terlalu banyak permintaan. Silakan coba lagi dalam beberapa menit.',
      },
      { status: 429 }
    );
  }

  try {
    const { canvas } = await request.json();

    // Generate a cache key based on canvas content
    const cacheKey = `full-analysis-${Object.values(canvas.fields)
      .map((f: any) => f.value?.slice(0, 20) || '')
      .join('')}`;

    const cached = getCachedValue(cacheKey);
    if (cached) {
      return NextResponse.json(cached);
    }

    const systemPrompt = `You are an experienced business consultant analyzing a Lean Canvas 
    for an Indonesian business. Provide a comprehensive analysis in Bahasa Indonesia that is:
    - Practical and actionable
    - Relevant to Indonesian market context
    - Considerate of local business conditions
    - Clear and professionally written

    Structure your response in these sections:
    - Ringkasan: Brief overall assessment
    - Kekuatan: Key strengths
    - Kelemahan: Areas for improvement
    - Rekomendasi: Specific suggestions
    - Risiko: Potential risks
    - Langkah Selanjutnya: Immediate actions
    - Asumsi Kritis: Key assumptions to validate`;

    const analysisPrompt = `
    Analyze this complete Lean Canvas for an Indonesian business:

    MASALAH:
    ${canvas.fields.problem.value}

    SEGMEN PELANGGAN:
    ${canvas.fields.customerSegments.value}

    PROPOSISI NILAI:
    ${canvas.fields.valueProposition.value}

    SOLUSI:
    ${canvas.fields.solution.value}

    ARUS PENDAPATAN:
    ${canvas.fields.revenueStreams.value}

    STRUKTUR BIAYA:
    ${canvas.fields.costStructure.value}

    METRIK UTAMA:
    ${canvas.fields.keyMetrics.value}

    KEUNGGULAN KOMPETITIF:
    ${canvas.fields.unfairAdvantage.value}

    SALURAN:
    ${canvas.fields.channels.value}

    Provide a comprehensive analysis considering:
    1. Indonesian market conditions and competition
    2. Local customer behavior and preferences
    3. Regulatory environment and compliance
    4. Available resources and constraints
    5. Growth potential and scalability
    6. Market timing and trends
    7. Execution challenges in Indonesian context
    8. Local business ecosystem and partnerships`;

    const response = await processWithClaude(analysisPrompt, systemPrompt);
    const analysis = parseFullAnalysis(response);

    // Cache the structured response
    setCachedValue(cacheKey, analysis);

    return NextResponse.json(analysis);
  } catch (error) {
    console.error('Full Analysis Error:', error);
    return NextResponse.json(
      {
        error: 'Terjadi kesalahan saat menganalisis canvas Anda. Silakan coba lagi.',
      },
      { status: 500 }
    );
  }
}
