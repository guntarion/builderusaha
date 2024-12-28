// src/app/(protected)/penilaian-bisnis/pitch-readiness/utils/calculatePitchReadiness.ts

import { AssessmentResponse, AssessmentResult, SectionScore } from '../types';
import { assessmentSections, getSectionMaxScore, getMaxPossibleScore } from '../data/questions';

/**
 * Determines the level based on a percentage score
 * @param percentage - Score percentage
 * @returns Level classification (low, medium, or high)
 */
const determineLevel = (percentage: number): 'low' | 'medium' | 'high' => {
  if (percentage >= 80) return 'high';
  if (percentage >= 60) return 'medium';
  return 'low';
};

/**
 * Generates recommendations based on section scores
 * @param sectionId - Section identifier
 * @param score - Section score percentage
 * @returns Array of recommendations
 */
const generateSectionRecommendations = (sectionId: string, score: number): string[] => {
  const recommendations: Record<string, Record<'low' | 'medium' | 'high', string[]>> = {
    'pitch-deck': {
      low: ['Lengkapi elemen-elemen kunci dalam pitch deck', 'Tingkatkan kualitas desain visual', 'Bangun alur cerita yang lebih menarik'],
      medium: ['Perkuat unique selling proposition', 'Tambahkan data pendukung yang relevan', 'Optimalkan flow presentasi'],
      high: ['Fine-tune messaging untuk target investor', 'Siapkan deep-dive materials', 'Test pitch deck dengan mentor'],
    },
    'business-model': {
      low: ['Perjelas value proposition', 'Lakukan analisis pasar lebih mendalam', 'Definisikan model monetisasi dengan jelas'],
      medium: ['Validasi asumsi bisnis dengan data', 'Perkuat competitive advantage', 'Detailkan rencana go-to-market'],
      high: ['Siapkan skenario scaling', 'Kembangkan partnership strategy', 'Dokumentasikan product roadmap'],
    },
    'financial-readiness': {
      low: ['Siapkan basic financial metrics', 'Buat proyeksi finansial sederhana', 'Tentukan kebutuhan pendanaan'],
      medium: ['Lengkapi financial model', 'Detail rencana penggunaan dana', 'Siapkan analisis unit economics'],
      high: ['Siapkan multiple growth scenarios', 'Lengkapi valuasi bisnis', 'Optimalkan capital structure'],
    },
    'presentation-skills': {
      low: ['Latih delivery pitch secara reguler', 'Siapkan jawaban untuk FAQ investor', 'Praktikkan time management'],
      medium: ['Record dan evaluasi pitch practice', 'Perkuat storytelling ability', 'Siapkan data pendukung untuk Q&A'],
      high: ['Lakukan mock pitch dengan investor', 'Customize pitch untuk berbagai audience', 'Siapkan detailed appendix slides'],
    },
  };

  const level = determineLevel(score);
  return recommendations[sectionId][level] || [];
};

/**
 * Calculates the assessment result
 * @param responses - User's assessment responses
 * @returns Complete assessment result with scores and recommendations
 */
export const calculatePitchReadiness = (responses: AssessmentResponse): AssessmentResult => {
  let totalScore = 0;
  const sectionScores: Record<string, SectionScore> = {};

  // Calculate scores for each section
  assessmentSections.forEach((section) => {
    let sectionScore = 0;
    section.questions.forEach((question) => {
      sectionScore += responses[question.id] || 0;
    });

    const maxScore = getSectionMaxScore(section.id);
    const percentage = (sectionScore / maxScore) * 100;
    const level = determineLevel(percentage);

    sectionScores[section.id] = {
      score: sectionScore,
      maxScore,
      percentage,
      level,
      recommendations: generateSectionRecommendations(section.id, percentage),
    };

    totalScore += sectionScore;
  });

  const maxPossibleScore = getMaxPossibleScore();
  const overallPercentage = (totalScore / maxPossibleScore) * 100;
  const overallLevel = determineLevel(overallPercentage);

  const generalRecommendations = [
    overallLevel === 'low'
      ? [
          'Fokus pada penguatan fundamental pitch deck dan materi presentasi',
          'Mulai dengan meningkatkan kualitas konten dan data pendukung',
          'Latih kemampuan presentasi secara bertahap',
        ]
      : overallLevel === 'medium'
      ? ['Perkuat area-area spesifik yang masih lemah', 'Validasi materi dengan mentor atau advisor', 'Lakukan beberapa kali pitch practice']
      : [
          'Fine-tune pitch deck untuk target investor spesifik',
          'Siapkan detailed appendix untuk deep dive',
          'Lakukan mock pitch dengan potential investors',
        ],
  ].flat();

  return {
    overallScore: totalScore,
    overallPercentage,
    overallLevel,
    sectionScores,
    generalRecommendations,
  };
};
