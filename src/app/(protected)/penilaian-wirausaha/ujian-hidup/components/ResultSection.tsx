// src/app/(protected)/penilaian-wirausaha/ujian-hidup/components/ResultSection.tsx
'use client';

import { useMemo } from 'react';
import type { ResultSectionProps, CategoryType, LevelType, CategoryScores, SubsectionKeys, SubsectionInfo } from '../types'; // Changed from './data/categoryDescriptions'
import './styles/Result.css';

const getLevel = (score: number): LevelType => {
  if (score <= 20) return 'low';
  if (score <= 35) return 'moderate';
  return 'high';
};

const getSubsectionScore = (scores: CategoryScores[CategoryType], subsectionKey: SubsectionKeys): number => {
  return (scores as any)[subsectionKey] || 0;
};

const calculateOverallRisk = (scores: CategoryScores): string => {
  if (!scores) return 'Tidak Dapat Dihitung';

  const categories: CategoryType[] = ['harta', 'tahta', 'wanita'];
  const totalScore = categories.reduce((sum, category) => {
    return sum + (scores[category]?.total || 0);
  }, 0);

  const maxPossibleScore = 150; // 30 questions * 5 max score
  const riskPercentage = (totalScore / maxPossibleScore) * 100;

  if (riskPercentage >= 80) return 'Sangat Tinggi';
  if (riskPercentage >= 60) return 'Tinggi';
  if (riskPercentage >= 40) return 'Moderat';
  if (riskPercentage >= 20) return 'Rendah';
  return 'Sangat Rendah';
};

const getRiskLevelColor = (riskLevel: string): string => {
  switch (riskLevel) {
    case 'Sangat Tinggi':
      return 'red-600';
    case 'Tinggi':
      return 'orange-500';
    case 'Moderat':
      return 'yellow-500';
    case 'Rendah':
      return 'green-500';
    default:
      return 'blue-500';
  }
};

export default function ResultSection({ responses, onBackToIntro }: ResultSectionProps) {
  if (!responses?.categoryScores) {
    return <div>No result data available</div>;
  }

  const { categoryScores } = responses;

  const validateScores = () => {
    const requiredCategories: CategoryType[] = ['harta', 'tahta', 'wanita'];
    return requiredCategories.every((category) => categoryScores[category] && typeof categoryScores[category].total === 'number');
  };

  if (!validateScores()) {
    return <div>Invalid score data</div>;
  }

  const overallRisk = calculateOverallRisk(categoryScores);
  const riskColor = getRiskLevelColor(overallRisk);

  return (
    <div className='results-container bg-white rounded-xl shadow-sm p-8'>
      <h2 className='text-2xl font-bold mb-8'>Hasil Pemetaan Kecenderungan Ujian Hidup</h2>

      {/* Overall Risk Section */}
      <div className='mb-8 p-6 bg-gray-50 rounded-lg'>
        <div className='text-center'>
          <h3 className='text-xl font-semibold mb-4'>Tingkat Risiko Keseluruhan:</h3>
          <div className={`inline-block px-6 py-2 rounded-full font-bold text-white bg-${riskColor}`}>{overallRisk}</div>
        </div>
      </div>

      {/* Category Results */}
      {(['harta', 'tahta', 'wanita'] as const).map((category) => {
        const scores = categoryScores[category];
        const level = getLevel(scores.total);
        const categoryInfo = categoryDescriptions[category];
        const levelInfo = categoryInfo.levels[level];

        return (
          <div key={category} className='mb-12 last:mb-0'>
            {/* Category Header */}
            <div className='mb-6'>
              <h3 className='text-xl font-semibold mb-2'>{categoryInfo.title}</h3>
              <p className='text-gray-600'>{categoryInfo.description}</p>
            </div>

            {/* Total Score */}
            <div className='mb-6 p-6 bg-gray-50 rounded-lg'>
              <div className='mb-4'>
                <div className='score-bar'>
                  <div className='score-fill' style={{ width: `${(scores.total / 50) * 100}%` }}>
                    {scores.total}/50
                  </div>
                </div>
              </div>
              <div className='text-center'>
                <span className='font-medium text-blue-700'>{levelInfo.label}</span>
                <p className='text-gray-600 mt-2'>{levelInfo.description}</p>
              </div>
            </div>

            {/* Subsections */}
            <div className='mb-6'>
              <h4 className='font-medium mb-4'>Detail Analisis:</h4>
              <div className='space-y-4'>
                {Object.entries(categoryInfo.subsections).map(([key, info]: [string, SubsectionInfo]) => {
                  const subsectionScore = getSubsectionScore(scores, key as SubsectionKeys);
                  return (
                    <div key={key} className='p-4 bg-gray-50 rounded-lg'>
                      <div className='flex justify-between items-center mb-2'>
                        <h5 className='font-medium'>{info.title}</h5>
                        <span className='text-sm text-gray-600'>{subsectionScore}/20</span>
                      </div>
                      <div className='score-bar mb-2'>
                        <div className='score-fill' style={{ width: `${(subsectionScore / 20) * 100}%` }} />
                      </div>
                      <p className='text-sm text-gray-600'>{info.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recommendations */}
            <div className='p-6 bg-blue-50 rounded-lg'>
              <h4 className='font-medium mb-4'>Rekomendasi Pengembangan:</h4>
              <ul className='space-y-2'>
                {levelInfo.recommendations.map((rec: string, index: number) => (
                  <li key={index} className='flex gap-2 text-gray-700'>
                    <span className='text-blue-500'>•</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}

      {/* Integration Section */}
      <div className='mt-12 p-6 bg-gray-50 rounded-lg'>
        <h3 className='text-xl font-semibold mb-6'>Integrasi dan Langkah Selanjutnya</h3>

        <div className='grid gap-6 md:grid-cols-2'>
          <div>
            <h4 className='font-medium mb-4'>Langkah-langkah Praktis:</h4>
            <ol className='list-decimal list-inside space-y-2 text-gray-700'>
              <li>Identifikasi area prioritas berdasarkan skor tertinggi</li>
              <li>Mulai dengan satu perubahan kecil di setiap area</li>
              <li>Cari dukungan dan accountability partner</li>
              <li>Evaluasi perkembangan secara berkala</li>
            </ol>
          </div>

          <div>
            <h4 className='font-medium mb-4'>Tips Menjaga Keseimbangan:</h4>
            <ul className='list-disc list-inside space-y-2 text-gray-700'>
              <li>Praktikkan refleksi mingguan</li>
              <li>Kembangkan hobi yang tidak terkait dengan ketiga aspek tersebut</li>
              <li>Bangun rutinitas self-care</li>
              <li>Pertahankan perspektif yang seimbang</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='mt-8 text-center'>
        <button onClick={onBackToIntro} className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors'>
          Kembali ke Halaman Utama
        </button>
      </div>
    </div>
  );
}
