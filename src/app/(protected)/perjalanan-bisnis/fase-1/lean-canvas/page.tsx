// src/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/page.tsx

'use client';

import { useState } from 'react';
import { CanvasField, LeanCanvas, CanvasFieldType } from './lib/canvasTypes';
import CanvasSection from './components/CanvasSection';
import { useCanvasAnalysis } from './hooks/useCanvasAnalysis';
import { initialCanvasState } from './lib/canvasValidation';
import AnalysisResults from './components/AnalysisResults';
import './styles/canvas.css';

export default function LeanCanvasPage() {
  // Canvas state
  const [canvas, setCanvas] = useState<LeanCanvas>(initialCanvasState);
  const [activeField, setActiveField] = useState<CanvasFieldType | null>(null);

  // Analysis state
  const { analyze, retry, analysis, isAnalyzing, error } = useCanvasAnalysis();
  const [showAnalysis, setShowAnalysis] = useState(false);

  // Handle field updates
  const handleFieldUpdate = (fieldId: CanvasFieldType, value: string) => {
    setCanvas((prev: LeanCanvas) => ({
      ...prev,
      fields: {
        ...prev.fields,
        [fieldId]: {
          ...prev.fields[fieldId],
          value,
        },
      },
      lastUpdated: new Date(),
    }));
  };

  // Handle analysis
  const handleAnalyze = async () => {
    await analyze(canvas);
    setShowAnalysis(true);
  };

  return (
    <div className='lean-canvas-container'>
      <div className='lean-canvas-header'>
        <h1 className='text-2xl font-bold'>Lean Canvas Builder</h1>
        <p className='text-gray-600'>Bangun dan validasi model bisnis Anda dengan bantuan AI</p>
      </div>

      <div className='lean-canvas-layout'>
        <div className='lean-canvas-main'>
          <div className='canvas-grid'>
            {Object.entries(canvas.fields).map(([id, field]) => (
              <CanvasSection
                key={id}
                field={field as CanvasField}
                isActive={activeField === id}
                onSelect={() => setActiveField(id as CanvasFieldType)}
                onChange={(value) => handleFieldUpdate(id as CanvasFieldType, value)}
              />
            ))}
          </div>
        </div>

        <div className='flex justify-end mt-6'>
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className={`
              bg-blue-600 text-white px-6 py-2 rounded-lg 
              hover:bg-blue-700 transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed
              flex items-center gap-2
            `}
          >
            {isAnalyzing ? (
              <>
                <span className='animate-spin'>⏳</span>
                Menganalisis...
              </>
            ) : (
              'Analisis Canvas'
            )}
          </button>
        </div>

        {showAnalysis && (
          <AnalysisResults
            analysis={analysis}
            isLoading={isAnalyzing}
            error={error}
            onClose={() => setShowAnalysis(false)}
            onRetry={retry}
            onExport={() => window.print()}
          />
        )}
      </div>
    </div>
  );
}
