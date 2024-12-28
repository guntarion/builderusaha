// src/app/(protected)/penilaian-bisnis/pitch-readiness/data/questions.ts

import type { AssessmentSection } from '../types';

/**
 * Assessment questions organized by sections for evaluating pitch readiness
 * Each section contains specific questions about different aspects of pitch preparation
 * Each question has options scored from 1-5 where:
 * 1 = Not prepared at all
 * 2 = Basic preparation
 * 3 = Moderate preparation
 * 4 = Well prepared
 * 5 = Excellently prepared
 */
export const assessmentSections: AssessmentSection[] = [
  {
    id: 'pitch-deck',
    title: 'Pitch Deck & Presentasi',
    questions: [
      {
        id: 'pd1',
        text: 'Seberapa lengkap konten pitch deck Anda mencakup elemen-elemen kunci (problem, solution, market size, business model, dll)?',
        options: [
          { value: 1, label: 'Masih sangat dasar/belum lengkap' },
          { value: 2, label: 'Mencakup beberapa elemen kunci' },
          { value: 3, label: 'Mencakup sebagian besar elemen kunci' },
          { value: 4, label: 'Lengkap dengan detail yang baik' },
          { value: 5, label: 'Sangat lengkap dan terstruktur' },
        ],
      },
      {
        id: 'pd2',
        text: 'Bagaimana kualitas visual dan desain pitch deck Anda?',
        options: [
          { value: 1, label: 'Sangat sederhana/belum didesain' },
          { value: 2, label: 'Desain dasar dengan template umum' },
          { value: 3, label: 'Desain cukup baik dan konsisten' },
          { value: 4, label: 'Desain profesional dan menarik' },
          { value: 5, label: 'Desain sangat profesional dengan branding kuat' },
        ],
      },
      {
        id: 'pd3',
        text: 'Seberapa baik alur cerita (storytelling) dalam pitch deck Anda?',
        options: [
          { value: 1, label: 'Belum ada alur cerita yang jelas' },
          { value: 2, label: 'Alur cerita masih dasar' },
          { value: 3, label: 'Alur cerita cukup mengalir' },
          { value: 4, label: 'Alur cerita menarik dan terstruktur' },
          { value: 5, label: 'Alur cerita sangat menarik dan mengena' },
        ],
      },
    ],
  },
  {
    id: 'business-model',
    title: 'Model Bisnis',
    questions: [
      {
        id: 'bm1',
        text: 'Seberapa jelas dan kuat value proposition bisnis Anda?',
        options: [
          { value: 1, label: 'Masih belum jelas' },
          { value: 2, label: 'Cukup jelas tapi belum unik' },
          { value: 3, label: 'Jelas dan cukup unik' },
          { value: 4, label: 'Sangat jelas dan unik' },
          { value: 5, label: 'Sangat jelas, unik, dan terbukti' },
        ],
      },
      {
        id: 'bm2',
        text: 'Seberapa dalam analisis pasar dan kompetitor Anda?',
        options: [
          { value: 1, label: 'Belum ada analisis formal' },
          { value: 2, label: 'Analisis dasar tersedia' },
          { value: 3, label: 'Analisis cukup mendalam' },
          { value: 4, label: 'Analisis mendalam dengan data' },
          { value: 5, label: 'Analisis sangat mendalam dengan insights kuat' },
        ],
      },
      {
        id: 'bm3',
        text: 'Seberapa matang model pendapatan dan monetisasi Anda?',
        options: [
          { value: 1, label: 'Masih konsep awal' },
          { value: 2, label: 'Model dasar sudah ada' },
          { value: 3, label: 'Model cukup jelas dengan beberapa validasi' },
          { value: 4, label: 'Model jelas dan sudah divalidasi' },
          { value: 5, label: 'Model sangat jelas dan terbukti berhasil' },
        ],
      },
    ],
  },
  {
    id: 'financial-readiness',
    title: 'Kesiapan Finansial',
    questions: [
      {
        id: 'fr1',
        text: 'Seberapa lengkap metrik finansial dan KPI bisnis Anda?',
        options: [
          { value: 1, label: 'Belum ada metrik formal' },
          { value: 2, label: 'Beberapa metrik dasar tersedia' },
          { value: 3, label: 'Sebagian besar metrik tersedia' },
          { value: 4, label: 'Metrik lengkap dengan tracking' },
          { value: 5, label: 'Metrik sangat lengkap dengan analisis' },
        ],
      },
      {
        id: 'fr2',
        text: 'Seberapa detail proyeksi finansial Anda?',
        options: [
          { value: 1, label: 'Belum ada proyeksi' },
          { value: 2, label: 'Proyeksi dasar tersedia' },
          { value: 3, label: 'Proyeksi cukup detail' },
          { value: 4, label: 'Proyeksi detail dengan asumsi jelas' },
          { value: 5, label: 'Proyeksi sangat detail dengan skenario' },
        ],
      },
      {
        id: 'fr3',
        text: 'Seberapa jelas rencana pendanaan dan penggunaan dana Anda?',
        options: [
          { value: 1, label: 'Belum ada rencana detail' },
          { value: 2, label: 'Rencana dasar tersedia' },
          { value: 3, label: 'Rencana cukup detail' },
          { value: 4, label: 'Rencana detail dengan milestone' },
          { value: 5, label: 'Rencana sangat detail dengan ROI' },
        ],
      },
    ],
  },
  {
    id: 'presentation-skills',
    title: 'Kemampuan Presentasi',
    questions: [
      {
        id: 'ps1',
        text: 'Seberapa siap Anda dalam menyampaikan pitch secara verbal?',
        options: [
          { value: 1, label: 'Belum pernah berlatih' },
          { value: 2, label: 'Sudah berlatih beberapa kali' },
          { value: 3, label: 'Cukup percaya diri' },
          { value: 4, label: 'Sangat percaya diri' },
          { value: 5, label: 'Sangat percaya diri dan berpengalaman' },
        ],
      },
      {
        id: 'ps2',
        text: 'Seberapa siap Anda menghadapi pertanyaan dari investor?',
        options: [
          { value: 1, label: 'Belum siap menjawab pertanyaan' },
          { value: 2, label: 'Siap menjawab pertanyaan dasar' },
          { value: 3, label: 'Siap menjawab sebagian besar pertanyaan' },
          { value: 4, label: 'Sangat siap dengan data pendukung' },
          { value: 5, label: 'Sangat siap dengan data dan insights' },
        ],
      },
      {
        id: 'ps3',
        text: 'Seberapa baik manajemen waktu presentasi Anda?',
        options: [
          { value: 1, label: 'Belum pernah mengatur waktu' },
          { value: 2, label: 'Bisa sesuai waktu tapi kurang efektif' },
          { value: 3, label: 'Cukup efektif dalam waktu yang diberikan' },
          { value: 4, label: 'Sangat efektif dalam manajemen waktu' },
          { value: 5, label: 'Penguasaan waktu yang sempurna' },
        ],
      },
    ],
  },
];

/**
 * Utility function to get maximum possible score
 * @returns {number} Maximum possible score across all sections
 */
export const getMaxPossibleScore = (): number => {
  return assessmentSections.reduce((total, section) => {
    return total + section.questions.length * 5; // 5 is max score per question
  }, 0);
};

/**
 * Get section maximum score
 * @param sectionId - ID of the section
 * @returns {number} Maximum possible score for the section
 */
export const getSectionMaxScore = (sectionId: string): number => {
  const section = assessmentSections.find((s) => s.id === sectionId);
  return section ? section.questions.length * 5 : 0;
};
