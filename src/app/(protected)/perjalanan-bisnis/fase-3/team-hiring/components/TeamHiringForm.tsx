'use client';

import { BusinessContextForm } from './steps/BusinessContextForm';
import { ChallengesForm } from './steps/ChallengesForm';
import { ScalingTriggersForm } from './steps/ScalingTriggersForm';
import { TeamNeedsForm } from './steps/TeamNeedsForm';
import { ResultsDisplay } from './ResultsDisplay';
import { useFormContext } from '../context/FormContext';
import { useState } from 'react';

export function TeamHiringForm() {
  const { currentStep, setCurrentStep, formData, setFormData } = useFormContext();
  const [showResults, setShowResults] = useState(false);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/team-hiring', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      setFormData((prev) => ({
        ...prev,
        apiResponse: {
          enhancedContext: result.enhancedContext,
          hiringPlan: result.hiringPlan,
        },
      }));
      setShowResults(true);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Gagal mengirim data. Silakan coba lagi.');
    }
  };

  if (showResults) {
    return <ResultsDisplay />;
  }

  return (
    <div className='bg-white p-6 rounded-lg shadow-md'>
      <div className='mb-8'>
        <h2 className='text-xl font-semibold mb-2'>Langkah {currentStep} dari 4</h2>
        <div className='w-full bg-gray-200 rounded-full h-2.5'>
          <div className='bg-blue-600 h-2.5 rounded-full' style={{ width: `${(currentStep / 4) * 100}%` }}></div>
        </div>
      </div>

      {currentStep === 1 && <BusinessContextForm onNext={nextStep} />}
      {currentStep === 2 && <ChallengesForm onNext={nextStep} onBack={prevStep} />}
      {currentStep === 3 && <ScalingTriggersForm onNext={nextStep} onBack={prevStep} />}
      {currentStep === 4 && <TeamNeedsForm onBack={prevStep} onSubmit={handleSubmit} />}
    </div>
  );
}
