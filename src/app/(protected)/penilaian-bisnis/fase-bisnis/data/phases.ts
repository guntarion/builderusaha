// src/app/(protected)/penilaian-bisnis/fase-bisnis/data/phases.ts
import type { PhaseDefinition } from './types';

// Map of all business phase definitions
export const phaseDefinitions: Record<string, PhaseDefinition> = {
  PHASE_1_1: {
    id: 'PHASE_1_1',
    name: 'Seed',
    subtitle: 'Punya Ide Bisnis',
    description: 'Tahap awal dimana bisnis masih berupa ide atau konsep yang belum divalidasi',
    characteristics: [
      'Masih berupa ide atau konsep bisnis',
      'Belum ada produk nyata',
      'Masih dalam tahap riset pasar',
      'Fokus pada validasi ide dan problem-solution fit',
    ],
    requirements: ['Memiliki ide bisnis yang jelas', 'Memiliki target market awal', 'Memiliki rencana validasi ide'],
    indicators: {
      businessOwnership: 'Owner sebagai eksekutor utama',
      managementFocus: 'Bikin dan jualan',
      managementStyle: 'Tangani sendiri, pengawasan langsung',
      organizationForm: 'Minimal sampai tak ada sama sekali',
      systemFormalization: 'Minimal sampai tak ada sama sekali',
      mainStrategy: 'Eksis di pasar',
      controlSystem: 'Respon pasar',
    },
    keyMetrics: ['Jumlah wawancara potential customer', 'Hasil validasi ide', 'Tingkat pemahaman masalah customer'],
    nextPhaseRequirements: [
      'Ide bisnis sudah divalidasi dengan minimal 10 potential customer',
      'Memiliki prototype atau MVP awal',
      'Memiliki rencana pengembangan produk',
    ],
  },
  // ... add other phases as per the content in your paste-1.txt
};
