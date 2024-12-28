// src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/page.tsx

'use client';

import { useState } from 'react';
import { MVPDesign, Feature } from './lib/MVPTypes';
import { initialMVPState } from './lib/mvpValidation';
import BaseInfoSection from './components/BaseInfoSection';
import FeatureMatrixSection from './components/FeatureMatrixSection';
import TimelineSection from './components/TimelineSection';
import RiskSection from './components/RiskSection';
import ValidationSection from './components/ValidationSection';
import { useMVPAnalysis } from './hooks/useMVPAnalysis';
import MVPAnalysisResults from './components/MVPAnalysisResults';
import LoadingSpinner from './components/LoadingSpinner';
import './styles/mvp.css';

export default function MVPDesignerPage() {
  // State management
  const [mvpDesign, setMvpDesign] = useState<MVPDesign>(initialMVPState);
  const [activeSection, setActiveSection] = useState<string>('baseInfo');
  const [showAnalysis, setShowAnalysis] = useState(false);

  // Custom hook for MVP analysis
  const { analyze, retry, analysis, isAnalyzing, error: analysisError } = useMVPAnalysis();

  // Handle updates to different sections
  const handleBaseInfoUpdate = (field: keyof MVPDesign['baseInfo'], value: string) => {
    setMvpDesign((prev) => ({
      ...prev,
      baseInfo: {
        ...prev.baseInfo,
        [field]: value,
      },
    }));
  };

  const handleFeatureUpdate = (features: Feature[]) => {
    setMvpDesign((prev) => ({
      ...prev,
      features,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    const result = await analyze(mvpDesign);
    if (result) {
      setShowAnalysis(true);
    }
  };

  return (
    <div className='mvp-designer-container'>
      <header className='mb-8'>
        <h1 className='text-2xl font-bold'>MVP Designer</h1>
        <p className='text-gray-600'>Rancang MVP Anda dengan panduan AI</p>
      </header>

      <div className='mb-6'>
        <nav className='flex space-x-2'>
          {[
            { id: 'baseInfo', label: 'Informasi Dasar', icon: '📝' },
            { id: 'features', label: 'Fitur Matrix', icon: '✨' },
            { id: 'timeline', label: 'Timeline', icon: '📅' },
            { id: 'risks', label: 'Risk Assessment', icon: '⚠️' },
            { id: 'validation', label: 'Validation Plan', icon: '✅' },
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`
                px-4 py-2 rounded-lg flex items-center gap-2
                ${activeSection === section.id ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}
              `}
            >
              <span>{section.icon}</span>
              <span>{section.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className='bg-white rounded-xl shadow-sm p-6'>
        {activeSection === 'baseInfo' && <BaseInfoSection baseInfo={mvpDesign.baseInfo} onChange={handleBaseInfoUpdate} />}

        {activeSection === 'features' && <FeatureMatrixSection features={mvpDesign.features} onChange={handleFeatureUpdate} />}

        {activeSection === 'timeline' && (
          <TimelineSection
            timeline={mvpDesign.timeline}
            features={mvpDesign.features}
            onChange={(timeline) => setMvpDesign((prev) => ({ ...prev, timeline }))}
          />
        )}

        {activeSection === 'risks' && <RiskSection risks={mvpDesign.risks} onChange={(risks) => setMvpDesign((prev) => ({ ...prev, risks }))} />}

        {activeSection === 'validation' && (
          <ValidationSection
            validationMilestones={mvpDesign.validationMilestones}
            onChange={(validationMilestones) => setMvpDesign((prev) => ({ ...prev, validationMilestones }))}
          />
        )}

        <div className='mt-8 flex justify-end'>
          <button
            onClick={handleSubmit}
            disabled={isAnalyzing}
            className={`
              bg-blue-600 text-white px-8 py-3 rounded-lg
              hover:bg-blue-700 transition-colors
              disabled:opacity-70 disabled:cursor-not-allowed
              flex items-center gap-3 text-lg
            `}
          >
            {isAnalyzing ? (
              <>
                <LoadingSpinner size='sm' light={true} />
                <span>Menganalisis MVP...</span>
              </>
            ) : (
              <>
                <span className='text-xl'>✨</span>
                <span>Analisis MVP</span>
              </>
            )}
          </button>
        </div>
      </div>

      {showAnalysis && analysis && (
        <MVPAnalysisResults
          analysis={analysis}
          isLoading={isAnalyzing}
          error={analysisError}
          onClose={() => setShowAnalysis(false)}
          onRetry={retry}
        />
      )}
    </div>
  );
}
