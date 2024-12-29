// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/teamScalingPrompts.ts

import { TeamScalingAssessment, RoleDefinition, TrainingNeeds, GeneratedScalingPlan } from './TeamScalingTypes';

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
Size: ${companyInfo.size}

ROLE REQUEST:
Title: ${roleRequest.title || 'Not specified'}
Initial Description: ${roleRequest.responsibilities?.join('\n') || 'Not specified'}

CURRENT TEAM STRUCTURE:
${currentStructure.departments.map((d) => `${d.name}: ${d.roles.length} roles`).join('\n')}

Please provide a detailed role definition including:
1. Refined role title
2. Key responsibilities
3. Required skills
4. Experience level
5. Reporting structure recommendations

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
Size: ${assessment.companyInfo.size}
Stage: ${assessment.companyInfo.stage}

DEPARTMENTS:
${assessment.currentStructure.departments.map((d) => `${d.name}: ${d.roles.length} roles`).join('\n')}

Please provide:
1. Recommended org structure
2. Department sizing recommendations
3. Reporting lines optimization
4. Growth stage transitions
5. Risk areas and mitigation

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
${assessment.skillsGaps[0].existingSkills.join('\n')}

REQUIRED SKILLS:
${assessment.skillsGaps[0].requiredSkills.join('\n')}

Please analyze:
1. Critical skill gaps
2. Impact on business goals
3. Prioritized acquisition strategy
4. Build vs. buy recommendations
5. Timeline for closing gaps

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
${assessment.skillsGaps[0].gapAnalysis.map((g: { skill: string; gapLevel: string }) => `${g.skill}: ${g.gapLevel} priority`).join('\n')}

TEAM COMPOSITION:
${assessment.currentStructure.departments.map((d) => `${d.name}: ${d.roles.length} roles`).join('\n')}

Please provide:
1. Priority training areas
2. Recommended programs
3. Timeline and milestones
4. Success metrics

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
    const responsibilities = roleContent.match(/Responsibilities:\n([\s\S]*?)\n(?=\w)/)?.[1]?.split('\n') || [];
    const requiredSkills = roleContent.match(/Required Skills:\n([\s\S]*?)\n(?=\w)/)?.[1]?.split('\n') || [];
    const experienceLevel = (roleContent.match(/Experience Level: (.*)/)?.[1] as 'Entry' | 'Mid' | 'Senior') || 'Mid';

    return {
      title,
      responsibilities,
      requiredSkills,
      experienceLevel,
    };
  } catch (error) {
    console.error('Error parsing role definition response:', error);
    return null;
  }
}

// Parse Training Needs Response
export function parseTrainingNeedsResponse(response: string): TrainingNeeds[] {
  try {
    const needsMatch = response.match(/<training_needs>([\s\S]*?)<\/training_needs>/);
    if (!needsMatch) return [];

    const trainingContent = needsMatch[1];
    const programs = trainingContent.match(/Programs:\n([\s\S]*?)\n(?=\w)/)?.[1]?.split('\n') || [];

    return [
      {
        trainingPrograms: programs.map((program) => ({
          name: program,
          targetRoles: [],
          duration: '',
          objectives: [],
        })),
      },
    ];
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
      roles: [],
      timeline: {
        phases: [],
      },
      structure: {
        departments: [],
      },
      skillsDevelopment: {
        existingSkills: [],
        requiredSkills: [],
        gapAnalysis: [],
      },
      trainingPrograms: [],
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
        steps: [],
        timeline: '',
        responsibilities: [],
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
