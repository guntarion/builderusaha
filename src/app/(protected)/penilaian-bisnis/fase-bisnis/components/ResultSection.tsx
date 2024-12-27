// src/app/(protected)/penilaian-bisnis/fase-bisnis/components/ResultSection.tsx
import { useState } from 'react';
import type { AssessmentResult } from '../data/types';
import { phaseDefinitions } from '../data/phases';
import PhaseProgress from './PhaseProgress';
import ActionItems from './ActionItems';

interface ResultSectionProps {
  result: AssessmentResult;
  onBackToIntro: () => void;
}

export default function ResultSection({ result, onBackToIntro }: ResultSectionProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'recommendations' | 'metrics'>('overview');
  const currentPhaseInfo = phaseDefinitions[result.currentPhase];

  if (!result) {
    console.error('No result data provided to ResultSection');
    return (
      <div className='bg-white rounded-xl shadow-sm p-8'>
        <p className='text-red-600'>Error: Hasil asesmen tidak tersedia</p>
        <button onClick={onBackToIntro} className='mt-4 px-6 py-2 border rounded-lg hover:bg-gray-50'>
          Kembali ke Halaman Utama
        </button>
      </div>
    );
  }

  if (!currentPhaseInfo) {
    console.error('Phase info not found for:', result.currentPhase);
    return (
      <div className='bg-white rounded-xl shadow-sm p-8'>
        <p className='text-red-600'>Error: Informasi fase tidak tersedia</p>
        <button onClick={onBackToIntro} className='mt-4 px-6 py-2 border rounded-lg hover:bg-gray-50'>
          Kembali ke Halaman Utama
        </button>
      </div>
    );
  }

  const TabButton = ({ tab, label }: { tab: typeof activeTab; label: string }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-4 py-2 font-medium rounded-lg transition-colors
        ${activeTab === tab ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
    >
      {label}
    </button>
  );

  return (
    <div className='bg-white rounded-xl shadow-sm p-8'>
      {/* Header */}
      <div className='mb-8 text-center'>
        <h2 className='text-3xl font-bold mb-2'>Hasil Asesmen Fase Bisnis</h2>
        <p className='text-gray-600'>
          Fase Saat Ini: {currentPhaseInfo.name} - {currentPhaseInfo.subtitle}
        </p>
      </div>

      {/* Phase Progress Visualization */}
      <div className='mb-8'>
        <PhaseProgress currentPhase={result.currentPhase} overallScore={result.overallScore} />
      </div>

      {/* Tab Navigation */}
      <div className='flex gap-2 mb-6'>
        <TabButton tab='overview' label='Ringkasan' />
        <TabButton tab='recommendations' label='Rekomendasi' />
        <TabButton tab='metrics' label='Metrik Detail' />
      </div>

      {/* Tab Content */}
      <div className='mb-8'>
        {activeTab === 'overview' && (
          <div className='space-y-6'>
            <section>
              <h3 className='text-xl font-semibold mb-4'>Karakteristik Fase Saat Ini</h3>
              <ul className='grid gap-2'>
                {currentPhaseInfo.characteristics.map((char, index) => (
                  <li key={index} className='flex items-start gap-2'>
                    <span className='text-blue-500'>•</span>
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className='text-xl font-semibold mb-4'>Indikator Kunci</h3>
              <div className='grid md:grid-cols-2 gap-4'>
                {Object.entries(currentPhaseInfo.indicators).map(([key, value]) => (
                  <div key={key} className='p-4 bg-gray-50 rounded-lg'>
                    <p className='font-medium text-gray-700'>{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                    <p className='text-gray-600'>{value}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'recommendations' && <ActionItems recommendations={result.recommendations} nextPhaseGap={result.nextPhaseGap} />}

        {activeTab === 'metrics' && (
          <div className='space-y-6'>
            <section>
              <h3 className='text-xl font-semibold mb-4'>Skor per Kategori</h3>
              <div className='space-y-4'>
                {Object.entries(result.categoryScores).map(([category, score]) => (
                  <div key={category}>
                    <div className='flex justify-between mb-1'>
                      <span className='font-medium'>{category.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}</span>
                      <span>{Math.round(score)}%</span>
                    </div>
                    <div className='h-2 bg-gray-200 rounded-full'>
                      <div className='h-full bg-blue-600 rounded-full' style={{ width: `${score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className='flex justify-center'>
        <button onClick={onBackToIntro} className='px-6 py-2 border rounded-lg hover:bg-gray-50'>
          Kembali ke Halaman Utama
        </button>
      </div>
    </div>
  );
}
