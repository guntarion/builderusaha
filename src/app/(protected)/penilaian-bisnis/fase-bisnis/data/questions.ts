// src/app/(protected)/penilaian-bisnis/fase-bisnis/data/questions.ts
import type { AssessmentCategory } from './types';

export const assessmentCategories: AssessmentCategory[] = [
  {
    id: 'business_foundation',
    name: 'Fondasi Bisnis',
    description: 'Menilai dasar dan kesiapan bisnis Anda',
    questions: [
      {
        id: 'business_concept',
        category: 'business_foundation',
        question: 'Dalam tahap apa konsep bisnis Anda saat ini?',
        responseType: 'multiple',
        options: [
          'Masih berupa ide atau konsep dasar',
          'Sudah ada model bisnis yang tervalidasi',
          'Sudah memiliki produk/layanan yang dijual',
          'Bisnis sudah beroperasi dengan pelanggan tetap',
          'Bisnis sudah matang dengan multiple revenue streams',
        ],
        phaseRelevance: ['PHASE_1_1', 'PHASE_1_2', 'PHASE_2_1'],
        weight: 2,
      },
      {
        id: 'product_status',
        category: 'business_foundation',
        question: 'Bagaimana status produk/layanan Anda?',
        responseType: 'multiple',
        options: [
          'Masih dalam tahap ideasi',
          'Sudah ada prototype/MVP',
          'Produk sudah dijual ke pasar',
          'Produk sudah dikembangkan berdasar feedback pasar',
          'Multiple produk dengan pengembangan berkelanjutan',
        ],
        phaseRelevance: ['PHASE_1_1', 'PHASE_1_2', 'PHASE_2_1', 'PHASE_2_2'],
        weight: 2,
      },
    ],
  },
  {
    id: 'market_presence',
    name: 'Kehadiran di Pasar',
    description: 'Menilai posisi dan penetrasi pasar bisnis Anda',
    questions: [
      {
        id: 'customer_base',
        category: 'market_presence',
        question: 'Bagaimana basis pelanggan Anda saat ini?',
        responseType: 'multiple',
        options: [
          'Belum memiliki pelanggan',
          'Beberapa early adopters',
          'Pelanggan tetap mulai terbentuk',
          'Basis pelanggan yang solid dan berkembang',
          'Pelanggan loyal dengan tingkat retensi tinggi',
        ],
        phaseRelevance: ['PHASE_2_1', 'PHASE_2_2', 'PHASE_3_1'],
        weight: 1.5,
      },
      {
        id: 'market_reach',
        category: 'market_presence',
        question: 'Seberapa luas jangkauan pasar Anda?',
        responseType: 'multiple',
        options: [
          'Masih dalam tahap riset pasar',
          'Pasar lokal terbatas',
          'Pasar regional yang berkembang',
          'Ekspansi pasar aktif ke berbagai wilayah',
          'Pemain dominan di pasar dengan coverage luas',
        ],
        phaseRelevance: ['PHASE_2_2', 'PHASE_3_1', 'PHASE_3_2'],
        weight: 1.5,
      },
    ],
  },
  // More categories will be added later
];
