import Anthropic from '@anthropic-ai/sdk';

if (!process.env.ANTHROPIC_API) {
  throw new Error('ANTHROPIC_API key is not configured');
}

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API,
});

export const anthropicClient = {
  generate: async ({ prompt }: { prompt: string }) => {
    try {
      const response = await anthropic.messages.create({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 4000,
        temperature: 0.7,
        messages: [
          {
            role: 'user',
            content: prompt + '\n\nPlease provide your response in Bahasa Indonesia.',
          },
        ],
      });

      if (response.content[0].type === 'text') {
        return response.content[0].text;
      }

      throw new Error('Unexpected response format from Claude');
    } catch (error) {
      console.error('Claude API Error:', error);
      throw new Error('Failed to process with Claude');
    }
  },
};
