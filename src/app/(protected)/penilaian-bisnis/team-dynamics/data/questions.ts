// src/app/(protected)/penilaian-bisnis/team-dynamics/data/questions.ts

import type { AssessmentSection } from '../types';

/**
 * Assessment questions organized by sections for evaluating team dynamics
 * Each section contains specific questions about different aspects of team effectiveness
 * Each question has options scored from 1-5 where:
 * 1 = Sangat Tidak Setuju / Never
 * 2 = Tidak Setuju / Rarely
 * 3 = Netral / Sometimes
 * 4 = Setuju / Often
 * 5 = Sangat Setuju / Always
 */
export const assessmentSections: AssessmentSection[] = [
  {
    id: 'collaboration-communication',
    title: 'Kolaborasi & Komunikasi',
    questions: [
      {
        id: 'cc1',
        text: 'Seberapa efektif komunikasi antar anggota tim dalam keseharian?',
        options: [
          { value: 1, label: 'Sangat tidak efektif, sering terjadi miskomunikasi' },
          { value: 2, label: 'Kurang efektif, kadang terjadi kesalahpahaman' },
          { value: 3, label: 'Cukup efektif, komunikasi berjalan normal' },
          { value: 4, label: 'Efektif, komunikasi jelas dan terstruktur' },
          { value: 5, label: 'Sangat efektif, komunikasi lancar dan produktif' },
        ],
      },
      {
        id: 'cc2',
        text: 'Bagaimana kualitas kolaborasi dalam penyelesaian tugas tim?',
        options: [
          { value: 1, label: 'Tim cenderung bekerja secara terpisah' },
          { value: 2, label: 'Kolaborasi minimal dan tidak terstruktur' },
          { value: 3, label: 'Kolaborasi cukup baik saat diperlukan' },
          { value: 4, label: 'Kolaborasi aktif dan produktif' },
          { value: 5, label: 'Kolaborasi sangat kuat dan saling mendukung' },
        ],
      },
      {
        id: 'cc3',
        text: 'Seberapa baik tim menangani konflik dan perbedaan pendapat?',
        options: [
          { value: 1, label: 'Konflik sering tidak terselesaikan' },
          { value: 2, label: 'Konflik diselesaikan dengan tidak optimal' },
          { value: 3, label: 'Konflik dapat diselesaikan secara normal' },
          { value: 4, label: 'Konflik ditangani dengan baik dan profesional' },
          { value: 5, label: 'Konflik menjadi sumber pembelajaran dan kemajuan' },
        ],
      },
    ],
  },
  {
    id: 'leadership-decision',
    title: 'Kepemimpinan & Pengambilan Keputusan',
    questions: [
      {
        id: 'ld1',
        text: 'Bagaimana kualitas kepemimpinan dalam tim?',
        options: [
          { value: 1, label: 'Kepemimpinan tidak efektif dan tidak jelas' },
          { value: 2, label: 'Kepemimpinan kurang konsisten' },
          { value: 3, label: 'Kepemimpinan cukup baik' },
          { value: 4, label: 'Kepemimpinan efektif dan supportive' },
          { value: 5, label: 'Kepemimpinan sangat efektif dan inspiratif' },
        ],
      },
      {
        id: 'ld2',
        text: 'Seberapa efektif proses pengambilan keputusan dalam tim?',
        options: [
          { value: 1, label: 'Keputusan lambat dan tidak terstruktur' },
          { value: 2, label: 'Keputusan sering tertunda atau tidak jelas' },
          { value: 3, label: 'Proses keputusan berjalan normal' },
          { value: 4, label: 'Keputusan dibuat dengan efektif dan tepat' },
          { value: 5, label: 'Proses keputusan sangat efisien dan inklusif' },
        ],
      },
      {
        id: 'ld3',
        text: 'Bagaimana kualitas delegasi dan pembagian tugas dalam tim?',
        options: [
          { value: 1, label: 'Delegasi tidak jelas dan tidak terstruktur' },
          { value: 2, label: 'Delegasi kurang efektif' },
          { value: 3, label: 'Delegasi cukup baik' },
          { value: 4, label: 'Delegasi jelas dan sesuai kompetensi' },
          { value: 5, label: 'Delegasi sangat efektif dan mengembangkan tim' },
        ],
      },
    ],
  },
  {
    id: 'performance-productivity',
    title: 'Kinerja & Produktivitas',
    questions: [
      {
        id: 'pp1',
        text: 'Seberapa baik tim mengelola waktu dan deadline?',
        options: [
          { value: 1, label: 'Sering terlambat dan tidak terorganisir' },
          { value: 2, label: 'Kadang terlambat dan kurang terencana' },
          { value: 3, label: 'Manajemen waktu cukup baik' },
          { value: 4, label: 'Manajemen waktu efektif dan terencana' },
          { value: 5, label: 'Manajemen waktu sangat efisien dan proaktif' },
        ],
      },
      {
        id: 'pp2',
        text: 'Bagaimana pencapaian target dan objektif tim?',
        options: [
          { value: 1, label: 'Jarang mencapai target' },
          { value: 2, label: 'Kadang mencapai target dengan kualitas minimal' },
          { value: 3, label: 'Cukup baik dalam mencapai target' },
          { value: 4, label: 'Sering melampaui target dengan baik' },
          { value: 5, label: 'Konsisten melampaui target dengan excellence' },
        ],
      },
      {
        id: 'pp3',
        text: 'Seberapa baik kualitas hasil kerja tim?',
        options: [
          { value: 1, label: 'Kualitas sering di bawah standar' },
          { value: 2, label: 'Kualitas minimal sesuai standar' },
          { value: 3, label: 'Kualitas cukup baik' },
          { value: 4, label: 'Kualitas tinggi dan konsisten' },
          { value: 5, label: 'Kualitas excellence dan inovatif' },
        ],
      },
    ],
  },
  {
    id: 'culture-engagement',
    title: 'Budaya & Engagement',
    questions: [
      {
        id: 'ce1',
        text: 'Seberapa kuat nilai-nilai dan budaya tim?',
        options: [
          { value: 1, label: 'Nilai dan budaya tidak jelas' },
          { value: 2, label: 'Nilai dan budaya kurang terinternalisasi' },
          { value: 3, label: 'Nilai dan budaya cukup baik' },
          { value: 4, label: 'Nilai dan budaya kuat dan konsisten' },
          { value: 5, label: 'Nilai dan budaya sangat kuat dan inspiratif' },
        ],
      },
      {
        id: 'ce2',
        text: 'Bagaimana tingkat motivasi anggota tim?',
        options: [
          { value: 1, label: 'Motivasi rendah dan tidak konsisten' },
          { value: 2, label: 'Motivasi kurang stabil' },
          { value: 3, label: 'Motivasi cukup baik' },
          { value: 4, label: 'Motivasi tinggi dan konsisten' },
          { value: 5, label: 'Motivasi sangat tinggi dan menginspirasi' },
        ],
      },
      {
        id: 'ce3',
        text: 'Seberapa tinggi rasa memiliki dan komitmen tim?',
        options: [
          { value: 1, label: 'Komitmen rendah dan tidak konsisten' },
          { value: 2, label: 'Komitmen minimal' },
          { value: 3, label: 'Komitmen cukup baik' },
          { value: 4, label: 'Komitmen tinggi dan loyal' },
          { value: 5, label: 'Komitmen sangat tinggi dan proaktif' },
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
