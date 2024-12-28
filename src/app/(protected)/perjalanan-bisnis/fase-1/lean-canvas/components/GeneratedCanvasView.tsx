// src/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/components/GeneratedCanvasView.tsx

import React from 'react';
import { GeneratedCanvas } from '../lib/canvasTypes';
import LoadingSpinner from './LoadingSpinner';

interface GeneratedCanvasViewProps {
  canvas: GeneratedCanvas;
  onFieldChange: (fieldKey: keyof GeneratedCanvas, value: string) => void;
  onAnalyze: () => void;
  isEditable?: boolean;
  isAnalyzing?: boolean;
}

export default function GeneratedCanvasView({ canvas, onFieldChange, onAnalyze, isEditable = true, isAnalyzing = false }: GeneratedCanvasViewProps) {
  // Map of field keys to their display titles in Indonesian
  const fieldTitles: Record<keyof GeneratedCanvas, string> = {
    refinedProblem: 'Masalah',
    refinedCustomerSegments: 'Segmen Pelanggan',
    refinedValueProposition: 'Proposisi Nilai',
    proposedSolution: 'Solusi',
    proposedRevenueStreams: 'Arus Pendapatan',
    proposedCostStructure: 'Struktur Biaya',
    proposedKeyMetrics: 'Metrik Utama',
    proposedUnfairAdvantage: 'Keunggulan Kompetitif',
    proposedChannels: 'Saluran',
    explanation: 'Penjelasan',
  };

  // Fields that should be displayed in the grid
  const gridFields: (keyof GeneratedCanvas)[] = [
    'refinedProblem',
    'refinedCustomerSegments',
    'refinedValueProposition',
    'proposedSolution',
    'proposedUnfairAdvantage',
    'proposedChannels',
    'proposedRevenueStreams',
    'proposedCostStructure',
    'proposedKeyMetrics',
  ];

  return (
    <div className='generated-canvas-container'>
      <div className='grid grid-cols-2 gap-4'>
        {gridFields.map((fieldKey) => (
          <div key={fieldKey} className='bg-white p-4 rounded-lg shadow'>
            <h3 className='font-semibold mb-2'>{fieldTitles[fieldKey]}</h3>
            {isEditable ? (
              <textarea
                className='w-full min-h-[120px] p-2 border rounded focus:ring-2 focus:ring-blue-500'
                value={canvas[fieldKey]}
                onChange={(e) => onFieldChange(fieldKey, e.target.value)}
              />
            ) : (
              <div className='whitespace-pre-wrap'>{canvas[fieldKey]}</div>
            )}
          </div>
        ))}
      </div>

      {canvas.explanation && (
        <div className='mt-6 bg-blue-50 p-4 rounded-lg'>
          <h3 className='font-semibold mb-2'>{fieldTitles.explanation}</h3>
          <div className='whitespace-pre-wrap'>{canvas.explanation}</div>
        </div>
      )}

      <div className='mt-8 flex justify-center'>
        <button
          onClick={onAnalyze}
          className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-3 text-lg'
        >
          {isAnalyzing ? (
            <>
              <LoadingSpinner size='sm' light={true} />
              <span>Menganalisis Canvas...</span>
            </>
          ) : (
            <>
              <span className='text-xl'>📊</span>
              <span>Analisis Canvas</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
