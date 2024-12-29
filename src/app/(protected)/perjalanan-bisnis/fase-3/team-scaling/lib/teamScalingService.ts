// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/teamScalingService.ts

import { processWithClaude } from '@/lib/anthropicClient';
import { TeamScalingAssessment, RoleDefinition, TrainingNeed, GeneratedScalingPlan } from './TeamScalingTypes';
import {
  SYSTEM_PROMPT,
  generateRoleDefinitionPrompt,
  generateStructureOptimizationPrompt,
  generateSkillsGapPrompt,
  generateTrainingNeedsPrompt,
  parseRoleDefinitionResponse,
  parseTrainingNeedsResponse,
} from './teamScalingPrompts';

export async function generateRoleDefinition(
  companyInfo: TeamScalingAssessment['companyInfo'],
  currentStructure: TeamScalingAssessment['currentStructure'],
  roleRequest: Partial<RoleDefinition>
): Promise<RoleDefinition | null> {
  try {
    const prompt = generateRoleDefinitionPrompt(companyInfo, currentStructure, roleRequest);

    const response = await processWithClaude(prompt, SYSTEM_PROMPT);
    return parseRoleDefinitionResponse(response);
  } catch (error) {
    console.error('Error generating role definition:', error);
    throw error;
  }
}

export async function analyzeTeamStructure(assessment: TeamScalingAssessment): Promise<any> {
  try {
    const prompt = generateStructureOptimizationPrompt(assessment);
    const response = await processWithClaude(prompt, SYSTEM_PROMPT);
    // Parse and return structure analysis
    return response;
  } catch (error) {
    console.error('Error analyzing team structure:', error);
    throw error;
  }
}

export async function analyzeSkillsGap(assessment: TeamScalingAssessment): Promise<any> {
  try {
    const prompt = generateSkillsGapPrompt(assessment);
    const response = await processWithClaude(prompt, SYSTEM_PROMPT);
    // Parse and return skills gap analysis
    return response;
  } catch (error) {
    console.error('Error analyzing skills gap:', error);
    throw error;
  }
}

export async function generateTrainingPlan(assessment: TeamScalingAssessment): Promise<TrainingNeed[]> {
  try {
    const prompt = generateTrainingNeedsPrompt(assessment);
    const response = await processWithClaude(prompt, SYSTEM_PROMPT);
    return parseTrainingNeedsResponse(response);
  } catch (error) {
    console.error('Error generating training plan:', error);
    throw error;
  }
}

export async function generateComprehensiveScalingPlan(assessment: TeamScalingAssessment): Promise<GeneratedScalingPlan> {
  try {
    // Process all aspects in parallel
    const [structureAnalysis, skillsAnalysis, trainingPlan] = await Promise.all([
      analyzeTeamStructure(assessment),
      analyzeSkillsGap(assessment),
      generateTrainingPlan(assessment),
    ]);

    // Combine results into comprehensive plan
    // Implementation of combining logic...

    return {
      summary: {
        tldr: 'Implementation needed',
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
    console.error('Error generating comprehensive scaling plan:', error);
    throw error;
  }
}
