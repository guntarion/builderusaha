// src/app/(protected)/penilaian-bisnis/pitch-readiness/components/AssessmentSection.tsx
'use client';

import { useState } from 'react';
import { assessmentSections } from '../data/questions';
import type { AssessmentSectionProps, AssessmentResponse } from '../types';
import './styles/Quiz.css';

/**
 * AssessmentSection Component
 * Handles the quiz/assessment portion of the pitch readiness evaluation
 * Displays questions by section and tracks user responses
 *
 * @param onComplete - Callback function to handle assessment completion
 */
export default function AssessmentSection({ onComplete }: AssessmentSectionProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [responses, setResponses] = useState<AssessmentResponse>({});
  const [showError, setShowError] = useState(false);

  const calculateProgress = () => {
    const totalQuestions = assessmentSections.reduce((total, section) => total + section.questions.length, 0);
    const answeredQuestions = Object.keys(responses).length;
    return Math.round((answeredQuestions / totalQuestions) * 100);
  };

  const handleResponse = (questionId: string, value: number) => {
    setShowError(false);
    setResponses((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNext = () => {
    const currentSection = assessmentSections[currentSectionIndex];
    const allAnswered = currentSection.questions.every((question) => responses[question.id] !== undefined);

    if (!allAnswered) {
      setShowError(true);
      return;
    }

    if (currentSectionIndex < assessmentSections.length - 1) {
      setCurrentSectionIndex((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      onComplete(responses);
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const progress = calculateProgress();
  const currentSection = assessmentSections[currentSectionIndex];

  return (
    <div className='quiz-container'>
      {/* Progress Bar */}
      <div className='mb-6'>
        <div className='h-2 bg-gray-200 rounded-full'>
          <div className='h-full bg-blue-600 rounded-full transition-all duration-300' style={{ width: `${progress}%` }} />
        </div>
        <p className='text-right text-sm text-gray-600 mt-1'>{progress}% selesai</p>
      </div>

      <div className='bg-white rounded-xl shadow-sm p-8'>
        <div className='mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>{currentSection.title}</h2>
          <p className='text-gray-600'>
            Bagian {currentSectionIndex + 1} dari {assessmentSections.length}
          </p>
        </div>

        <div className='space-y-8'>
          {currentSection.questions.map((question) => (
            <div key={question.id} className='question-item'>
              <p className='text-lg mb-4'>{question.text}</p>
              <div className='grid grid-cols-1 gap-3'>
                {question.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleResponse(question.id, option.value)}
                    className={`text-left p-4 rounded-lg border transition-all ${
                      responses[question.id] === option.value ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <span className='flex items-center'>
                      <span
                        className={`w-6 h-6 rounded-full border mr-3 flex items-center justify-center ${
                          responses[question.id] === option.value ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-300'
                        }`}
                      >
                        {responses[question.id] === option.value && '✓'}
                      </span>
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {showError && <div className='text-red-600 bg-red-50 p-3 rounded-lg mt-6 text-sm'>Mohon jawab semua pertanyaan sebelum melanjutkan</div>}

        <div className='flex justify-between mt-8'>
          <button
            onClick={handlePrevious}
            disabled={currentSectionIndex === 0}
            className='px-6 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Sebelumnya
          </button>
          <button onClick={handleNext} className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'>
            {currentSectionIndex === assessmentSections.length - 1 ? 'Selesai' : 'Selanjutnya'}
          </button>
        </div>
      </div>
    </div>
  );
}
