// src/app/(protected)/penilaian-wirausaha/kesesuaian-bisnis-pmi/components/QuizSection.tsx
'use client';

import { useState } from 'react';
import LikertScale from './LikertScale';
import { questions } from '../data/questions';
import type { QuizSectionProps } from '../types';
import '../styles/Quiz.css';

export default function QuizSection({ onQuizComplete }: QuizSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<Record<number, string>>({});
  const [showError, setShowError] = useState(false);

  const calculateProgress = () => {
    const answeredQuestions = Object.keys(responses).length;
    return Math.round((answeredQuestions / questions.length) * 100);
  };

  const handleComplete = () => {
    const results = calculateResults();
    console.log('Quiz Results:', results);

    onQuizComplete({
      branding: results, // Pastikan ini adalah object dengan skor untuk setiap tipe bisnis
      approval: 0, // Tidak digunakan dalam quiz ini
      reflections: {}, // Tidak digunakan dalam quiz ini
    });
  };

  const handleResponse = (value: number) => {
    setShowError(false);
    setResponses((prev) => ({
      ...prev,
      [currentQuestion]: String(value),
    }));
  };

  const handleNext = () => {
    if (!responses[currentQuestion]) {
      setShowError(true);
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      // Calculate final results
      onQuizComplete({
        branding: calculateResults(),
        approval: 0, // Not used in this quiz
        reflections: {}, // Not used in this quiz
      });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const calculateResults = () => {
    const scores = {
      importExport: 0,
      localReseller: 0,
      translation: 0,
      onlineCourse: 0,
      localAssistant: 0,
      foodBusiness: 0,
    };

    // Debug untuk melihat proses perhitungan
    console.log('Raw Responses:', responses);

    Object.entries(responses).forEach(([questionIndex, answer]) => {
      const question = questions[Number(questionIndex)];
      // Convert answer string ke number karena data disimpan sebagai string
      const numericAnswer = Number(answer);

      // Log untuk debug
      console.log(`Processing Q${questionIndex}:`, {
        answer: numericAnswer,
        question: question.question,
        scores: question.options[numericAnswer - 1]?.scores, // -1 karena index array dimulai dari 0
      });

      // Menggunakan index array untuk mengakses option yang sesuai
      const selectedOptionScores = question.options[numericAnswer - 1]?.scores;

      if (selectedOptionScores) {
        scores.importExport += selectedOptionScores.importExport;
        scores.localReseller += selectedOptionScores.localReseller;
        scores.translation += selectedOptionScores.translation;
        scores.onlineCourse += selectedOptionScores.onlineCourse;
        scores.localAssistant += selectedOptionScores.localAssistant;
        scores.foodBusiness += selectedOptionScores.foodBusiness;
      }
    });

    // Debug final scores
    console.log('Final Scores after calculation:', scores);

    return scores;
  };

  const progress = calculateProgress();

  return (
    <div className='quiz-container'>
      <div className='quiz-progress'>
        <div className='progress-bar'>
          <div className='progress-fill' style={{ width: `${progress}%` }} />
        </div>
        <p className='text-right text-sm text-gray-600 mt-1'>{progress}% selesai</p>
      </div>

      <div className='question-section'>
        <h2 className='text-xl font-semibold mb-6'>
          Pertanyaan {currentQuestion + 1} dari {questions.length}
        </h2>

        <LikertScale
          statement={questions[currentQuestion].question}
          value={responses[currentQuestion] ? Number(responses[currentQuestion]) : undefined}
          onChange={handleResponse}
        />

        {showError && <div className='text-red-600 bg-red-50 p-3 rounded-lg mt-4 text-sm'>Mohon jawab pertanyaan ini sebelum melanjutkan</div>}

        <div className='flex justify-between mt-8'>
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className='px-6 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Sebelumnya
          </button>
          <button onClick={handleNext} className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'>
            {currentQuestion === questions.length - 1 ? 'Selesai' : 'Selanjutnya'}
          </button>
        </div>
      </div>
    </div>
  );
}
