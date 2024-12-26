// src/app/(protected)/penilaian-wirausaha/financial-literacy/data/questions.ts

import type { AssessmentSection, CategoryDefinition, CompetencyLevel, ReflectionQuestion } from '../types';

// Assessment Sections with Questions
export const assessmentSections: AssessmentSection[] = [
  {
    title: 'Pemahaman Konsep Dasar Keuangan',
    description: 'Menilai pemahaman Anda tentang konsep dasar keuangan dan akuntansi',
    questions: [
      {
        id: 1,
        question: 'Apa yang Anda pahami tentang konsep "Arus Kas" (Cash Flow)?',
        options: [
          {
            text: 'Uang yang tersedia di kas/bank saat ini',
            score: 1,
          },
          {
            text: 'Total pendapatan dikurangi total pengeluaran',
            score: 2,
          },
          {
            text: 'Pergerakan uang masuk dan keluar dalam periode tertentu',
            score: 3,
          },
          {
            text: 'Aliran uang masuk dan keluar yang mencakup operasional, investasi, dan pendanaan',
            score: 4,
          },
        ],
      },
      {
        id: 2,
        question: 'Bagaimana Anda membedakan antara aset dan liabilitas?',
        options: [
          {
            text: 'Aset adalah yang menghasilkan uang, liabilitas yang menghabiskan uang',
            score: 1,
          },
          {
            text: 'Aset adalah barang berharga, liabilitas adalah hutang',
            score: 2,
          },
          {
            text: 'Aset adalah sumber daya yang dimiliki, liabilitas adalah kewajiban yang harus dibayar',
            score: 3,
          },
          {
            text: 'Aset adalah sumber daya yang memiliki manfaat ekonomi masa depan, liabilitas adalah kewajiban masa kini yang timbul dari peristiwa masa lalu',
            score: 4,
          },
        ],
      },
      {
        id: 3,
        question: 'Apa yang Anda ketahui tentang konsep "Laba Bersih"?',
        options: [
          {
            text: 'Uang yang tersisa setelah membayar semua pengeluaran',
            score: 1,
          },
          {
            text: 'Total pendapatan dikurangi biaya operasional',
            score: 2,
          },
          {
            text: 'Pendapatan dikurangi HPP dan biaya operasional',
            score: 3,
          },
          {
            text: 'Pendapatan dikurangi HPP, biaya operasional, bunga, dan pajak',
            score: 4,
          },
        ],
      },
    ],
  },
  {
    title: 'Perencanaan & Pengelolaan Keuangan',
    description: 'Evaluasi kemampuan dalam merencanakan dan mengelola keuangan bisnis',
    questions: [
      {
        id: 4,
        question: 'Bagaimana pendekatan Anda dalam menyusun anggaran bisnis?',
        options: [
          {
            text: 'Berdasarkan perkiraan kasar pengeluaran bulanan',
            score: 1,
          },
          {
            text: 'Menggunakan data pengeluaran historis',
            score: 2,
          },
          {
            text: 'Membuat proyeksi pendapatan dan pengeluaran berdasarkan analisis pasar',
            score: 3,
          },
          {
            text: 'Menyusun anggaran komprehensif dengan skenario dan contingency plan',
            score: 4,
          },
        ],
      },
      {
        id: 5,
        question: 'Bagaimana Anda menentukan kebutuhan modal kerja?',
        options: [
          {
            text: 'Berdasarkan perkiraan biaya operasional bulanan',
            score: 1,
          },
          {
            text: 'Menghitung biaya operasional untuk 3-6 bulan',
            score: 2,
          },
          {
            text: 'Analisis siklus konversi kas dan kebutuhan operasional',
            score: 3,
          },
          {
            text: 'Perhitungan detail meliputi siklus operasional, piutang, persediaan, dan contingency',
            score: 4,
          },
        ],
      },
      {
        id: 6,
        question: 'Apa strategi Anda dalam mengelola risiko finansial?',
        options: [
          {
            text: 'Menyimpan uang cadangan',
            score: 1,
          },
          {
            text: 'Memiliki asuransi dan dana darurat',
            score: 2,
          },
          {
            text: 'Diversifikasi pendapatan dan memiliki multiple backup plan',
            score: 3,
          },
          {
            text: 'Manajemen risiko komprehensif termasuk hedging dan mitigasi sistematis',
            score: 4,
          },
        ],
      },
    ],
  },
  {
    title: 'Praktik Keuangan Bisnis',
    description: 'Menilai kemampuan dalam menerapkan praktik keuangan bisnis yang sehat',
    questions: [
      {
        id: 7,
        question: 'Bagaimana Anda menentukan harga produk/jasa?',
        options: [
          {
            text: 'Mengikuti harga kompetitor',
            score: 1,
          },
          {
            text: 'Cost-plus pricing sederhana',
            score: 2,
          },
          {
            text: 'Analisis biaya, kompetitor, dan nilai pelanggan',
            score: 3,
          },
          {
            text: 'Strategi pricing komprehensif berdasarkan value proposition, segmentasi, dan elastisitas permintaan',
            score: 4,
          },
        ],
      },
      {
        id: 8,
        question: 'Bagaimana pendekatan Anda dalam pencatatan keuangan?',
        options: [
          {
            text: 'Mencatat pemasukan dan pengeluaran secara manual',
            score: 1,
          },
          {
            text: 'Menggunakan spreadsheet untuk tracking keuangan',
            score: 2,
          },
          {
            text: 'Menggunakan software akuntansi dengan standar pelaporan',
            score: 3,
          },
          {
            text: 'Sistem akuntansi terintegrasi dengan monitoring dan analisis regular',
            score: 4,
          },
        ],
      },
      {
        id: 9,
        question: 'Bagaimana Anda mengelola piutang usaha?',
        options: [
          {
            text: 'Tidak ada sistem khusus, ditagih saat ingat',
            score: 1,
          },
          {
            text: 'Mencatat dan follow up secara manual',
            score: 2,
          },
          {
            text: 'Sistem manajemen piutang dengan terms & conditions jelas',
            score: 3,
          },
          {
            text: 'Manajemen piutang profesional dengan aging analysis dan kebijakan kredit terstruktur',
            score: 4,
          },
        ],
      },
    ],
  },
  {
    title: 'Kepatuhan Perpajakan',
    description: 'Menilai pemahaman dan kepatuhan terhadap kewajiban perpajakan',
    questions: [
      {
        id: 10,
        question: 'Bagaimana pemahaman Anda tentang kewajiban pajak UMKM?',
        options: [
          {
            text: 'Tidak terlalu paham kewajiban pajak',
            score: 1,
          },
          {
            text: 'Mengetahui PP 23 tentang pajak UMKM 0.5%',
            score: 2,
          },
          {
            text: 'Memahami berbagai jenis pajak yang relevan untuk UMKM',
            score: 3,
          },
          {
            text: 'Pemahaman komprehensif tentang perpajakan dan perencanaan pajak',
            score: 4,
          },
        ],
      },
      {
        id: 11,
        question: 'Bagaimana Anda mengelola dokumentasi perpajakan?',
        options: [
          {
            text: 'Belum memiliki sistem dokumentasi',
            score: 1,
          },
          {
            text: 'Menyimpan bukti transaksi dan laporan sederhana',
            score: 2,
          },
          {
            text: 'Dokumentasi terstruktur dan regular reporting',
            score: 3,
          },
          {
            text: 'Sistem dokumentasi komprehensif dengan review berkala oleh profesional',
            score: 4,
          },
        ],
      },
      {
        id: 12,
        question: 'Bagaimana pendekatan Anda terhadap pelaporan pajak?',
        options: [
          {
            text: 'Melaporkan saat diingatkan/diperlukan',
            score: 1,
          },
          {
            text: 'Melaporkan secara mandiri tapi kadang terlambat',
            score: 2,
          },
          {
            text: 'Melaporkan tepat waktu dengan sistem reminder',
            score: 3,
          },
          {
            text: 'Pelaporan terstruktur dengan review dan konsultasi profesional',
            score: 4,
          },
        ],
      },
    ],
  },
];

// Category Definitions with Competency Levels
export const categoryDefinitions: Record<string, CategoryDefinition> = {
  basicConcepts: {
    title: 'Pemahaman Konsep Dasar Keuangan',
    description: 'Evaluasi pemahaman tentang konsep-konsep dasar keuangan dan akuntansi',
    competencyLevels: {
      pemula: {
        level: 'pemula',
        label: 'Pemula',
        description: 'Pemahaman dasar masih terbatas pada konsep-konsep sederhana',
        scoreRange: { min: 0, max: 6 },
        recommendations: [
          'Ikuti kursus dasar akuntansi untuk UMKM',
          'Pelajari istilah-istilah dasar keuangan',
          'Mulai membuat pencatatan keuangan sederhana',
        ],
      },
      berkembang: {
        level: 'berkembang',
        label: 'Berkembang',
        description: 'Memiliki pemahaman dasar yang cukup baik',
        scoreRange: { min: 7, max: 9 },
        recommendations: ['Dalami konsep laporan keuangan dasar', 'Praktikkan analisis arus kas sederhana', 'Ikuti workshop manajemen keuangan UMKM'],
      },
      mahir: {
        level: 'mahir',
        label: 'Mahir',
        description: 'Pemahaman yang baik tentang konsep keuangan',
        scoreRange: { min: 10, max: 11 },
        recommendations: [
          'Pelajari analisis laporan keuangan lanjutan',
          'Ikuti sertifikasi manajemen keuangan',
          'Terapkan sistem akuntansi terstruktur',
        ],
      },
      ahli: {
        level: 'ahli',
        label: 'Ahli',
        description: 'Pemahaman mendalam tentang konsep keuangan',
        scoreRange: { min: 12, max: 12 },
        recommendations: [
          'Pertimbangkan mentoring untuk UMKM lain',
          'Ikuti perkembangan standar akuntansi terbaru',
          'Terapkan manajemen keuangan strategis',
        ],
      },
    },
  },
  planning: {
    title: 'Perencanaan & Pengelolaan Keuangan',
    description: 'Evaluasi kemampuan dalam merencanakan dan mengelola keuangan bisnis',
    competencyLevels: {
      pemula: {
        level: 'pemula',
        label: 'Pemula',
        description: 'Perencanaan masih bersifat reaktif dan informal',
        scoreRange: { min: 0, max: 6 },
        recommendations: ['Mulai membuat anggaran bulanan sederhana', 'Pisahkan keuangan pribadi dan bisnis', 'Buat rencana arus kas sederhana'],
      },
      berkembang: {
        level: 'berkembang',
        label: 'Berkembang',
        description: 'Memiliki sistem perencanaan dasar',
        scoreRange: { min: 7, max: 9 },
        recommendations: ['Kembangkan sistem budgeting yang lebih detail', 'Mulai membuat proyeksi keuangan', 'Terapkan manajemen modal kerja'],
      },
      mahir: {
        level: 'mahir',
        label: 'Mahir',
        description: 'Perencanaan yang terstruktur dan sistematis',
        scoreRange: { min: 10, max: 11 },
        recommendations: ['Implementasi manajemen risiko keuangan', 'Kembangkan multiple scenario planning', 'Optimalkan struktur modal'],
      },
      ahli: {
        level: 'ahli',
        label: 'Ahli',
        description: 'Perencanaan komprehensif dengan analisis mendalam',
        scoreRange: { min: 12, max: 12 },
        recommendations: ['Terapkan perencanaan keuangan strategis', 'Kembangkan sistem monitoring kinerja', 'Implementasi manajemen treasury'],
      },
    },
  },
  // src/app/(protected)/penilaian-wirausaha/financial-literacy/data/questions.ts (continued)

  businessPractices: {
    title: 'Praktik Keuangan Bisnis',
    description: 'Evaluasi penerapan praktik keuangan dalam operasional bisnis',
    competencyLevels: {
      pemula: {
        level: 'pemula',
        label: 'Pemula',
        description: 'Praktik keuangan masih sangat dasar dan informal',
        scoreRange: { min: 0, max: 6 },
        recommendations: ['Mulai sistem pencatatan transaksi harian', 'Terapkan metode penetapan harga dasar', 'Buat sistem penagihan sederhana'],
      },
      berkembang: {
        level: 'berkembang',
        label: 'Berkembang',
        description: 'Memiliki sistem dasar dalam praktik keuangan',
        scoreRange: { min: 7, max: 9 },
        recommendations: [
          'Implementasi software pembukuan sederhana',
          'Kembangkan strategi pricing yang lebih baik',
          'Terapkan manajemen piutang terstruktur',
        ],
      },
      mahir: {
        level: 'mahir',
        label: 'Mahir',
        description: 'Praktik keuangan yang terstruktur dan efisien',
        scoreRange: { min: 10, max: 11 },
        recommendations: [
          'Optimalkan sistem akuntansi terintegrasi',
          'Terapkan analisis profitabilitas mendalam',
          'Kembangkan sistem kontrol internal',
        ],
      },
      ahli: {
        level: 'ahli',
        label: 'Ahli',
        description: 'Praktik keuangan profesional dengan sistem terintegrasi',
        scoreRange: { min: 12, max: 12 },
        recommendations: ['Implementasi sistem ERP untuk UMKM', 'Kembangkan metrics kinerja keuangan', 'Terapkan best practices internasional'],
      },
    },
  },
  taxCompliance: {
    title: 'Kepatuhan Perpajakan',
    description: 'Evaluasi pemahaman dan kepatuhan terhadap kewajiban perpajakan',
    competencyLevels: {
      pemula: {
        level: 'pemula',
        label: 'Pemula',
        description: 'Pemahaman dan kepatuhan pajak masih minimal',
        scoreRange: { min: 0, max: 6 },
        recommendations: ['Pelajari dasar-dasar perpajakan UMKM', 'Daftar NPWP dan aktivasi e-Fin', 'Ikuti sosialisasi pajak UMKM'],
      },
      berkembang: {
        level: 'berkembang',
        label: 'Berkembang',
        description: 'Memahami kewajiban dasar perpajakan',
        scoreRange: { min: 7, max: 9 },
        recommendations: ['Terapkan sistem dokumentasi pajak', 'Ikuti workshop perpajakan UMKM', 'Mulai konsultasi dengan konsultan pajak'],
      },
      mahir: {
        level: 'mahir',
        label: 'Mahir',
        description: 'Kepatuhan pajak yang baik dengan sistem terstruktur',
        scoreRange: { min: 10, max: 11 },
        recommendations: ['Optimalkan perencanaan pajak', 'Terapkan tax review berkala', 'Upgrade sistem dokumentasi pajak'],
      },
      ahli: {
        level: 'ahli',
        label: 'Ahli',
        description: 'Manajemen perpajakan profesional dan strategis',
        scoreRange: { min: 12, max: 12 },
        recommendations: ['Implementasi tax management system', 'Lakukan tax audit internal rutin', 'Optimalkan insentif perpajakan'],
      },
    },
  },
};

// Helper function to calculate competency level based on score
export function calculateCompetencyLevel(score: number): CompetencyLevel {
  if (score >= 12) return 'ahli';
  if (score >= 10) return 'mahir';
  if (score >= 7) return 'berkembang';
  return 'pemula';
}

// Reflection questions for deeper understanding
export const reflectionQuestions: ReflectionQuestion[] = [
  {
    id: 'reflection1',
    question: 'Ceritakan pengalaman terbesar Anda dalam mengelola keuangan bisnis dan pelajaran yang didapat.',
  },
  {
    id: 'reflection2',
    question: 'Apa tantangan terbesar yang Anda hadapi dalam memahami dan mengelola aspek perpajakan bisnis?',
  },
  {
    id: 'reflection3',
    question: 'Bagaimana rencana Anda untuk meningkatkan sistem pengelolaan keuangan bisnis dalam 6 bulan ke depan?',
  },
];
