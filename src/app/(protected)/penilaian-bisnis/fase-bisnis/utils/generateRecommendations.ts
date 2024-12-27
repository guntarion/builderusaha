// src/app/(protected)/penilaian-bisnis/fase-bisnis/utils/generateRecommendations.ts
import type { BusinessPhase, RecommendationItem } from '../data/types';
import { phaseDefinitions } from '../data/phases';

export function generateRecommendations(
  currentPhase: BusinessPhase,
  nextPhaseGap: {
    missingRequirements: string[];
    improvementAreas: string[];
  }
): RecommendationItem[] {
  const currentPhaseInfo = phaseDefinitions[currentPhase];
  const recommendations: RecommendationItem[] = [];

  // Generate recommendations based on missing requirements
  nextPhaseGap.missingRequirements.forEach((requirement) => {
    recommendations.push(generateRequirementRecommendation(requirement));
  });

  // Generate recommendations based on improvement areas
  nextPhaseGap.improvementAreas.forEach((area) => {
    recommendations.push(generateImprovementRecommendation(area, currentPhase));
  });

  // Add phase-specific recommendations
  const phaseRecommendations = getPhaseSpecificRecommendations(currentPhase);
  recommendations.push(...phaseRecommendations);

  return recommendations;
}

function generateRequirementRecommendation(requirement: string): RecommendationItem {
  // Implement specific recommendation generation based on requirement type
  // This is a simplified example
  return {
    id: `req_${requirement.toLowerCase().replace(/\s+/g, '_')}`,
    title: `Penuhi Persyaratan: ${requirement}`,
    description: `Fokus pada pemenuhan persyaratan berikut untuk naik ke fase berikutnya`,
    priority: 'high',
    category: 'requirements',
    actionItems: ['Evaluate current status', 'Create action plan', 'Implement improvements', 'Measure progress'],
    resources: ['Guide to Meeting Requirements', 'Best Practices'],
  };
}

function generateImprovementRecommendation(area: string, phase: BusinessPhase): RecommendationItem {
  // Implement specific recommendation generation based on improvement area and phase
  // This is a simplified example
  return {
    id: `imp_${area.toLowerCase().replace(/\s+/g, '_')}`,
    title: `Tingkatkan: ${area}`,
    description: `Fokus pada peningkatan area ini untuk memperkuat posisi bisnis`,
    priority: 'medium',
    category: area,
    actionItems: ['Evaluate current performance', 'Identify gaps', 'Implement improvements', 'Monitor progress'],
  };
}

function getPhaseSpecificRecommendations(phase: BusinessPhase): RecommendationItem[] {
  // Implement phase-specific recommendations
  // This should be expanded based on your business logic
  return [];
}
