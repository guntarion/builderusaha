// src/app/(protected)/penilaian-wirausaha/ujian-hidup/components/data/categoryDescriptions.ts
import type { CategoryDescriptions } from '../../types';

export const categoryDescriptions: CategoryDescriptions = {
  harta: {
    title: 'Kecenderungan Harta (Material Attachment)',
    description: 'Mengukur pola hubungan Anda dengan aspek material kehidupan',
    levels: {
      low: {
        label: 'Rendah (10-20)',
        description: 'Anda memiliki keterikatan yang sehat dengan aspek material',
        recommendations: [
          'Pertahankan pola pikir yang seimbang terhadap materi',
          'Tetap jaga prinsip hidup sederhana',
          'Kembangkan kebiasaan investasi yang bijak',
        ],
      },
      moderate: {
        label: 'Sedang (21-35)',
        description: 'Anda menunjukkan keseimbangan dalam mengelola aspek material',
        recommendations: [
          'Evaluasi pola konsumsi secara berkala',
          'Tingkatkan literasi finansial',
          'Bangun sistem pengelolaan keuangan yang lebih terstruktur',
        ],
      },
      high: {
        label: 'Tinggi (36-50)',
        description: 'Anda menunjukkan keterikatan yang kuat dengan aspek material',
        recommendations: [
          'Pertimbangkan konseling keuangan',
          'Praktikkan mindfulness dalam keputusan finansial',
          'Kembangkan sumber kepuasan hidup non-material',
        ],
      },
    },
    subsections: {
      relasiMateri: {
        title: 'Relasi dengan Materi',
        description: 'Bagaimana Anda memandang dan memprioritaskan aspek material',
      },
      polaKonsumsi: {
        title: 'Pola Konsumsi',
        description: 'Kebiasaan dan perilaku konsumtif Anda',
      },
      riskBehavior: {
        title: 'Perilaku Risiko',
        description: 'Kecenderungan mengambil risiko finansial',
      },
    },
  },
  tahta: {
    title: 'Kecenderungan Tahta (Power/Position)',
    description: 'Mengukur hubungan Anda dengan kekuasaan dan otoritas',
    levels: {
      low: {
        label: 'Rendah (10-20)',
        description: 'Anda memiliki hubungan yang sehat dengan kekuasaan',
        recommendations: ['Kembangkan kepemimpinan yang melayani', 'Pertahankan sikap kolaboratif', 'Tingkatkan assertiveness yang sehat'],
      },
      moderate: {
        label: 'Sedang (21-35)',
        description: 'Anda menunjukkan keseimbangan dalam mengelola kekuasaan',
        recommendations: ['Perkuat kemampuan kepemimpinan', 'Kembangkan emotional intelligence', 'Praktikkan delegasi yang efektif'],
      },
      high: {
        label: 'Tinggi (36-50)',
        description: 'Anda menunjukkan keterikatan yang kuat dengan kekuasaan',
        recommendations: ['Pertimbangkan executive coaching', 'Praktikkan humble leadership', 'Kembangkan empati dan kolaborasi'],
      },
    },
    subsections: {
      relasiKekuasaan: {
        title: 'Relasi dengan Kekuasaan',
        description: 'Bagaimana Anda memandang dan mengelola otoritas',
      },
      polaKompetisi: {
        title: 'Pola Kompetisi',
        description: 'Kecenderungan kompetitif dan ambisius Anda',
      },
      ambisi: {
        title: 'Ambisi',
        description: 'Dorongan untuk mencapai posisi dan pengakuan',
      },
    },
  },
  wanita: {
    title: 'Kecenderungan Wanita (Relationship Dynamics)',
    description: 'Mengukur pola hubungan dan keterikatan emosional',
    levels: {
      low: {
        label: 'Rendah (10-20)',
        description: 'Anda memiliki keseimbangan yang baik dalam relasi',
        recommendations: ['Pertahankan batasan yang sehat', 'Kembangkan intimacy yang sehat', 'Jaga keseimbangan pribadi dan relasi'],
      },
      moderate: {
        label: 'Sedang (21-35)',
        description: 'Anda menunjukkan kematangan dalam mengelola relasi',
        recommendations: ['Tingkatkan komunikasi asertif', 'Kembangkan emotional awareness', 'Praktikkan self-compassion'],
      },
      high: {
        label: 'Tinggi (36-50)',
        description: 'Anda menunjukkan keterikatan yang kuat dalam relasi',
        recommendations: ['Pertimbangkan relationship counseling', 'Kembangkan kemandirian emosional', 'Praktikkan boundary setting'],
      },
    },
    subsections: {
      relasiRomantis: {
        title: 'Relasi Romantis',
        description: 'Pola hubungan romantis dan attachment',
      },
      relasiKeluarga: {
        title: 'Relasi Keluarga',
        description: 'Dinamika hubungan dengan keluarga',
      },
      polaAttachment: {
        title: 'Pola Attachment',
        description: 'Kecenderungan attachment dan dependency',
      },
    },
  },
} as const;
