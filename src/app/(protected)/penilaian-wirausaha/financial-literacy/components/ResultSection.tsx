// src/app/(protected)/penilaian-wirausaha/financial-literacy/components/ResultSection.tsx
'use client';

import { useState } from 'react';
import { ResultSectionProps, CompetencyLevel, CategoryScore } from '../types';
import { calculateCompetencyLevel, categoryDefinitions } from '../data/questions';
import './styles/Result.css';

export default function ResultSection({ responses, onBackToIntro }: ResultSectionProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'detail' | 'reflections'>('overview');

  // Calculate category scores and levels
  const calculateCategoryScores = () => {
    const categoryScores: Record<string, CategoryScore> = {};

    Object.entries(responses.scores).forEach(([category, score]) => {
      const level = calculateCompetencyLevel(score);
      categoryScores[category] = {
        score,
        level,
        recommendations: categoryDefinitions[category].competencyLevels[level].recommendations,
      };
    });

    return categoryScores;
  };

  const categoryScores = calculateCategoryScores();

  // Calculate overall competency level
  const calculateOverallLevel = (): CompetencyLevel => {
    const totalScore = Object.values(responses.scores).reduce((sum, score) => sum + score, 0);
    const averageScore = totalScore / Object.keys(responses.scores).length;
    return calculateCompetencyLevel(averageScore);
  };

  const overallLevel = calculateOverallLevel();

  return (
    <div className='results-container'>
      {/* Navigation Tabs */}
      <div className='flex border-b mb-6'>
        <button
          className={`px-4 py-2 ${activeTab === 'overview' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('overview')}
        >
          Ringkasan
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'detail' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('detail')}
        >
          Detail Penilaian
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'reflections' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('reflections')}
        >
          Refleksi
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div>
          <div className='bg-white rounded-xl shadow-sm p-6 mb-6'>
            <h2 className='text-2xl font-bold mb-4'>Tingkat Literasi Keuangan Anda</h2>
            <div className='inline-block bg-blue-50 text-blue-800 px-4 py-2 rounded-full font-semibold mb-4'>
              {categoryDefinitions['basicConcepts'].competencyLevels[overallLevel].label}
            </div>
            <p className='text-gray-600 mb-4'>{categoryDefinitions['basicConcepts'].competencyLevels[overallLevel].description}</p>
          </div>

          {/* Category Overview Cards */}
          <div className='grid md:grid-cols-2 gap-6'>
            {Object.entries(categoryScores).map(([category, data]) => (
              <div key={category} className='bg-white rounded-xl shadow-sm p-6'>
                <h3 className='text-lg font-semibold mb-3'>{categoryDefinitions[category].title}</h3>
                <div className='mb-4'>
                  <div className='score-bar'>
                    <div className='score-fill' style={{ width: `${(data.score / 12) * 100}%` }}>
                      {data.score}/12
                    </div>
                  </div>
                </div>
                <div className={`competency-level ${data.level}`}>{categoryDefinitions[category].competencyLevels[data.level].label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detailed Assessment Tab */}
      {activeTab === 'detail' && (
        <div className='space-y-6'>
          {Object.entries(categoryScores).map(([category, data]) => (
            <div key={category} className='bg-white rounded-xl shadow-sm p-6'>
              <h3 className='text-xl font-semibold mb-4'>{categoryDefinitions[category].title}</h3>
              <p className='text-gray-600 mb-4'>{categoryDefinitions[category].description}</p>

              <div className='mb-4'>
                <div className='score-bar'>
                  <div className='score-fill' style={{ width: `${(data.score / 12) * 100}%` }}>
                    {data.score}/12
                  </div>
                </div>
              </div>

              <div className='bg-gray-50 rounded-lg p-4 mb-4'>
                <h4 className='font-semibold mb-2'>Tingkat Kompetensi:</h4>
                <div className={`competency-level ${data.level} mb-2`}>{categoryDefinitions[category].competencyLevels[data.level].label}</div>
                <p className='text-gray-600'>{categoryDefinitions[category].competencyLevels[data.level].description}</p>
              </div>

              <div className='recommendations'>
                <h4 className='font-semibold mb-2'>Rekomendasi Pengembangan:</h4>
                <ul className='space-y-2'>
                  {data.recommendations.map((rec, index) => (
                    <li key={index} className='flex items-start gap-2'>
                      <span className='text-blue-500 mt-1'>•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Reflections Tab */}
      {activeTab === 'reflections' && (
        <div className='bg-white rounded-xl shadow-sm p-6'>
          <h3 className='text-xl font-semibold mb-4'>Refleksi Pembelajaran</h3>
          <div className='space-y-6'>
            {Object.entries(responses.reflections).map(([questionId, answer]) => (
              <div key={questionId} className='reflection-item'>
                <p className='font-medium mb-2'>
                  {questionId === 'reflection1' && 'Pengalaman Pengelolaan Keuangan:'}
                  {questionId === 'reflection2' && 'Tantangan Perpajakan:'}
                  {questionId === 'reflection3' && 'Rencana Pengembangan:'}
                </p>
                <p className='text-gray-600'>{answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className='mt-8 flex justify-center gap-4'>
        <button onClick={onBackToIntro} className='px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50'>
          Kembali ke Awal
        </button>
        <button onClick={() => window.print()} className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
          Cetak Hasil
        </button>
      </div>
    </div>
  );
}
