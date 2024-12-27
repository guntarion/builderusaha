// src/app/(protected)/penilaian-bisnis/fase-bisnis/page.tsx
'use client';

import { useState } from 'react';
import AssessmentSection from './components/AssessmentSection';
import ResultSection from './components/ResultSection';
import type { AssessmentResponse, AssessmentResult } from './data/types';
import { calculatePhaseResult } from './utils/calculatePhase';

export default function BusinessPhaseAssessment() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null);

  const handleStartAssessment = () => {
    setShowQuiz(true);
  };

  const handleAssessmentComplete = (responses: AssessmentResponse) => {
    const result = calculatePhaseResult(responses);
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
            <h1 className='text-3xl font-bold text-gray-900 mb-6'>Asesmen Fase Bisnis</h1>

            <p className='text-gray-600 text-lg mb-8'>
              Asesmen ini akan membantu Anda memahami fase bisnis Anda saat ini dan memberikan rekomendasi untuk mencapai fase berikutnya.
            </p>

            {/* Phase Overview */}
            <div className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>Fase-Fase Bisnis:</h2>
              <div className='grid gap-4'>
                {[
                  {
                    phase: 'Phase 1: Ideation & Validation',
                    stages: ['Seed: Punya Ide Bisnis', 'Validated: Ide Bisnis Tervalidasi'],
                  },
                  {
                    phase: 'Phase 2: Planning & Launch',
                    stages: ['Startup: Punya Produk Riil', 'Survival: Punya Basis Pelanggan'],
                  },
                  {
                    phase: 'Phase 3: Growth & Scaling',
                    stages: ['Established: Punya Sistem', 'Expansion: Punya Daya Ungkit'],
                  },
                  {
                    phase: 'Phase 4: Maturity & Exit',
                    stages: ['Rapid Growth: Punya Kecepatan Tumbuh', 'Mature: Punya Legacy'],
                  },
                ].map((item, index) => (
                  <div key={index} className='bg-gray-50 p-4 rounded-lg'>
                    <h3 className='font-medium text-gray-900'>{item.phase}</h3>
                    <ul className='mt-2 space-y-1 text-gray-600'>
                      {item.stages.map((stage, idx) => (
                        <li key={idx}>• {stage}</li>
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
                  'Pemahaman fase bisnis saat ini',
                  'Rekomendasi pengembangan spesifik',
                  'Panduan mencapai fase berikutnya',
                  'Tracking progress dan milestone',
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
