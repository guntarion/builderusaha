// src/app/(protected)/perjalanan-bisnis/power-tools/smart-goals-generator/lib/anthropicClient.ts

import Anthropic from '@anthropic-ai/sdk';
import { SmartGoal } from '../types';

/**
 * Creates and configures Anthropic client
 * @returns Configured Anthropic client instance
 */
export function createAnthropicClient() {
  if (!process.env.ANTHROPIC_API) {
    throw new Error('ANTHROPIC_API key is not configured');
  }

  return new Anthropic({
    apiKey: process.env.ANTHROPIC_API,
  });
}

/**
 * Processes a prompt through Claude
 * @param prompt - The prompt to process
 * @returns Claude's response formatted as a SMART goal
 */
export async function processWithClaude(prompt: string): Promise<string> {
  const anthropic = createAnthropicClient();
  const systemPrompt = `You are a business strategy AI assistant that helps convert business goals into SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals.

Your responses should be structured as valid JSON matching this TypeScript interface:

interface SmartGoal {
  original_goal: string;
  specific: {
    refined_statement: string;
    clarifying_details: string[];
  };
  measurable: {
    primary_metrics: string[];
    secondary_metrics: string[];
    measurement_method: string;
  };
  achievable: {
    target_breakdown: string[];
    required_resources: string[];
    risk_factors: string[];
  };
  relevant: {
    business_impact: string;
    stakeholder_benefits: string[];
    strategic_alignment: string;
  };
  time_bound: {
    final_deadline: string;
    milestones: {
      date: string;
      description: string;
      target: string;
    }[];
  };
  tracking_plan: {
    frequency: string;
    methods: string[];
    responsible_parties: string[];
  };
}

Ensure your response is valid JSON that can be parsed. Include realistic, actionable metrics and milestones.`;

  try {
    const response = await anthropic.messages.create({
      model: 'claude-3-sonnet-20240229',
      max_tokens: 4000,
      temperature: 0.7,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    // Access the content correctly
    if (response.content[0].type === 'text') {
      return response.content[0].text;
    }

    throw new Error('Unexpected response format from Claude');
  } catch (error) {
    console.error('Claude API Error:', error);
    throw new Error('Failed to process with Claude');
  }
}
