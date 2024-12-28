// src/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/components/AnalysisResults.tsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnalysisResult } from '../lib/canvasTypes';

interface AnalysisResultsProps {
  analysis: AnalysisResult | null;
  isLoading: boolean;
  error: string | null;
  onClose: () => void;
  onRetry?: () => void;
  onExport?: () => void;
}

export default function AnalysisResults({ analysis, isLoading, error, onClose, onRetry, onExport }: AnalysisResultsProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'actions' | 'risks'>('overview');

  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Sections to display in each tab
  const tabSections = {
    overview: [
      {
        title: 'Ringkasan Analisis',
        content: analysis?.summary || '',
        type: 'text',
      },
      {
        title: 'Kekuatan',
        content: analysis?.strengths || [],
        type: 'list',
        icon: '💪',
      },
      {
        title: 'Kelemahan',
        content: analysis?.weaknesses || [],
        type: 'list',
        icon: '⚠️',
      },
    ],
    actions: [
      {
        title: 'Rekomendasi',
        content: analysis?.recommendations || [],
        type: 'list',
        icon: '💡',
      },
      {
        title: 'Langkah Selanjutnya',
        content: analysis?.nextSteps || [],
        type: 'list',
        icon: '👉',
      },
    ],
    risks: [
      {
        title: 'Risiko',
        content: analysis?.risks || [],
        type: 'list',
        icon: '⚠️',
      },
      {
        title: 'Asumsi Kritis',
        content: analysis?.assumptions || [],
        type: 'list',
        icon: '🎯',
      },
    ],
  };

  return (
    <div className='analysis-results fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
      <div className='bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden'>
        {/* Header */}
        <div className='p-6 border-b flex justify-between items-center'>
          <h2 className='text-2xl font-bold'>Hasil Analisis Lean Canvas</h2>
          <button onClick={onClose} className='text-gray-500 hover:text-gray-700' aria-label='Tutup'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className='border-b px-6'>
          <div className='flex space-x-6'>
            {[
              { id: 'overview', label: 'Ringkasan' },
              { id: 'actions', label: 'Tindakan' },
              { id: 'risks', label: 'Risiko' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className='p-6 overflow-y-auto max-h-[calc(90vh-200px)]'>
          <div className='space-y-8'>
            {tabSections[activeTab].map((section, index) => (
              <div key={index} className='space-y-3'>
                <h3 className='text-xl font-semibold flex items-center gap-2'>
                  {section.icon && <span>{section.icon}</span>}
                  {section.title}
                </h3>
                {section.type === 'text' ? (
                  <p className='text-gray-600 whitespace-pre-wrap'>{section.content as string}</p>
                ) : (
                  <ul className='space-y-2'>
                    {Array.isArray(section.content) &&
                      section.content.map((item, idx) => (
                        <li key={idx} className='flex items-start gap-2 text-gray-600 border-l-4 border-blue-100 pl-4 py-2'>
                          {item}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className='p-6 border-t bg-gray-50'>
          <div className='flex justify-between items-center'>
            <button onClick={onClose} className='px-4 py-2 text-gray-600 hover:text-gray-800'>
              Tutup
            </button>
            {onExport && (
              <button onClick={onExport} className='flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                  />
                </svg>
                Export PDF
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
