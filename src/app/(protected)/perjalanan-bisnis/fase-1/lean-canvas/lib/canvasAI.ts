// src/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/lib/canvasAI.ts

import { CanvasFieldType, LeanCanvas } from './canvasTypes';
import { generateFieldPrompt, generateOverallAnalysisPrompt } from './canvasPrompts';
import { SYSTEM_PROMPT } from './canvasPrompts';

interface AIResponse {
  analysis: string;
  suggestions: string[];
  questions: string[];
  nextSteps: string[];
}

/**
 * Processes a single field with AI assistance
 * @param fieldType - The type of field being processed
 * @param canvas - The complete canvas data
 * @returns Processed AI response for the field
 */

export async function processField(fieldType: CanvasFieldType, canvas: LeanCanvas): Promise<AIResponse> {
  try {
    const prompt = generateFieldPrompt(fieldType, canvas.fields[fieldType].value, canvas);

    // Here you would make the actual API call to your AI service
    // This is a placeholder for the actual implementation
    const response = await fetch('/api/ai/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        fieldType,
        systemPrompt: SYSTEM_PROMPT,
      }),
    });

    if (!response.ok) {
      throw new Error('AI processing failed');
    }

    const data = await response.json();
    return data as AIResponse;
  } catch (error) {
    console.error('AI Processing Error:', error);
    return {
      analysis: 'Unable to process at this time',
      suggestions: [],
      questions: [],
      nextSteps: [],
    };
  }
}

/**
 * Processes the entire canvas for overall analysis
 * @param canvas - The complete canvas data
 * @returns Overall canvas analysis from AI
 */
export async function processFullCanvas(canvas: LeanCanvas): Promise<{
  summary: string;
  recommendations: string[];
  risks: string[];
  nextSteps: string[];
}> {
  try {
    const prompt = generateOverallAnalysisPrompt(canvas);

    // Here you would make the actual API call to your AI service
    const response = await fetch('/api/ai/analyze-full', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        systemPrompt: SYSTEM_PROMPT,
      }),
    });

    if (!response.ok) {
      throw new Error('AI processing failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Full Canvas Analysis Error:', error);
    return {
      summary: 'Unable to process full analysis at this time',
      recommendations: [],
      risks: [],
      nextSteps: [],
    };
  }
}

/**
 * Processes field validation with AI assistance
 * @param fieldType - The type of field being validated
 * @param value - The current field value
 * @returns Validation results
 */
export async function validateFieldWithAI(
  fieldType: CanvasFieldType,
  value: string
): Promise<{
  isValid: boolean;
  feedback: string;
  suggestions: string[];
}> {
  try {
    const response = await fetch('/api/ai/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fieldType,
        value,
      }),
    });

    if (!response.ok) {
      throw new Error('Validation failed');
    }

    return await response.json();
  } catch (error) {
    console.error('AI Validation Error:', error);
    return {
      isValid: true, // Defaulting to true in case of error
      feedback: 'Unable to validate at this time',
      suggestions: [],
    };
  }
}
