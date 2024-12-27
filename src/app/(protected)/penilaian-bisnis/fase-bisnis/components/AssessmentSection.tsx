// src/app/(protected)/penilaian-bisnis/fase-bisnis/components/AssessmentSection.tsx
'use client';

import { useState } from 'react';
import { assessmentCategories } from '../data/questions';
import type { AssessmentResponse } from '../data/types';

interface AssessmentSectionProps {
  onComplete: (responses: AssessmentResponse) => void;
}

export default function AssessmentSection({ onComplete }: AssessmentSectionProps) {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [responses, setResponses] = useState<AssessmentResponse>({});
  const [showError, setShowError] = useState(false);

  const currentCategory = assessmentCategories[currentCategoryIndex];

  const calculateProgress = () => {
    const totalQuestions = assessmentCategories.reduce((sum, category) => sum + category.questions.length, 0);
    const answeredQuestions = Object.keys(responses).length;
    return Math.round((answeredQuestions / totalQuestions) * 100);
  };

  const handleResponse = (questionId: string, value: string | number) => {
    setShowError(false);
    setResponses((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNext = () => {
    const currentQuestions = currentCategory.questions;
    const allAnswered = currentQuestions.every((question) => responses[question.id] !== undefined);

    if (!allAnswered) {
      setShowError(true);
      return;
    }

    if (currentCategoryIndex < assessmentCategories.length - 1) {
      setCurrentCategoryIndex((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      onComplete(responses);
    }
  };

  const handlePrevious = () => {
    if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className='bg-white rounded-xl shadow-sm p-8'>
      {/* Progress Bar */}
      <div className='mb-6'>
        <div className='h-2 bg-gray-200 rounded-full'>
          <div className='h-full bg-blue-600 rounded-full transition-all duration-300' style={{ width: `${calculateProgress()}%` }} />
        </div>
        <p className='text-right text-sm text-gray-600 mt-1'>{calculateProgress()}% selesai</p>
      </div>

      {/* Category Header */}
      <div className='mb-8'>
        <h2 className='text-2xl font-bold mb-2'>{currentCategory.name}</h2>
        <p className='text-gray-600'>{currentCategory.description}</p>
      </div>

      {/* Questions */}
      <div className='space-y-8'>
        {currentCategory.questions.map((question) => (
          <div key={question.id} className='border-b pb-6'>
            <p className='text-lg font-medium mb-4'>{question.question}</p>

            {question.responseType === 'multiple' && question.options && (
              <div className='space-y-3'>
                {question.options.map((option, index) => (
                  <label key={index} className='flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50'>
                    <input
                      type='radio'
                      name={question.id}
                      value={index}
                      checked={responses[question.id] === String(index)}
                      onChange={(e) => handleResponse(question.id, e.target.value)}
                      className='mr-3'
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            )}

            {question.responseType === 'numeric' && (
              <input
                type='number'
                value={responses[question.id] || ''}
                onChange={(e) => handleResponse(question.id, e.target.value)}
                className='w-full p-2 border rounded-lg'
                placeholder='Masukkan angka...'
              />
            )}
          </div>
        ))}
      </div>

      {showError && <div className='text-red-600 bg-red-50 p-3 rounded-lg mt-4'>Mohon jawab semua pertanyaan sebelum melanjutkan</div>}

      {/* Navigation Buttons */}
      <div className='flex justify-between mt-8'>
        <button
          onClick={handlePrevious}
          disabled={currentCategoryIndex === 0}
          className='px-6 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50'
        >
          Sebelumnya
        </button>
        <button onClick={handleNext} className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'>
          {currentCategoryIndex === assessmentCategories.length - 1 ? 'Selesai' : 'Selanjutnya'}
        </button>
      </div>
    </div>
  );
}
