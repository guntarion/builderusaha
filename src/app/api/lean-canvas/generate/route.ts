// src/app/api/lean-canvas/generate/route.ts

import { NextResponse } from 'next/server';
import { processWithClaude } from '@/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/lib/anthropicClient';
import { checkRateLimit, getCachedValue, setCachedValue } from '@/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/lib/rateLimit';
import { GenerateCanvasRequest, GeneratedCanvas } from '@/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/lib/canvasTypes';

/**
 * Parses the AI response into a structured GeneratedCanvas object
 * @param response - Raw response from Claude
 * @returns Structured canvas object
 */
function parseGeneratedCanvas(response: string): GeneratedCanvas {
  try {
    // Extract content between lean_canvas tags
    const canvasMatch = response.match(/<lean_canvas>([\s\S]*?)<\/lean_canvas>/);
    const explanationMatch = response.match(/<explanation>([\s\S]*?)<\/explanation>/);

    if (!canvasMatch) {
      throw new Error('Invalid response format: Missing canvas content');
    }

    const canvasContent = canvasMatch[1];

    // Extract each field's content
    const extractField = (tag: string) => {
      const match = canvasContent.match(new RegExp(`<${tag}>[\\s\\S]*?([\\s\\S]*?)<\/${tag}>`, 'm'));
      return match ? match[1].trim() : '';
    };

    return {
      refinedProblem: extractField('refined_problem'),
      refinedCustomerSegments: extractField('refined_customer_segments'),
      refinedValueProposition: extractField('refined_value_proposition'),
      proposedSolution: extractField('proposed_solution'),
      proposedRevenueStreams: extractField('proposed_revenue_streams'),
      proposedCostStructure: extractField('proposed_cost_structure'),
      proposedKeyMetrics: extractField('proposed_key_metrics'),
      proposedUnfairAdvantage: extractField('proposed_unfair_advantage'),
      proposedChannels: extractField('proposed_channels'),
      explanation: explanationMatch ? explanationMatch[1].trim() : '',
    };
  } catch (error) {
    console.error('Error parsing generated canvas:', error);
    throw new Error('Failed to parse AI response');
  }
}

/**
 * Generates the prompt for canvas generation
 * @param request - The canvas generation request data
 * @returns Formatted prompt string
 */
function generatePrompt(request: GenerateCanvasRequest): string {
  return `You are an AI assistant acting as a startup consultant and expert in Lean Canvas creation. Your task is to refine and complete a Lean Canvas based on initial input from a user.

Here is the input provided by the user:

<problem>
${request.problem || ''}
</problem>

<customer_segments>
${request.customerSegments || ''}
</customer_segments>

<value_proposition>
${request.valueProposition || ''}
</value_proposition>

<solution>
${request.solution || ''}
</solution>

<revenue_streams>
${request.revenueStreams || ''}
</revenue_streams>

<cost_structure>
${request.costStructure || ''}
</cost_structure>

<key_metrics>
${request.keyMetrics || ''}
</key_metrics>

<unfair_advantage>
${request.unfairAdvantage || ''}
</unfair_advantage>

<channels>
${request.channels || ''}
</channels>

Your response MUST follow this EXACT format with these EXACT tags (replace content in brackets with your recommendations in Bahasa Indonesia):

<lean_canvas>
<refined_problem>
[Refined problem statement]
</refined_problem>

<refined_customer_segments>
[Refined customer segments]
</refined_customer_segments>

<refined_value_proposition>
[Refined value proposition]
</refined_value_proposition>

<proposed_solution>
[Detailed solution]
</proposed_solution>

<proposed_revenue_streams>
[Revenue streams]
</proposed_revenue_streams>

<proposed_cost_structure>
[Cost structure]
</proposed_cost_structure>

<proposed_key_metrics>
[Key metrics]
</proposed_key_metrics>

<proposed_unfair_advantage>
[Unfair advantage]
</proposed_unfair_advantage>

<proposed_channels>
[Channels]
</proposed_channels>
</lean_canvas>

<explanation>
[Brief explanation of your key refinements and additions, highlighting how they strengthen the overall business model]
</explanation>

Important:
1. Keep the XML tags exactly as shown
2. Provide all content in Bahasa Indonesia
3. Make sure each section is detailed and specific
4. Ensure all XML tags are properly closed`;
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';

  // Check rate limit
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Terlalu banyak permintaan. Silakan coba lagi dalam beberapa menit.' }, { status: 429 });
  }

  try {
    const requestData: GenerateCanvasRequest = await request.json();

    // Generate cache key from request data
    const cacheKey = `generate-canvas-${Object.values(requestData)
      .filter(Boolean)
      .map((v) => v.slice(0, 20))
      .join('')}`;

    // Check cache
    const cached = getCachedValue(cacheKey);
    if (cached) {
      return NextResponse.json({ canvas: cached });
    }

    // Process with Claude
    const prompt = generatePrompt(requestData);
    const response = await processWithClaude(prompt);
    const generatedCanvas = parseGeneratedCanvas(response);

    // Cache the response
    setCachedValue(cacheKey, generatedCanvas);

    return NextResponse.json({ canvas: generatedCanvas });
  } catch (error) {
    console.error('Canvas Generation Error:', error);
    return NextResponse.json({ error: 'Terjadi kesalahan saat membuat canvas. Silakan coba lagi.' }, { status: 500 });
  }
}
