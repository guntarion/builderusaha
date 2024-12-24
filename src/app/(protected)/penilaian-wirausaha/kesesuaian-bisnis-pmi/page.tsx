// src/app/(protected)/penilaian-wirausaha/kesesuaian-bisnis-pmi/page.tsx
'use client';

import { useState } from 'react';
import QuizSection from './components/QuizSection';
import ResultSection from './components/ResultSection';
import type { QuizResults } from './types';

export default function KesesuaianBisnisPMIPage() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showLatestResult, setShowLatestResult] = useState(false);
  const [quizResponses, setQuizResponses] = useState<QuizResults | null>(null);
  const [previousResult, setPreviousResult] = useState<QuizResults | null>(null);

  const handleQuizComplete = (results: QuizResults) => {
    setQuizResponses(results);
    setShowQuiz(false);
    setShowLatestResult(true);
  };

  const startQuiz = () => {
    setShowQuiz(true);
    setShowLatestResult(false);
  };

  const backToIntro = () => {
    setShowLatestResult(false);
    setQuizResponses(null);
  };

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      {!showQuiz && !showLatestResult ? (
        <div className='bg-white rounded-xl shadow-sm p-8'>
          <div className='max-w-3xl mx-auto'>
            {/* Header */}
            <h1 className='text-3xl font-bold text-gray-900 mb-6'>Asesmen Kesesuaian Model Bisnis PMI</h1>

            <p className='text-gray-600 text-lg mb-8'>
              Selamat datang di Asesmen Kesesuaian Model Bisnis PMI. Asesmen ini dirancang untuk membantu Anda mengidentifikasi model bisnis yang
              paling sesuai dengan profil, kemampuan, dan situasi Anda sebagai PMI.
            </p>

            {/* Model Bisnis Section */}
            <div className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>Model Bisnis yang Akan Dianalisis:</h2>
              <ul className='space-y-4'>
                {[
                  {
                    title: 'Import-Export Business:',
                    desc: 'Bisnis pengiriman produk antara Indonesia dan negara tempat tinggal.',
                  },
                  {
                    title: 'Local Reseller:',
                    desc: 'Bisnis penjualan produk lokal ke pasar Indonesia.',
                  },
                  {
                    title: 'Translation & Documentation Service:',
                    desc: 'Layanan penerjemahan dan bantuan dokumentasi bagi PMI.',
                  },
                  {
                    title: 'Online Training/Course:',
                    desc: 'Layanan pelatihan dan kursus online untuk komunitas PMI.',
                  },
                  {
                    title: 'Local Assistant Service:',
                    desc: 'Layanan pendampingan dan bantuan untuk PMI baru.',
                  },
                  {
                    title: 'Food Business + Catering:',
                    desc: 'Bisnis makanan dan katering Indonesia.',
                  },
                ].map((item, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <span className='text-blue-500 mt-1'>
                      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                    <div>
                      <strong className='text-gray-900'>{item.title}</strong>
                      <span className='text-gray-600'> {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits Section */}
            <div className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>Manfaat Asesmen</h2>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {[
                  'Pemahaman mendalam tentang potensi bisnis Anda',
                  'Identifikasi model bisnis yang paling sesuai',
                  'Analisis kekuatan dan tantangan Anda',
                  'Rekomendasi langkah konkret untuk memulai',
                  'Pemetaan sumber daya yang diperlukan',
                  'Panduan pengembangan skill yang dibutuhkan',
                ].map((benefit, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <span className='text-blue-500 mt-1'>
                      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                        <path
                          fillRule='evenodd'
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                    <span className='text-gray-600'>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Box */}
            <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8'>
              <div className='flex gap-3'>
                <span className='text-blue-500 mt-1'>
                  <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                <p className='text-sm text-blue-800'>
                  <span className='font-semibold'>Catatan:</span> Asesmen ini membutuhkan waktu sekitar 15-20 menit. Jawablah setiap pertanyaan dengan
                  jujur untuk mendapatkan rekomendasi yang paling sesuai dengan profil Anda.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex justify-center gap-4'>
              {previousResult && (
                <button
                  onClick={() => {
                    setQuizResponses(previousResult);
                    setShowLatestResult(true);
                  }}
                  className='px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'
                >
                  Lihat Hasil Sebelumnya
                </button>
              )}
              <button
                onClick={startQuiz}
                className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg'
              >
                {previousResult ? 'Mulai Asesmen Baru' : 'Mulai Asesmen'}
              </button>
            </div>
          </div>
        </div>
      ) : showQuiz ? (
        <QuizSection onQuizComplete={handleQuizComplete} />
      ) : quizResponses ? (
        <ResultSection responses={quizResponses} onBackToIntro={backToIntro} />
      ) : null}
    </div>
  );
}
