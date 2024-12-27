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
        categoryScore += response * question.weight;
        categoryWeight += question.weight;
        totalWeight += question.weight;
      }
    });

    categoryScores[category.id] = categoryWeight > 0 ? (categoryScore / categoryWeight) * 100 : 0;

    overallScore += categoryScore;
  });

  // Normalize overall score
  overallScore = totalWeight > 0 ? (overallScore / totalWeight) * 100 : 0;

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

function determinePhase(score: number): BusinessPhase {
  const normalizedScore = score * 1.6; // Scale to match phase thresholds (0-160)

  for (const [phase, threshold] of Object.entries(PHASE_THRESHOLDS)) {
    if (normalizedScore >= threshold.min && normalizedScore <= threshold.max) {
      return phase as BusinessPhase;
    }
  }

  return 'PHASE_1_1'; // Default to first phase if score is too low
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
