// src/app/(protected)/penilaian-bisnis/pitch-readiness/components/ResultSection.tsx
'use client';

import { ResultSectionProps } from '../types';
import './styles/Result.css';

/**
 * ResultSection Component
 * Displays the assessment results including overall score, section scores,
 * and personalized recommendations
 */
export default function ResultSection({ result, onBackToIntro }: ResultSectionProps) {
  const getLevelLabel = (level: 'low' | 'medium' | 'high') => {
    return {
      low: 'Perlu Persiapan',
      medium: 'Cukup Siap',
      high: 'Sangat Siap',
    }[level];
  };

  const getLevelColor = (level: 'low' | 'medium' | 'high') => {
    return {
      low: 'text-red-600 bg-red-50',
      medium: 'text-yellow-600 bg-yellow-50',
      high: 'text-green-600 bg-green-50',
    }[level];
  };

  return (
    <div className='results-container bg-white rounded-xl shadow-sm p-8'>
      {/* Overall Score */}
      <div className='text-center mb-8'>
        <h2 className='text-2xl font-bold mb-4'>Hasil Asesmen Kesiapan Pitching</h2>
        <div
          className='inline-block px-4 py-2 rounded-full text-lg font-medium mb-2 
          ${getLevelColor(result.overallLevel)}'
        >
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
                <h3 className='text-lg font-semibold mb-1'>
                  {sectionId === 'pitch-deck'
                    ? 'Pitch Deck & Presentasi'
                    : sectionId === 'business-model'
                    ? 'Model Bisnis'
                    : sectionId === 'financial-readiness'
                    ? 'Kesiapan Finansial'
                    : 'Kemampuan Presentasi'}
                </h3>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm 
                  ${getLevelColor(score.level)}`}
                >
                  {getLevelLabel(score.level)}
                </span>
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
            <div>
              <h4 className='font-medium mb-2'>Rekomendasi:</h4>
              <ul className='space-y-1'>
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

      {/* General Recommendations */}
      <div className='bg-blue-50 rounded-lg p-6 mb-8'>
        <h3 className='text-lg font-semibold mb-4'>Rekomendasi Umum</h3>
        <ul className='space-y-2'>
          {result.generalRecommendations.map((rec, index) => (
            <li key={index} className='flex items-start gap-2 text-gray-700'>
              <span className='text-blue-500 mt-1'>•</span>
              {rec}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className='flex justify-center gap-4'>
        <button
          onClick={onBackToIntro}
          className='bg-white border border-blue-600 text-blue-600 px-6 py-2 
            rounded-lg hover:bg-blue-50'
        >
          Mulai Asesmen Baru
        </button>
        <button onClick={() => window.print()} className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'>
          Cetak Hasil
        </button>
      </div>
    </div>
  );
}
