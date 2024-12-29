// src/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/lib/anthropicClient.ts

import Anthropic from '@anthropic-ai/sdk';

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
 * @param systemPrompt - Optional system prompt
 * @returns Claude's response
 */
export async function processWithClaude(prompt: string, systemPrompt?: string): Promise<string> {
  const anthropic = createAnthropicClient();

  try {
    const response = await anthropic.messages.create({
      model: 'claude-3-sonnet-20240229',
      max_tokens: 4000,
      temperature: 0.7,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: prompt + '\n\nPlease provide your response in Bahasa Indonesia.',
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
