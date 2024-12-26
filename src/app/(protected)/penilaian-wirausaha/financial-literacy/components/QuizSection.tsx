// src/app/(protected)/penilaian-wirausaha/financial-literacy/components/QuizSection.tsx
'use client';

import { useState } from 'react';
import { QuizSectionProps } from '../types';
import { assessmentSections, reflectionQuestions } from '../data/questions';
import './styles/Quiz.css';

interface SectionAnswers {
  [questionId: number]: number;
}

interface ReflectionAnswers {
  [questionId: string]: string;
}

export default function QuizSection({ onQuizComplete }: QuizSectionProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<SectionAnswers>({});
  const [reflections, setReflections] = useState<ReflectionAnswers>({});
  const [showError, setShowError] = useState(false);
  const [isReflectionSection, setIsReflectionSection] = useState(false);

  // Calculate progress
  const calculateProgress = () => {
    const totalQuestions = assessmentSections.reduce((total, section) => total + section.questions.length, 0) + reflectionQuestions.length;
    const answeredQuestions = Object.keys(answers).length + Object.keys(reflections).length;
    return Math.round((answeredQuestions / totalQuestions) * 100);
  };

  // Handle option selection
  const handleOptionSelect = (questionId: number, score: number) => {
    setShowError(false);
    setAnswers((prev) => ({
      ...prev,
      [questionId]: score,
    }));
  };

  // Handle reflection input
  const handleReflectionInput = (questionId: string, value: string) => {
    setShowError(false);
    setReflections((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  // Calculate final scores
  const calculateResults = () => {
    const scores = {
      basicConcepts: 0,
      planning: 0,
      businessPractices: 0,
      taxCompliance: 0,
    };

    // Calculate scores for each section
    Object.entries(answers).forEach(([questionId, score]) => {
      const qId = parseInt(questionId);
      if (qId <= 3) scores.basicConcepts += score;
      else if (qId <= 6) scores.planning += score;
      else if (qId <= 9) scores.businessPractices += score;
      else scores.taxCompliance += score;
    });

    return {
      scores,
      reflections,
    };
  };

  // Handle next section
  const handleNext = () => {
    const currentSection = isReflectionSection ? reflectionQuestions : assessmentSections[currentSectionIndex].questions;

    let allAnswered = false;

    if (isReflectionSection) {
      allAnswered = reflectionQuestions.every((q) => reflections[q.id]?.trim());
    } else {
      allAnswered = (currentSection as Array<{ id: number }>).every((q) => answers[q.id] !== undefined);
    }

    if (!allAnswered) {
      setShowError(true);
      return;
    }

    if (isReflectionSection) {
      // Complete the assessment
      const results = calculateResults();
      onQuizComplete(results);
    } else if (currentSectionIndex === assessmentSections.length - 1) {
      setIsReflectionSection(true);
    } else {
      setCurrentSectionIndex((prev) => prev + 1);
    }

    window.scrollTo(0, 0);
  };

  // Handle previous section
  const handlePrevious = () => {
    if (isReflectionSection) {
      setIsReflectionSection(false);
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex((prev) => prev - 1);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className='quiz-container'>
      {/* Progress Bar */}
      <div className='mb-6'>
        <div className='h-2 bg-gray-200 rounded-full'>
          <div className='h-full bg-blue-600 rounded-full transition-all duration-300' style={{ width: `${calculateProgress()}%` }} />
        </div>
        <p className='text-right text-sm text-gray-600 mt-1'>{calculateProgress()}% selesai</p>
      </div>

      <div className='bg-white rounded-xl shadow-sm p-8'>
        {/* Section Header */}
        <div className='mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>
            {isReflectionSection ? 'Refleksi Pembelajaran' : assessmentSections[currentSectionIndex].title}
          </h2>
          {!isReflectionSection && <p className='text-gray-600'>{assessmentSections[currentSectionIndex].description}</p>}
        </div>

        {/* Questions */}
        <div className='space-y-8'>
          {isReflectionSection
            ? // Reflection Questions
              reflectionQuestions.map((question) => (
                <div key={question.id} className='reflection-question'>
                  <label className='block text-gray-700 font-medium mb-2'>{question.question}</label>
                  <textarea
                    className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500'
                    rows={4}
                    value={reflections[question.id] || ''}
                    onChange={(e) => handleReflectionInput(question.id, e.target.value)}
                    placeholder='Tulis refleksi Anda...'
                  />
                </div>
              ))
            : // Assessment Questions
              assessmentSections[currentSectionIndex].questions.map((question) => (
                <div key={question.id} className='question-item'>
                  <p className='font-medium mb-4'>{question.question}</p>
                  <div className='space-y-3'>
                    {question.options.map((option, idx) => (
                      <button
                        key={idx}
                        className={`w-full text-left p-4 rounded-lg border transition-all
                          ${
                            answers[question.id] === option.score
                              ? 'selected bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                              : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
                          }`}
                        onClick={() => handleOptionSelect(question.id, option.score)}
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
        </div>

        {/* Error Message */}
        {showError && <div className='text-red-600 bg-red-50 p-3 rounded-lg mt-6'>Mohon lengkapi semua pertanyaan sebelum melanjutkan</div>}

        {/* Navigation Buttons */}
        <div className='flex justify-between mt-8'>
          <button
            onClick={handlePrevious}
            disabled={currentSectionIndex === 0 && !isReflectionSection}
            className='px-6 py-2 border rounded-lg hover:bg-gray-50 
                     disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Sebelumnya
          </button>
          <button
            onClick={handleNext}
            className='bg-blue-600 text-white px-6 py-2 rounded-lg 
                     hover:bg-blue-700'
          >
            {isReflectionSection ? 'Selesai' : 'Selanjutnya'}
          </button>
        </div>
      </div>
    </div>
  );
}
