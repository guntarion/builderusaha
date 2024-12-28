// src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/components/MVPAnalysisResults.tsx

import { useState } from 'react';
import { GeneratedMVP } from '../lib/MVPTypes';
import LoadingSpinner from './LoadingSpinner';

interface MVPAnalysisResultsProps {
  analysis: GeneratedMVP | null;
  isLoading: boolean;
  error: string | null;
  onClose: () => void;
  onRetry?: () => void;
  onExport?: () => void;
}

export default function MVPAnalysisResults({ analysis, isLoading, error, onClose, onRetry, onExport }: MVPAnalysisResultsProps) {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  if (!analysis && !isLoading && !error) return null;

  const handleCopyToClipboard = async () => {
    if (!analysis) return;

    try {
      const content = `
MVP Analysis Report

TL;DR:
${analysis.mvpSummary.tldr}

Fitur MVP:
${analysis.mvpSummary.detailed.features}

Timeline:
${analysis.mvpSummary.detailed.timeline}

Risiko & Mitigasi:
${analysis.mvpSummary.detailed.risks}

Validasi:
${analysis.mvpSummary.detailed.validation}

Estimasi Biaya:
${analysis.mvpSummary.detailed.costs}
      `;

      await navigator.clipboard.writeText(content.trim());
      setCopyStatus('copied');

      // Reset status after 2 seconds
      setTimeout(() => {
        setCopyStatus('idle');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      setCopyStatus('error');

      // Reset status after 2 seconds
      setTimeout(() => {
        setCopyStatus('idle');
      }, 2000);
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
      <div className='bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden'>
        {/* Header */}
        <div className='p-6 border-b flex justify-between items-center'>
          <h2 className='text-2xl font-bold'>Analisis MVP</h2>
          <button onClick={onClose} className='text-gray-500 hover:text-gray-700'>
            <span className='sr-only'>Tutup</span>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className='p-6 overflow-y-auto max-h-[calc(90vh-200px)]'>
          {isLoading ? (
            <div className='flex justify-center items-center py-12'>
              <LoadingSpinner size='lg' />
            </div>
          ) : error ? (
            <div className='text-center py-8'>
              <div className='text-red-600 mb-4'>{error}</div>
              {onRetry && (
                <button onClick={onRetry} className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                  Coba Lagi
                </button>
              )}
            </div>
          ) : analysis ? (
            <div className='space-y-8'>
              {/* TL;DR Section */}
              <div className='bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400'>
                <h3 className='font-semibold mb-2'>TL;DR:</h3>
                <p>{analysis.mvpSummary.tldr}</p>
              </div>

              {/* Detailed Analysis Sections */}
              <div className='space-y-6'>
                <section>
                  <h3 className='text-xl font-semibold mb-4'>Fitur MVP</h3>
                  <div className='prose prose-blue max-w-none whitespace-pre-line'>
                    {/* Menggunakan whitespace-pre-line untuk menghormati line breaks */}
                    {analysis.mvpSummary.detailed.features}
                  </div>
                </section>

                <section>
                  <h3 className='text-xl font-semibold mb-4'>Timeline</h3>
                  <div className='prose prose-blue max-w-none whitespace-pre-line'>{analysis.mvpSummary.detailed.timeline}</div>
                </section>

                <section>
                  <h3 className='text-xl font-semibold mb-4'>Risiko & Mitigasi</h3>
                  <div className='prose prose-blue max-w-none whitespace-pre-line'>{analysis.mvpSummary.detailed.risks}</div>
                </section>

                <section>
                  <h3 className='text-xl font-semibold mb-4'>Validasi</h3>
                  <div className='prose prose-blue max-w-none whitespace-pre-line'>{analysis.mvpSummary.detailed.validation}</div>
                </section>

                <section>
                  <h3 className='text-xl font-semibold mb-4'>Estimasi Biaya</h3>
                  <div className='prose prose-blue max-w-none whitespace-pre-line'>{analysis.mvpSummary.detailed.costs}</div>
                </section>
              </div>
            </div>
          ) : null}
        </div>

        {/* Footer - Updated */}
        <div className='p-6 border-t bg-gray-50'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-3'>
              {/* Updated Tutup button */}
              <button
                onClick={onClose}
                className='px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 font-medium'
              >
                Tutup
              </button>

              {/* New Copy button */}
              <button
                onClick={handleCopyToClipboard}
                disabled={copyStatus === 'copied'}
                className={`px-4 py-2 border rounded-lg font-medium flex items-center gap-2 transition-colors ${
                  copyStatus === 'copied'
                    ? 'bg-green-50 text-green-600 border-green-200'
                    : copyStatus === 'error'
                    ? 'bg-red-50 text-red-600 border-red-200'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {copyStatus === 'copied' ? (
                  <>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                    </svg>
                    Tersalin!
                  </>
                ) : copyStatus === 'error' ? (
                  <>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                    </svg>
                    Gagal Menyalin
                  </>
                ) : (
                  <>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3'
                      />
                    </svg>
                    Salin ke Clipboard
                  </>
                )}
              </button>
            </div>

            {/* Export button remains the same */}
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
