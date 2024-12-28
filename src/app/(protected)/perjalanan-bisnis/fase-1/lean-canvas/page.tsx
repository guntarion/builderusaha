// src/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/page.tsx

'use client';

import { useState } from 'react';
import { CanvasField, LeanCanvas, CanvasFieldType, GeneratedCanvas } from './lib/canvasTypes';
import CanvasSection from './components/CanvasSection';
import GeneratedCanvasView from './components/GeneratedCanvasView';
import { useCanvasAnalysis } from './hooks/useCanvasAnalysis';
import { useCanvasGeneration } from './hooks/useCanvasGeneration';
import { initialCanvasState } from './lib/canvasValidation';
import AnalysisResults from './components/AnalysisResults';
import LoadingSpinner from './components/LoadingSpinner';
import './styles/canvas.css';

export default function LeanCanvasPage() {
  // State management
  const [canvas, setCanvas] = useState<LeanCanvas>(initialCanvasState);
  const [activeField, setActiveField] = useState<CanvasFieldType | null>(null);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [viewMode, setViewMode] = useState<'input' | 'generated'>('input');

  // Hooks
  const { analyze, retry, analysis, isAnalyzing, error: analysisError } = useCanvasAnalysis();
  const { generateCanvas, generatedCanvas, isGenerating, error: generationError, setGeneratedCanvas } = useCanvasGeneration();

  // Define the order of fields
  const orderedFields: CanvasFieldType[] = [
    'problem',
    'customerSegments',
    'valueProposition',
    'solution',
    'unfairAdvantage',
    'channels',
    'revenueStreams',
    'costStructure',
    'keyMetrics',
  ];

  // Handle field updates for initial input
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

  // Handle updates to generated canvas
  const handleGeneratedFieldUpdate = (fieldKey: keyof GeneratedCanvas, value: string) => {
    if (!generatedCanvas) return;

    setGeneratedCanvas({
      ...generatedCanvas,
      [fieldKey]: value,
    });
  };

  // Handle canvas generation
  const handleGenerate = async () => {
    const result = await generateCanvas({
      problem: canvas.fields.problem.value,
      customerSegments: canvas.fields.customerSegments.value,
      valueProposition: canvas.fields.valueProposition.value,
      solution: canvas.fields.solution.value,
      revenueStreams: canvas.fields.revenueStreams.value,
      costStructure: canvas.fields.costStructure.value,
      keyMetrics: canvas.fields.keyMetrics.value,
      unfairAdvantage: canvas.fields.unfairAdvantage.value,
      channels: canvas.fields.channels.value,
    });

    if (result) {
      setViewMode('generated');
    }
  };

  // Handle analysis of generated canvas
  const handleAnalyzeGenerated = async () => {
    if (!generatedCanvas) return;

    // Convert generated canvas to format expected by analysis
    const analysisCanvas: LeanCanvas = {
      ...canvas,
      fields: {
        ...canvas.fields,
        problem: { ...canvas.fields.problem, value: generatedCanvas.refinedProblem },
        customerSegments: { ...canvas.fields.customerSegments, value: generatedCanvas.refinedCustomerSegments },
        valueProposition: { ...canvas.fields.valueProposition, value: generatedCanvas.refinedValueProposition },
        solution: { ...canvas.fields.solution, value: generatedCanvas.proposedSolution },
        revenueStreams: { ...canvas.fields.revenueStreams, value: generatedCanvas.proposedRevenueStreams },
        costStructure: { ...canvas.fields.costStructure, value: generatedCanvas.proposedCostStructure },
        keyMetrics: { ...canvas.fields.keyMetrics, value: generatedCanvas.proposedKeyMetrics },
        unfairAdvantage: { ...canvas.fields.unfairAdvantage, value: generatedCanvas.proposedUnfairAdvantage },
        channels: { ...canvas.fields.channels, value: generatedCanvas.proposedChannels },
      },
    };

    await analyze(analysisCanvas);
    setShowAnalysis(true);
  };

  return (
    <div className='lean-canvas-container'>
      <div className='lean-canvas-header'>
        <h1 className='text-2xl font-bold'>Lean Canvas Builder</h1>
        <p className='text-gray-600'>Bangun dan validasi model bisnis Anda dengan bantuan AI</p>
      </div>

      {viewMode === 'input' ? (
        <div className='lean-canvas-layout'>
          <div className='lean-canvas-main'>
            <div className='grid grid-cols-2 gap-4'>
              {orderedFields.slice(0, 8).map((fieldId) => (
                <CanvasSection
                  key={fieldId}
                  field={canvas.fields[fieldId] as CanvasField}
                  isActive={activeField === fieldId}
                  onSelect={() => setActiveField(fieldId)}
                  onChange={(value) => handleFieldUpdate(fieldId, value)}
                />
              ))}
              <div className='flex flex-col gap-4'>
                <CanvasSection
                  field={canvas.fields['keyMetrics'] as CanvasField}
                  isActive={activeField === 'keyMetrics'}
                  onSelect={() => setActiveField('keyMetrics')}
                  onChange={(value) => handleFieldUpdate('keyMetrics', value)}
                />
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className={`
                  bg-blue-600 text-white px-8 py-3 rounded-lg 
                  hover:bg-blue-700 transition-colors
                  disabled:opacity-70 disabled:cursor-not-allowed
                  flex items-center justify-center gap-3 text-lg
                  min-h-[120px] // Make it same height as sections
                `}
                >
                  {isGenerating ? (
                    <>
                      <LoadingSpinner size='sm' light={true} />
                      <span>Membuat Canvas...</span>
                    </>
                  ) : (
                    <>
                      <span className='text-xl'>✨</span>
                      <span>Generate Canvas</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {generationError && <div className='mt-4 p-4 bg-red-50 text-red-700 rounded-lg'>{generationError}</div>}
        </div>
      ) : (
        generatedCanvas && (
          <GeneratedCanvasView
            canvas={generatedCanvas}
            onFieldChange={handleGeneratedFieldUpdate}
            onAnalyze={handleAnalyzeGenerated}
            isAnalyzing={isAnalyzing} // Add this line
          />
        )
      )}

      {showAnalysis && (
        <AnalysisResults
          analysis={analysis}
          isLoading={isAnalyzing}
          error={analysisError}
          onClose={() => setShowAnalysis(false)}
          onRetry={retry}
          onExport={() => window.print()}
        />
      )}
    </div>
  );
}
