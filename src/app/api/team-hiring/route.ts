import { NextResponse } from 'next/server';
import { anthropicClient } from '../../../app/(protected)/perjalanan-bisnis/fase-3/team-hiring/lib/anthropicClient';
import { rateLimit } from '../../../app/(protected)/perjalanan-bisnis/fase-3/team-hiring/lib/rateLimit';

export const POST = rateLimit(async (request: Request) => {
  try {
    const formData = await request.json();

    // Generate enhanced business context
    const enhancedContext = await anthropicClient.generate({
      prompt: `Analyze and enhance the following business context:
Business Type: ${formData.businessContext.businessType}
Industry: ${formData.businessContext.industry}
Current Size: ${formData.businessContext.teamSize}
Challenges: ${formData.challenges.challenges.join(', ')}
Goals: ${formData.challenges.goals.join(', ')}

Provide an enhanced understanding including:
1. Industry-specific context
2. Common challenges and opportunities
3. Growth indicators
4. Resource implications
5. Market positioning`,
    });

    // Generate hiring plan
    const hiringPlan = await anthropicClient.generate({
      prompt: `Based on the following enhanced business context:
${enhancedContext}

Generate a comprehensive hiring plan including:
1. Prioritized roles (0-3, 3-6, 6-12 months)
2. For each role:
   - Detailed job description
   - Required skills and experience
   - Salary range
   - Impact on business goals
3. Implementation timeline
4. Budget considerations
5. Risk assessment
6. Recruitment strategy`,
    });

    return NextResponse.json({
      enhancedContext,
      hiringPlan,
    });
  } catch (error) {
    console.error('Error processing team hiring request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
});
