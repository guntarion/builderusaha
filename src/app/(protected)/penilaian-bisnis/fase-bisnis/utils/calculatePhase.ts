// src/app/(protected)/penilaian-bisnis/fase-bisnis/utils/calculatePhase.ts
import type { AssessmentResponse, BusinessPhase, AssessmentResult } from '../data/types';
import { assessmentCategories } from '../data/questions';
import { generateRecommendations } from './generateRecommendations';

const PHASE_THRESHOLDS = {
  PHASE_1_1: { min: 0, max: 20 },
  PHASE_1_2: { min: 21, max: 40 },
  PHASE_2_1: { min: 41, max: 60 },
  PHASE_2_2: { min: 61, max: 80 },
  PHASE_3_1: { min: 81, max: 100 },
  PHASE_3_2: { min: 101, max: 120 },
  PHASE_4_1: { min: 121, max: 140 },
  PHASE_4_2: { min: 141, max: 160 },
};

export function calculatePhaseResult(responses: AssessmentResponse): AssessmentResult {
  // Calculate category scores
  const categoryScores: { [category: string]: number } = {};
  let overallScore = 0;
  let totalWeight = 0;

  assessmentCategories.forEach((category) => {
    let categoryScore = 0;
    let categoryWeight = 0;

    category.questions.forEach((question) => {
      const response = Number(responses[question.id]);
      if (!isNaN(response)) {
        // Normalize the response to be between 0-100
        // Assuming responses are 0-4 (5 options)
        const normalizedResponse = response * 25; // This makes each answer worth 0, 25, 50, 75, or 100
        categoryScore += normalizedResponse * question.weight;
        categoryWeight += question.weight;
        totalWeight += question.weight;
      }
    });

    // Calculate category score as percentage
    categoryScores[category.id] =
      categoryWeight > 0
        ? Math.min(categoryScore / categoryWeight, 100) // Ensure it doesn't exceed 100
        : 0;

    overallScore += categoryScore;
  });

  // Normalize overall score to be between 0-100
  overallScore = totalWeight > 0 ? Math.min(overallScore / totalWeight, 100) : 0;

  // Determine current phase based on overall score
  const currentPhase = determinePhase(overallScore);

  // Generate improvement areas and recommendations
  const nextPhaseGap = analyzeNextPhaseGap(currentPhase, categoryScores);
  const recommendations = generateRecommendations(currentPhase, nextPhaseGap);

  return {
    currentPhase,
    overallScore,
    categoryScores,
    recommendations,
    nextPhaseGap,
  };
}

// Update the determinePhase function
function determinePhase(score: number): BusinessPhase {
  // Map 0-100 score to phase thresholds
  if (score < 12.5) return 'PHASE_1_1';
  if (score < 25) return 'PHASE_1_2';
  if (score < 37.5) return 'PHASE_2_1';
  if (score < 50) return 'PHASE_2_2';
  if (score < 62.5) return 'PHASE_3_1';
  if (score < 75) return 'PHASE_3_2';
  if (score < 87.5) return 'PHASE_4_1';
  return 'PHASE_4_2';
}

function analyzeNextPhaseGap(currentPhase: BusinessPhase, categoryScores: { [category: string]: number }) {
  const phaseOrder: BusinessPhase[] = ['PHASE_1_1', 'PHASE_1_2', 'PHASE_2_1', 'PHASE_2_2', 'PHASE_3_1', 'PHASE_3_2', 'PHASE_4_1', 'PHASE_4_2'];

  const currentPhaseIndex = phaseOrder.indexOf(currentPhase);
  const nextPhase = currentPhaseIndex < phaseOrder.length - 1 ? phaseOrder[currentPhaseIndex + 1] : null;

  const missingRequirements: string[] = [];
  const improvementAreas: string[] = [];

  // Analyze category scores and determine improvement areas
  Object.entries(categoryScores).forEach(([category, score]) => {
    if (score < 70) {
      improvementAreas.push(category);
    }
  });

  return {
    missingRequirements,
    improvementAreas,
  };
}
