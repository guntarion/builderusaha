// src/app/(protected)/penilaian-bisnis/team-dynamics/utils/calculateTeamDynamics.ts

import { AssessmentResponse, AssessmentResult, SectionScore } from '../types';
import { assessmentSections, getSectionMaxScore, getMaxPossibleScore } from '../data/questions';

/**
 * Determines the level based on a percentage score
 * @param percentage - Score percentage
 * @returns Level classification (weak, moderate, or strong)
 */
const determineLevel = (percentage: number): 'weak' | 'moderate' | 'strong' => {
  if (percentage >= 80) return 'strong';
  if (percentage >= 60) return 'moderate';
  return 'weak';
};

/**
 * Generates recommendations based on section scores
 * @param sectionId - Section identifier
 * @param score - Section score percentage
 * @returns Array of recommendations
 */
const generateSectionRecommendations = (sectionId: string, score: number): string[] => {
  const recommendations: Record<string, Record<'weak' | 'moderate' | 'strong', string[]>> = {
    'collaboration-communication': {
      weak: [
        'Implementasikan standar komunikasi tim yang jelas',
        'Adakan regular team sync untuk meningkatkan kolaborasi',
        'Bangun sistem feedback yang konstruktif',
      ],
      moderate: ['Optimalkan channel komunikasi yang ada', 'Tingkatkan kualitas diskusi tim', 'Kembangkan protokol penyelesaian konflik'],
      strong: [
        'Dokumentasikan best practices komunikasi tim',
        'Bagikan pengalaman sukses ke tim lain',
        'Inovasi metode kolaborasi yang lebih efektif',
      ],
    },
    'leadership-decision': {
      weak: [
        'Perjelas struktur dan alur pengambilan keputusan',
        'Tingkatkan transparansi dalam delegasi tugas',
        'Bangun sistem accountability yang jelas',
      ],
      moderate: ['Optimalkan proses pengambilan keputusan', 'Kembangkan leadership pipeline dalam tim', 'Perkuat sistem monitoring dan evaluasi'],
      strong: [
        'Implementasi rotasi leadership untuk pengembangan',
        'Kembangkan framework delegasi yang lebih efektif',
        'Inovasi sistem pengambilan keputusan',
      ],
    },
    'performance-productivity': {
      weak: ['Tetapkan KPI dan target yang jelas', 'Implementasikan sistem tracking progress', 'Bangun standar kualitas kerja'],
      moderate: ['Optimalkan workflow dan proses kerja', 'Tingkatkan efisiensi manajemen waktu', 'Perkuat sistem quality control'],
      strong: ['Implementasi sistem automasi untuk efisiensi', 'Kembangkan metode optimasi produktivitas', 'Inovasi sistem reward berbasis kinerja'],
    },
    'culture-engagement': {
      weak: ['Definisikan nilai-nilai tim dengan jelas', 'Bangun program engagement regular', 'Implementasikan ritual tim yang konsisten'],
      moderate: ['Perkuat internalisasi nilai-nilai tim', 'Kembangkan program pengembangan tim', 'Tingkatkan aktivitas team building'],
      strong: ['Inovasi program kultur tim yang unik', 'Kembangkan sistem mentoring internal', 'Implementasi program leadership culture'],
    },
  };

  const level = determineLevel(score);
  return recommendations[sectionId][level] || [];
};

/**
 * Generates overall recommendations based on team assessment results
 * @param overallLevel - Overall assessment level
 * @returns Array of general recommendations
 */
const generateOverallRecommendations = (overallLevel: 'weak' | 'moderate' | 'strong'): string[] => {
  const recommendations = {
    weak: [
      'Prioritaskan pembangunan fondasi tim yang kuat',
      'Fokus pada pengembangan sistem komunikasi dan kolaborasi dasar',
      'Bangun standar operasi dan KPI yang jelas',
      'Investasi pada pelatihan dan pengembangan tim',
    ],
    moderate: [
      'Tingkatkan efektivitas sistem yang sudah ada',
      'Fokus pada optimasi proses dan workflow tim',
      'Kembangkan program pengembangan kepemimpinan',
      'Perkuat budaya feedback dan continuous improvement',
    ],
    strong: [
      'Inovasi sistem dan proses untuk level berikutnya',
      'Dokumentasikan dan bagikan best practices',
      'Kembangkan program mentoring dan knowledge sharing',
      'Bangun kultur high-performance yang berkelanjutan',
    ],
  };

  return recommendations[overallLevel];
};

/**
 * Calculates the assessment result
 * @param responses - User's assessment responses
 * @returns Complete assessment result with scores and recommendations
 */
export const calculateTeamDynamics = (responses: AssessmentResponse): AssessmentResult => {
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

  return {
    overallScore: totalScore,
    overallPercentage,
    overallLevel,
    sectionScores,
    generalRecommendations: generateOverallRecommendations(overallLevel),
  };
};
