// src/app/(protected)/penilaian-bisnis/pitch-readiness/page.tsx
'use client';

import { useState } from 'react';
import AssessmentSection from './components/AssessmentSection';
import ResultSection from './components/ResultSection';
import type { AssessmentResponse, AssessmentResult } from './types';
import { calculatePitchReadiness } from './utils/calculatePitchReadiness';

export default function PitchReadinessAssessment() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null);

  const handleStartAssessment = () => {
    setShowQuiz(true);
  };

  const handleAssessmentComplete = (responses: AssessmentResponse) => {
    const result = calculatePitchReadiness(responses);
    setAssessmentResult(result);
    setShowQuiz(false);
    setShowResult(true);
  };

  const handleBackToIntro = () => {
    setShowResult(false);
    setShowQuiz(false);
    setAssessmentResult(null);
  };

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      {!showQuiz && !showResult ? (
        <div className='bg-white rounded-xl shadow-sm p-8'>
          <div className='max-w-3xl mx-auto'>
            <h1 className='text-3xl font-bold text-gray-900 mb-6'>Asesmen Kesiapan Pitching</h1>

            <p className='text-gray-600 text-lg mb-8'>
              Evaluasi seberapa siap materi dan kemampuan presentasi bisnis Anda untuk menghadapi investor potensial.
            </p>

            {/* Evaluation Areas */}
            <div className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>Area Evaluasi:</h2>
              <div className='grid gap-4'>
                {[
                  {
                    area: 'Pitch Deck',
                    aspects: ['Kelengkapan Materi', 'Visual Design', 'Story Flow'],
                  },
                  {
                    area: 'Business Model',
                    aspects: ['Value Proposition', 'Market Analysis', 'Revenue Model'],
                  },
                  {
                    area: 'Financial Readiness',
                    aspects: ['Financial Metrics', 'Projections', 'Funding Ask'],
                  },
                  {
                    area: 'Presentation Skills',
                    aspects: ['Delivery Style', 'Q&A Readiness', 'Time Management'],
                  },
                ].map((item, index) => (
                  <div key={index} className='bg-gray-50 p-4 rounded-lg'>
                    <h3 className='font-medium text-gray-900'>{item.area}</h3>
                    <ul className='mt-2 space-y-1 text-gray-600'>
                      {item.aspects.map((aspect, idx) => (
                        <li key={idx}>• {aspect}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>Manfaat Asesmen:</h2>
              <ul className='grid gap-3'>
                {[
                  'Evaluasi kesiapan pitch deck dan materi presentasi',
                  'Identifikasi area yang perlu diperkuat',
                  'Rekomendasi perbaikan spesifik',
                  'Panduan persiapan menghadapi investor',
                ].map((benefit, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <span className='text-blue-500 mt-1'>✓</span>
                    <span className='text-gray-600'>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex justify-center'>
              <button onClick={handleStartAssessment} className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors'>
                Mulai Asesmen
              </button>
            </div>
          </div>
        </div>
      ) : showQuiz ? (
        <AssessmentSection onComplete={handleAssessmentComplete} />
      ) : assessmentResult ? (
        <ResultSection result={assessmentResult} onBackToIntro={handleBackToIntro} />
      ) : null}
    </div>
  );
}
