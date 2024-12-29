// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/teamScalingPrompts.ts

import { TeamScalingAssessment, RoleDefinition, TrainingNeed, GeneratedScalingPlan } from './TeamScalingTypes';

export const SYSTEM_PROMPT = `You are an experienced HR and organizational development consultant 
helping Indonesian companies scale their teams effectively. Your responses should be in Bahasa 
Indonesia.

Guidelines:
1. Use clear, professional Bahasa Indonesia
2. Provide practical, actionable advice
3. Consider Indonesian market context and salary ranges
4. Focus on realistic, achievable scaling plans
5. Include both short-term and long-term perspectives
6. Consider budget constraints and market conditions

When analyzing:
- Start with key insights and summaries
- Break down complex recommendations into steps
- Provide specific examples and templates
- Include risk mitigation strategies
- Consider local talent market conditions`;

// Role Definition Generator Prompt
export function generateRoleDefinitionPrompt(
  companyInfo: TeamScalingAssessment['companyInfo'],
  currentStructure: TeamScalingAssessment['currentStructure'],
  roleRequest: Partial<RoleDefinition>
): string {
  return `Help define a comprehensive role for this company:

COMPANY CONTEXT:
Industry: ${companyInfo.industry}
Stage: ${companyInfo.stage}
Current Size: ${companyInfo.currentSize}
Target Size: ${companyInfo.targetSize}

ROLE REQUEST:
Title: ${roleRequest.title || 'Not specified'}
Department: ${roleRequest.department || 'Not specified'}
Initial Description: ${roleRequest.description || 'Not specified'}

CURRENT TEAM STRUCTURE:
${currentStructure.departments.map((d) => `${d.name}: ${d.headCount} members`).join('\n')}

Please provide a detailed role definition including:
1. Refined role title and description
2. Key responsibilities
3. Required and preferred skills
4. Experience requirements
5. Market-appropriate salary range for Indonesia
6. Reporting structure recommendations
7. Success metrics for this role

Response format:
<role_definition>
[Detailed role definition following RoleDefinition structure]
</role_definition>

<additional_insights>
[Any extra recommendations or considerations]
</additional_insights>`;
}

// Team Structure Optimization Prompt
export function generateStructureOptimizationPrompt(assessment: TeamScalingAssessment): string {
  return `Analyze and optimize this team structure:

CURRENT STATE:
Size: ${assessment.companyInfo.currentSize} to ${assessment.companyInfo.targetSize}
Stage: ${assessment.companyInfo.stage}
Challenges: ${assessment.companyInfo.mainChallenges.join(', ')}

DEPARTMENTS:
${assessment.currentStructure.departments.map((d) => `${d.name}: ${d.headCount} members`).join('\n')}

SCALING GOALS:
${assessment.companyInfo.businessGoals.join('\n')}

Please provide:
1. Recommended org structure
2. Department sizing recommendations
3. Reporting lines optimization
4. Span of control analysis
5. Growth stage transitions
6. Risk areas and mitigation

Format:
<structure_analysis>
[Detailed analysis of current structure]
</structure_analysis>

<recommendations>
[Specific structural recommendations]
</recommendations>

<transition_plan>
[How to implement changes]
</transition_plan>`;
}

// Skills Gap Analysis Prompt
export function generateSkillsGapPrompt(assessment: TeamScalingAssessment): string {
  return `Analyze the skills gap for this scaling team:

CURRENT SKILLS:
${assessment.skillsAssessment.currentSkills.map((s) => `${s.name}: ${s.currentTeamCount} members`).join('\n')}

REQUIRED SKILLS:
${assessment.skillsAssessment.requiredSkills.map((s) => `${s.name}: ${s.requiredCount} needed`).join('\n')}

BUSINESS CONTEXT:
${assessment.companyInfo.businessGoals.join('\n')}

Please analyze:
1. Critical skill gaps
2. Impact on business goals
3. Prioritized acquisition strategy
4. Build vs. buy recommendations
5. Timeline for closing gaps
6. Market availability assessment

Format:
<gaps_analysis>
[Detailed analysis of skill gaps]
</gaps_analysis>

<acquisition_strategy>
[How to acquire needed skills]
</acquisition_strategy>

<timeline>
[Recommended timeline for closing gaps]
</timeline>`;
}

// Training Needs Assessment Prompt
export function generateTrainingNeedsPrompt(assessment: TeamScalingAssessment): string {
  return `Assess training needs for this scaling team:

SKILL GAPS:
${assessment.skillsAssessment.gaps.map((g) => `${g.skillId}: Gap of ${g.gap} (${g.priority} priority)`).join('\n')}

TEAM COMPOSITION:
${assessment.currentStructure.departments.map((d) => `${d.name}: ${d.headCount} members`).join('\n')}

Please provide:
1. Priority training areas
2. Recommended programs
3. Timeline and milestones
4. Budget considerations
5. Success metrics
6. Implementation approach

Format:
<training_needs>
[Detailed training needs assessment]
</training_needs>

<programs>
[Specific program recommendations]
</programs>

<implementation>
[Implementation strategy]
</implementation>`;
}

// Parse AI Responses
export function parseRoleDefinitionResponse(response: string): RoleDefinition | null {
  try {
    const roleMatch = response.match(/<role_definition>([\s\S]*?)<\/role_definition>/);
    if (!roleMatch) return null;

    const roleContent = roleMatch[1];

    // Extract specific fields using regex
    const title = roleContent.match(/Title: (.*)/)?.[1] || '';
    const department = roleContent.match(/Department: (.*)/)?.[1] || '';
    const description = roleContent.match(/Description:\n([\s\S]*?)\n(?=\w)/)?.[1] || '';

    // Continue with other fields...

    return {
      id: Date.now().toString(),
      title,
      department,
      description,
      // ... map other fields
      responsibilities: [], // Parse from response
      requiredSkills: [], // Parse from response
      preferredSkills: [], // Parse from response
      experience: {
        yearsRequired: 0, // Parse from response
        level: 'mid_level', // Parse from response
      },
      priority: 'medium',
      timeline: 'short_term',
    };
  } catch (error) {
    console.error('Error parsing role definition response:', error);
    return null;
  }
}

// Parse Training Needs Response
export function parseTrainingNeedsResponse(response: string): TrainingNeed[] {
  try {
    const needsMatch = response.match(/<training_needs>([\s\S]*?)<\/training_needs>/);
    if (!needsMatch) return [];

    // Implementation of parsing logic...
    return [];
  } catch (error) {
    console.error('Error parsing training needs response:', error);
    return [];
  }
}

// Main Analysis Function
export async function generateFullScalingPlan(assessment: TeamScalingAssessment): Promise<GeneratedScalingPlan> {
  try {
    const structurePrompt = generateStructureOptimizationPrompt(assessment);
    const skillsPrompt = generateSkillsGapPrompt(assessment);
    const trainingPrompt = generateTrainingNeedsPrompt(assessment);

    // Process all prompts...

    return {
      summary: {
        tldr: '',
        keyRecommendations: [],
      },
      detailedAnalysis: {
        structure: '',
        roles: '',
        timeline: '',
        skills: '',
        training: '',
        budget: '',
        risks: '',
      },
      actionPlan: {
        immediate: [],
        shortTerm: [],
        midTerm: [],
        longTerm: [],
      },
    };
  } catch (error) {
    console.error('Error generating scaling plan:', error);
    throw error;
  }
}
