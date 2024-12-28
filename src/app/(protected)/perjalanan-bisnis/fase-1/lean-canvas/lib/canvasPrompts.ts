// src/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/lib/canvasPrompts.ts

import { CanvasFieldType, LeanCanvas } from './canvasTypes';

/**
 * Base system prompt for the AI assistant
 * Sets the context and guidelines for AI responses
 *
 *
 */

export const SYSTEM_PROMPT = `You are an experienced business consultant helping Indonesian entrepreneurs 
develop their business model using the Lean Canvas framework. Your responses should be in Bahasa Indonesia.

Guidelines for your responses:
1. Use clear, professional Bahasa Indonesia
2. Avoid unnecessary English terms when Indonesian terms exist
3. Provide practical suggestions relevant to Indonesian market
4. Consider local business context and regulations

Format your responses in these sections:
- Analisis: Your evaluation of the current content
- Saran: Specific improvements or alternatives
- Pertanyaan: Key points that need clarification
- Langkah Selanjutnya: Actionable items to validate or improve`;

/**
 * Generates field-specific prompts based on the canvas field type
 * @param fieldType - The type of canvas field being processed
 * @param currentValue - The current value of the field
 * @param canvas - The entire canvas context
 * @returns Formatted prompt for the specific field
 */
export function generateFieldPrompt(fieldType: CanvasFieldType, currentValue: string, canvas: LeanCanvas): string {
  const prompts: Record<CanvasFieldType, (value: string, canvas: LeanCanvas) => string> = {
    problem: (value, canvas) => `
      Analyze the following problem statement for a business idea:
      "${value}"

      Context from the canvas:
      Customer Segments: ${canvas.fields.customerSegments.value}
      
      Please provide:
      1. Evaluation of problem clarity and significance
      2. Suggestions for better problem articulation
      3. Potential hidden problems or root causes
      4. Ways to validate these problems with Indonesian customers

      Consider:
      - Local market conditions
      - Indonesian consumer behavior
      - Cultural factors
      - Local competition`,

    customerSegments: (value, canvas) => `
      Analyze the following customer segment definition:
      "${value}"

      Context from the canvas:
      Problem: ${canvas.fields.problem.value}
      
      Please provide:
      1. Assessment of segment specificity and clarity
      2. Additional segments to consider
      3. Suggestions for narrowing or expanding the segment
      4. Methods to validate these segments`,

    valueProposition: (value, canvas) => `
      Analyze the following value proposition:
      "${value}"

      Context from the canvas:
      Problem: ${canvas.fields.problem.value}
      Customer Segments: ${canvas.fields.customerSegments.value}
      
      Please provide:
      1. Evaluation of the value proposition's strength
      2. Suggestions for making it more compelling
      3. Potential unique angles to consider
      4. Ways to test this value proposition`,

    solution: (value, canvas) => `
      Analyze the following solution:
      "${value}"

      Context from the canvas:
      Problem: ${canvas.fields.problem.value}
      Value Proposition: ${canvas.fields.valueProposition.value}
      
      Please provide:
      1. Assessment of solution-problem fit
      2. Suggestions for MVP features
      3. Potential technical or operational challenges
      4. Ways to validate the solution`,

    revenueStreams: (value, canvas) => `
      Analyze the following revenue model:
      "${value}"

      Context from the canvas:
      Value Proposition: ${canvas.fields.valueProposition.value}
      Customer Segments: ${canvas.fields.customerSegments.value}
      
      Please provide:
      1. Evaluation of revenue model viability
      2. Alternative revenue streams to consider
      3. Pricing strategy suggestions
      4. Ways to test price sensitivity`,

    costStructure: (value, canvas) => `
      Analyze the following cost structure:
      "${value}"

      Context from the canvas:
      Solution: ${canvas.fields.solution.value}
      Revenue Streams: ${canvas.fields.revenueStreams.value}
      
      Please provide:
      1. Assessment of cost completeness
      2. Hidden costs to consider
      3. Cost optimization opportunities
      4. Break-even considerations`,

    keyMetrics: (value, canvas) => `
      Analyze the following key metrics:
      "${value}"

      Context from the canvas:
      Value Proposition: ${canvas.fields.valueProposition.value}
      Revenue Streams: ${canvas.fields.revenueStreams.value}
      
      Please provide:
      1. Evaluation of metric relevance
      2. Additional metrics to consider
      3. Measurement methodology suggestions
      4. Early warning indicators`,

    unfairAdvantage: (value, canvas) => `
      Analyze the following unfair advantage:
      "${value}"

      Context from the canvas:
      Solution: ${canvas.fields.solution.value}
      Value Proposition: ${canvas.fields.valueProposition.value}
      
      Please provide:
      1. Assessment of advantage sustainability
      2. Suggestions for strengthening the advantage
      3. Potential competitive responses
      4. Ways to validate the advantage`,

    channels: (value, canvas) => `
      Analyze the following channels:
      "${value}"

      Context from the canvas:
      Customer Segments: ${canvas.fields.customerSegments.value}
      Value Proposition: ${canvas.fields.valueProposition.value}
      
      Please provide:
      1. Evaluation of channel effectiveness
      2. Additional channels to consider
      3. Channel cost-efficiency analysis
      4. Ways to test channel performance`,
  };

  return prompts[fieldType](currentValue, canvas);
}

/**
 * Generates a prompt for overall canvas analysis
 * @param canvas - The complete canvas data
 * @returns Formatted prompt for full canvas analysis
 */
export function generateOverallAnalysisPrompt(canvas: LeanCanvas): string {
  return `
    Please analyze this complete Lean Canvas:

    Problem:
    ${canvas.fields.problem.value}

    Customer Segments:
    ${canvas.fields.customerSegments.value}

    Value Proposition:
    ${canvas.fields.valueProposition.value}

    Solution:
    ${canvas.fields.solution.value}

    Revenue Streams:
    ${canvas.fields.revenueStreams.value}

    Cost Structure:
    ${canvas.fields.costStructure.value}

    Key Metrics:
    ${canvas.fields.keyMetrics.value}

    Unfair Advantage:
    ${canvas.fields.unfairAdvantage.value}

    Channels:
    ${canvas.fields.channels.value}

    Please provide:
    1. Overall business model viability assessment
    2. Key strengths and weaknesses
    3. Critical assumptions that need validation
    4. Suggested next steps and priorities
    5. Potential risks and mitigation strategies

    Format your response in clear sections for easy reading.`;
}
