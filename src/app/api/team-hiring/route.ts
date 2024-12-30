// src/app/api/team-hiring/route.ts

import { NextResponse } from 'next/server';
import { anthropicClient } from '../../../app/(protected)/perjalanan-bisnis/fase-3/team-hiring/lib/anthropicClient';

export async function POST(request: Request) {
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
      prompt: `Based on the following business information:

Enhanced Context:
${enhancedContext}

Current Team Skills: ${formData.teamNeeds.currentSkills.join(', ')}
Missing Critical Skills: ${formData.teamNeeds.missingSkills}
Current Bottlenecks: ${formData.teamNeeds.bottlenecks}
Hiring Budget: ${formData.teamNeeds.hiringBudget}

Business Goals:
- 3 Month Goals: ${formData.teamNeeds.shortTermGoals}
- 6 Month Goals: ${formData.teamNeeds.mediumTermGoals}
- 12 Month Goals: ${formData.teamNeeds.longTermGoals}

Success Metrics: ${formData.teamNeeds.successMetrics}

Generate a comprehensive hiring plan including:
1. Prioritized roles (0-3, 3-6, 6-12 months) aligned with business goals
2. For each role:
   - Detailed job description
   - Required skills and experience (focusing on identified missing skills)
   - Salary range (within specified budget: ${formData.teamNeeds.hiringBudget})
   - Impact on business goals and success metrics
3. Implementation timeline
4. Budget allocation strategy
5. Risk assessment and mitigation plan
6. Recruitment strategy and channels`,
    });

    return NextResponse.json({
      enhancedContext,
      hiringPlan,
    });
  } catch (error) {
    console.error('Error processing team hiring request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
