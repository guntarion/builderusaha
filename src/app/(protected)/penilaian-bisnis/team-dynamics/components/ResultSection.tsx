// src/app/(protected)/penilaian-bisnis/team-dynamics/components/ResultSection.tsx
'use client';

import { ResultSectionProps } from '../types';
import './styles/Result.css';

/**
 * ResultSection Component
 * Displays the team dynamics assessment results including overall score,
 * section scores, and personalized recommendations
 */
export default function ResultSection({ result, onBackToIntro }: ResultSectionProps) {
  // Helper function to get appropriate label for each level
  const getLevelLabel = (level: 'weak' | 'moderate' | 'strong') => {
    return {
      weak: 'Perlu Pengembangan',
      moderate: 'Cukup Baik',
      strong: 'Sangat Baik',
    }[level];
  };

  // Helper function to get appropriate color scheme for each level
  const getLevelColor = (level: 'weak' | 'moderate' | 'strong') => {
    return {
      weak: 'text-red-600 bg-red-50',
      moderate: 'text-yellow-600 bg-yellow-50',
      strong: 'text-green-600 bg-green-50',
    }[level];
  };

  // Helper function to get section title
  const getSectionTitle = (sectionId: string) => {
    return (
      {
        'collaboration-communication': 'Kolaborasi & Komunikasi',
        'leadership-decision': 'Kepemimpinan & Pengambilan Keputusan',
        'performance-productivity': 'Kinerja & Produktivitas',
        'culture-engagement': 'Budaya & Engagement',
      }[sectionId] || sectionId
    );
  };

  return (
    <div className='results-container bg-white rounded-xl shadow-sm p-8'>
      {/* Overall Score Section */}
      <div className='text-center mb-8'>
        <h2 className='text-2xl font-bold mb-4'>Hasil Asesmen Dinamika Tim</h2>
        <div className={`inline-block px-4 py-2 rounded-full text-lg font-medium mb-2 ${getLevelColor(result.overallLevel)}`}>
          {getLevelLabel(result.overallLevel)}
        </div>
        <p className='text-gray-600'>Skor Keseluruhan: {Math.round(result.overallPercentage)}%</p>
      </div>

      {/* Section Scores */}
      <div className='grid gap-6 mb-8'>
        {Object.entries(result.sectionScores).map(([sectionId, score]) => (
          <div key={sectionId} className='bg-gray-50 rounded-lg p-6'>
            <div className='flex justify-between items-start mb-4'>
              <div>
                <h3 className='text-lg font-semibold mb-1'>{getSectionTitle(sectionId)}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${getLevelColor(score.level)}`}>{getLevelLabel(score.level)}</span>
              </div>
              <div className='text-right'>
                <div className='text-2xl font-bold text-gray-900'>{Math.round(score.percentage)}%</div>
                <div className='text-sm text-gray-600'>
                  {score.score}/{score.maxScore} poin
                </div>
              </div>
            </div>

            {/* Score Bar */}
            <div className='mb-4'>
              <div className='h-2 bg-gray-200 rounded-full'>
                <div className='h-full bg-blue-600 rounded-full transition-all' style={{ width: `${score.percentage}%` }} />
              </div>
            </div>

            {/* Section Recommendations */}
            <div className='mt-4'>
              <h4 className='font-medium mb-2'>Area Pengembangan:</h4>
              <ul className='space-y-2'>
                {score.recommendations.map((rec, index) => (
                  <li key={index} className='flex items-start gap-2 text-gray-600'>
                    <span className='text-blue-500 mt-1'>•</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Overall Recommendations */}
      <div className='bg-blue-50 rounded-lg p-6 mb-8'>
        <h3 className='text-lg font-semibold mb-4'>Rekomendasi Utama</h3>
        <ul className='space-y-2'>
          {result.generalRecommendations.map((rec, index) => (
            <li key={index} className='flex items-start gap-2 text-gray-700'>
              <span className='text-blue-500 mt-1'>•</span>
              {rec}
            </li>
          ))}
        </ul>
      </div>

      {/* Key Findings Summary */}
      <div className='bg-gray-50 rounded-lg p-6 mb-8'>
        <h3 className='text-lg font-semibold mb-4'>Ringkasan Temuan</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-medium mb-2 text-green-600'>Kekuatan Tim</h4>
            <ul className='space-y-2'>
              {Object.entries(result.sectionScores)
                .filter(([_, score]) => score.level === 'strong')
                .map(([sectionId], index) => (
                  <li key={index} className='flex items-start gap-2 text-gray-600'>
                    <span className='text-green-500 mt-1'>✓</span>
                    {getSectionTitle(sectionId)}
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h4 className='font-medium mb-2 text-red-600'>Area Prioritas</h4>
            <ul className='space-y-2'>
              {Object.entries(result.sectionScores)
                .filter(([_, score]) => score.level === 'weak')
                .map(([sectionId], index) => (
                  <li key={index} className='flex items-start gap-2 text-gray-600'>
                    <span className='text-red-500 mt-1'>!</span>
                    {getSectionTitle(sectionId)}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className='flex justify-center gap-4'>
        <button onClick={onBackToIntro} className='bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50'>
          Mulai Asesmen Baru
        </button>
        <button onClick={() => window.print()} className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'>
          Cetak Hasil
        </button>
      </div>
    </div>
  );
}
