// src/app/(protected)/penilaian-wirausaha/kesesuaian-bisnis-pmi/components/ResultSection.tsx
'use client';

import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { BusinessScore, ResultSectionProps } from '../types';
import { BusinessType, RecommendationLevel, RecommendationContent, recommendationDatabase } from '../data/recommendations';
import '../styles/Result.css';

// Definisikan tipe untuk business yang sudah disort
type SortedBusiness = {
  type: string;
  percentage: number;
} & RecommendationContent;

function getRecommendation(type: string, percentage: number): RecommendationContent {
  const businessType = type as BusinessType;
  let level: RecommendationLevel;

  if (percentage >= 75) level = 'high';
  else if (percentage >= 50) level = 'medium';
  else level = 'low';

  return recommendationDatabase[businessType][level];
}

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const formatBusinessType = (type: string): string => {
  const formats = {
    importExport: 'Import-Export Business',
    localReseller: 'Local Reseller',
    translation: 'Translation & Documentation',
    onlineCourse: 'Online Training/Course',
    localAssistant: 'Local Assistant Service',
    foodBusiness: 'Food Business + Catering',
  };
  return formats[type as keyof typeof formats] || type;
};

const calculatePercentages = (scores: Record<string, number>): Record<string, number> => {
  const maxPossibleScore = 20 * 5; // 20 pertanyaan, maksimal 5 poin per pertanyaan
  // Debug
  console.log('Raw Scores for Percentage:', scores);

  const percentages: Record<string, number> = {};

  Object.entries(scores).forEach(([type, score]) => {
    // Tambahkan validasi untuk mencegah NaN atau undefined
    if (typeof score === 'number' && !isNaN(score)) {
      percentages[type] = Math.round((score / maxPossibleScore) * 100);
    } else {
      percentages[type] = 0;
    }
  });

  // Debug
  console.log('Calculated Percentages:', percentages);

  return percentages;
};

export default function ResultSection({ responses, onBackToIntro }: ResultSectionProps) {
  console.log('Initial Responses:', responses);
  const percentages = calculatePercentages(responses.branding);
  console.log('Final Percentages:', percentages);

  // Tambahkan anotasi tipe untuk sortedBusinesses
  const sortedBusinesses: SortedBusiness[] = Object.entries(percentages)
    .sort(([, a], [, b]) => b - a)
    .map(([type, percentage]) => ({
      type,
      percentage,
      ...getRecommendation(type, percentage),
    }));

  const chartData = {
    labels: sortedBusinesses.map((b) => formatBusinessType(b.type)),
    datasets: [
      {
        label: 'Tingkat Kesesuaian (%)',
        data: sortedBusinesses.map((b) => b.percentage),
        backgroundColor: 'rgba(37, 99, 235, 0.5)',
        borderColor: 'rgb(37, 99, 235)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Persentase Kesesuaian',
        },
      },
    },
  };

  return (
    <div className='results-container'>
      {/* Header */}
      <div className='bg-white rounded-xl shadow-sm p-8 mb-6'>
        <h2 className='text-2xl font-bold mb-4'>Hasil Asesmen Kesesuaian Bisnis</h2>
        <p className='text-gray-600'>
          Berdasarkan jawaban Anda, berikut adalah analisis kesesuaian untuk berbagai model bisnis yang dapat Anda jalankan sebagai PMI.
        </p>
      </div>

      {/* Top Recommendation */}
      <div className='recommendation-card'>
        <h3 className='text-xl font-semibold mb-4'>Rekomendasi Utama: {formatBusinessType(sortedBusinesses[0].type)}</h3>
        <BusinessDetailCard business={sortedBusinesses[0]} isTopRecommendation={true} />
      </div>

      {/* Chart Overview */}
      <div className='bg-white rounded-xl shadow-sm p-8 mb-6'>
        <h3 className='text-xl font-semibold mb-6'>Perbandingan Kesesuaian Model Bisnis</h3>
        <div className='chart-container'>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Other Recommendations */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
        {sortedBusinesses.slice(1).map((business, index) => (
          <BusinessDetailCard key={index} business={business} />
        ))}
      </div>

      {/* Action Buttons */}
      <div className='flex justify-center gap-4 mb-8'>
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

interface BusinessDetailCardProps {
  business: {
    type: string;
    percentage: number;
    description: string;
    strengthPoints: string[];
    challenges: string[];
    nextSteps: string[];
  };
  isTopRecommendation?: boolean;
}

function BusinessDetailCard({ business, isTopRecommendation = false }: BusinessDetailCardProps) {
  return (
    <div className={`score-card ${isTopRecommendation ? 'bg-blue-50' : ''}`}>
      <div className='flex justify-between items-start mb-4'>
        <div>
          <h4 className='text-lg font-semibold'>{formatBusinessType(business.type)}</h4>
          <p className='text-gray-600'>Tingkat Kesesuaian: {business.percentage}%</p>
        </div>
        <div className='text-3xl font-bold text-blue-600'>{business.percentage}%</div>
      </div>

      <div className='business-detail'>
        <p className='text-gray-800 mb-4'>{business.description}</p>

        <div className='detail-section'>
          <h5 className='font-semibold mb-2'>Kekuatan Anda:</h5>
          <ul className='detail-list'>
            {business.strengthPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className='detail-section'>
          <h5 className='font-semibold mb-2'>Tantangan yang Perlu Diantisipasi:</h5>
          <ul className='detail-list'>
            {business.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div className='detail-section'>
          <h5 className='font-semibold mb-2'>Langkah Selanjutnya:</h5>
          <ul className='detail-list'>
            {business.nextSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
