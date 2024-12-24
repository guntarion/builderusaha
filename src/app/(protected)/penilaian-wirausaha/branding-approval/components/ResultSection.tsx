// src/app/(protected)/penilaian-wirausaha/branding-approval/components/ResultSection.tsx
'use client';

import { useMemo } from 'react';
import './styles/Result.css';

interface ResultSectionProps {
  responses: {
    branding: {
      purpose: number;
      authenticity: number;
      behavior: number;
      impact: number;
    };
    approval: number;
    reflections: Record<string, string>;
  };
  onBackToIntro: () => void;
}

// Skor range dan interpretasi untuk branding
const brandingScoreRanges = {
  purpose: {
    '20-25': {
      label: 'Sangat Jelas dan Terarah',
      description: 'Anda memiliki visi dan tujuan yang sangat jelas dalam personal branding',
      recommendations: [
        'Terus kembangkan keahlian di bidang spesifik Anda',
        'Bangun komunitas yang lebih kuat dengan target audiens',
        'Dokumentasikan dan bagikan pembelajaran Anda',
      ],
    },
    '15-19': {
      label: 'Cukup Terarah',
      description: 'Anda memiliki arah yang baik namun masih bisa dipertajam',
      recommendations: [
        'Perjelas unique value proposition Anda',
        'Identifikasi target audiens yang lebih spesifik',
        'Kembangkan content strategy yang lebih fokus',
      ],
    },
    '10-14': {
      label: 'Perlu Perjelas',
      description: 'Tujuan dan nilai Anda masih perlu diperjelas',
      recommendations: ['Lakukan audit personal brand Anda', 'Tentukan niche yang lebih spesifik', 'Buat content pillar yang jelas'],
    },
    '5-9': {
      label: 'Butuh Evaluasi Ulang',
      description: 'Diperlukan evaluasi mendasar terhadap tujuan branding Anda',
      recommendations: [
        'Mulai dengan menentukan tujuan jangka panjang',
        'Identifikasi passion dan keahlian utama',
        'Konsultasi dengan mentor atau coach',
      ],
    },
  },
  authenticity: {
    '20-25': {
      label: 'Sangat Autentik',
      description: 'Anda menunjukkan keaslian yang sangat tinggi dalam personal brand',
      recommendations: [
        'Terus tunjukkan behind-the-scenes dari perjalanan Anda',
        'Bagikan pembelajaran dari kegagalan',
        'Bangun komunitas berdasarkan nilai-nilai bersama',
      ],
    },
    '15-19': {
      label: 'Cukup Autentik',
      description: 'Anda menunjukkan keaslian yang baik dengan ruang untuk peningkatan',
      recommendations: [
        'Tingkatkan storytelling personal Anda',
        'Tunjukkan lebih banyak sisi personal yang relevan',
        'Bagikan proses di balik hasil',
      ],
    },
    '10-14': {
      label: 'Perlu Peningkatan',
      description: 'Autentisitas Anda perlu ditingkatkan',
      recommendations: [
        'Identifikasi nilai-nilai personal Anda',
        'Mulai bagikan cerita yang lebih personal',
        "Kurangi konten yang terlalu 'sempurna'",
      ],
    },
    '5-9': {
      label: 'Risiko Ketidakautentikan',
      description: 'Perlu perhatian serius pada keaslian personal brand',
      recommendations: [
        'Evaluasi ulang konten yang Anda bagikan',
        'Fokus pada pengalaman nyata',
        'Mulai dengan cerita personal yang nyaman dibagikan',
      ],
    },
  },
  behavior: {
    '20-25': {
      label: 'Sangat Sehat',
      description: 'Anda memiliki kebiasaan posting yang sangat sehat dan seimbang',
      recommendations: [
        'Pertahankan sistem content management yang baik',
        'Bagikan best practices dengan komunitas',
        'Eksperimen dengan format konten baru',
      ],
    },
    '15-19': {
      label: 'Cukup Sehat',
      description: 'Perilaku posting Anda cukup sehat dengan ruang untuk perbaikan',
      recommendations: [
        'Buat content calendar yang lebih terstruktur',
        'Tetapkan batasan waktu untuk social media',
        'Evaluasi efektivitas waktu posting',
      ],
    },
    '10-14': {
      label: 'Perlu Perbaikan',
      description: 'Diperlukan perbaikan dalam kebiasaan posting',
      recommendations: [
        'Mulai tracking waktu yang dihabiskan untuk social media',
        'Buat sistem prioritas konten',
        'Tentukan batasan personal-profesional',
      ],
    },
    '5-9': {
      label: 'Berpotensi Tidak Sehat',
      description: 'Pola posting Anda menunjukkan tanda-tanda tidak sehat',
      recommendations: ['Lakukan social media detox', 'Buat aturan posting yang sehat', 'Fokus pada kualitas daripada kuantitas'],
    },
  },
  impact: {
    '20-25': {
      label: 'Dampak Signifikan',
      description: 'Personal brand Anda memberikan dampak yang sangat positif',
      recommendations: ['Kembangkan program mentoring', 'Ciptakan lebih banyak kolaborasi', 'Ukur dampak jangka panjang'],
    },
    '15-19': {
      label: 'Dampak Moderat',
      description: 'Anda mulai menciptakan dampak yang berarti',
      recommendations: ['Tingkatkan engagement dengan audiens', 'Kembangkan sistem pengukuran dampak', 'Buat program atau inisiatif khusus'],
    },
    '10-14': {
      label: 'Perlu Optimasi',
      description: 'Dampak personal brand Anda masih perlu ditingkatkan',
      recommendations: ['Identifikasi KPI yang relevan', 'Fokus pada value creation', 'Bangun komunitas yang lebih engaged'],
    },
    '5-9': {
      label: 'Minimal Impact',
      description: 'Dampak personal brand Anda masih sangat terbatas',
      recommendations: ['Evaluasi ulang target audiens', 'Perbaiki value proposition', 'Mulai dengan micro-impact'],
    },
  },
};

// Skor range dan interpretasi untuk approval seeking
const approvalScoreRanges = {
  '8-16': {
    label: 'Hubungan Sehat dengan Validasi Sosial',
    description: 'Anda memiliki hubungan yang sehat dengan validasi sosial',
    recommendations: [
      'Pertahankan keseimbangan yang sudah baik',
      'Bagikan pengalaman positif Anda dengan orang lain',
      'Terus kembangkan motivasi intrinsik',
    ],
  },
  '17-24': {
    label: 'Kecenderungan Moderat Mencari Pengakuan',
    description: 'Anda menunjukkan kecenderungan moderat dalam mencari pengakuan sosial',
    recommendations: [
      'Praktikkan self-validation exercises',
      'Tetapkan batasan penggunaan media sosial',
      'Fokus pada pencapaian personal daripada pengakuan',
    ],
  },
  '25-32': {
    label: 'Kecenderungan Tinggi Mencari Pengakuan',
    description: 'Anda menunjukkan kecenderungan tinggi dalam mencari pengakuan sosial',
    recommendations: [
      'Konsultasi dengan profesional untuk strategi coping',
      'Mulai journaling untuk self-reflection',
      'Kurangi paparan media sosial secara bertahap',
    ],
  },
  '33-40': {
    label: 'Kecenderungan Sangat Tinggi Mencari Pengakuan',
    description: 'Anda menunjukkan kecenderungan sangat tinggi dalam mencari pengakuan sosial',
    recommendations: ['Pertimbangkan konseling profesional', 'Lakukan digital detox berkala', 'Bangun sistem support offline yang kuat'],
  },
};

export default function ResultSection({ responses, onBackToIntro }: ResultSectionProps) {
  const getScoreRange = (score: number) => {
    if (score >= 20) return '20-25';
    if (score >= 15) return '15-19';
    if (score >= 10) return '10-14';
    return '5-9';
  };

  const getApprovalScoreRange = (score: number) => {
    if (score <= 16) return '8-16';
    if (score <= 24) return '17-24';
    if (score <= 32) return '25-32';
    return '33-40';
  };

  const brandingResults: Record<string, { label: string; description: string; recommendations: string[] }> = useMemo(
    () => ({
      purpose: brandingScoreRanges.purpose[getScoreRange(responses.branding.purpose)],
      authenticity: brandingScoreRanges.authenticity[getScoreRange(responses.branding.authenticity)],
      behavior: brandingScoreRanges.behavior[getScoreRange(responses.branding.behavior)],
      impact: brandingScoreRanges.impact[getScoreRange(responses.branding.impact)],
    }),
    [responses.branding]
  );

  const approvalResults = useMemo(() => approvalScoreRanges[getApprovalScoreRange(responses.approval)], [responses.approval]);

  return (
    <div className='results-container bg-white rounded-xl shadow-sm p-8'>
      <h2 className='text-2xl font-bold mb-8'>Hasil Asesmen Personal Branding & Validasi Sosial</h2>

      {/* Personal Branding Results */}
      <div className='mb-12'>
        <h3 className='text-xl font-semibold mb-6'>Personal Branding Health Check</h3>

        {Object.entries(responses.branding).map(([dimension, score], index) => (
          <div key={dimension} className='mb-8'>
            <h4 className='text-lg font-medium mb-4 capitalize'>
              {index + 1}. {dimension.replace('_', ' ')}
            </h4>

            <div className='score-bar-container mb-4'>
              <div className='score-bar'>
                <div className='score-fill' style={{ width: `${(score / 25) * 100}%` }}>
                  {score}/25
                </div>
              </div>
            </div>

            <div className='bg-gray-50 p-6 rounded-lg'>
              <p className='font-medium text-blue-700 mb-2'>{brandingResults[dimension].label}</p>
              <p className='text-gray-600 mb-4'>{brandingResults[dimension].description}</p>
              <div>
                <h5 className='font-medium mb-2'>Rekomendasi:</h5>
                <ul className='list-disc list-inside space-y-1 text-gray-600'>
                  {brandingResults[dimension].recommendations.map((rec, idx) => (
                    <li key={idx}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Approval Seeking Results */}
      <div className='mb-12'>
        <h3 className='text-xl font-semibold mb-6'>Evaluasi Kecenderungan Mencari Pengakuan Sosial</h3>

        <div className='score-bar-container mb-4'>
          <div className='score-bar'>
            <div className='score-fill' style={{ width: `${(responses.approval / 40) * 100}%` }}>
              {responses.approval}/40
            </div>
          </div>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg'>
          <p className='font-medium text-blue-700 mb-2'>{approvalResults.label}</p>
          <p className='text-gray-600 mb-4'>{approvalResults.description}</p>
          <div>
            <h5 className='font-medium mb-2'>Rekomendasi:</h5>
            <ul className='list-disc list-inside space-y-1 text-gray-600'>
              {approvalResults.recommendations.map((rec, idx) => (
                <li key={idx}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Reflections */}
      {responses.reflections && Object.keys(responses.reflections).length > 0 && (
        <div className='mb-12'>
          <h3 className='text-xl font-semibold mb-6'>Refleksi Personal</h3>
          <div className='bg-gray-50 p-6 rounded-lg space-y-4'>
            {Object.entries(responses.reflections).map(([key, value], index) => (
              <div key={key} className='border-b border-gray-200 last:border-0 pb-4 last:pb-0'>
                <p className='text-gray-600 italic'>{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className='text-center'>
        <button onClick={onBackToIntro} className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'>
          Kembali ke Halaman Utama
        </button>
      </div>
    </div>
  );
}
