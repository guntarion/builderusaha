// src/app/(protected)/penilaian-wirausaha/branding-approval/components/QuizSection.tsx
'use client';

import { useState } from 'react';
import './styles/Quiz.css';

interface QuizSectionProps {
  onQuizComplete: (responses: any) => void;
}

// Data struktur untuk pertanyaan branding
const brandingSections = [
  {
    title: 'Tujuan dan Nilai (Purpose & Value)',
    questions: [
      'Saya memiliki tujuan spesifik untuk setiap konten yang saya bagikan.',
      'Konten saya fokus pada bidang keahlian atau passion yang saya tekuni.',
      'Saya bisa menjelaskan dengan jelas nilai/manfaat yang saya berikan untuk audiens.',
      'Saya memiliki target audiens yang jelas.',
      'Feedback yang saya terima lebih banyak tentang value/manfaat daripada sekedar pujian.',
    ],
  },
  {
    title: 'Autentisitas (Authenticity)',
    questions: [
      'Saya merasa nyaman menunjukkan proses pembelajaran dan kegagalan, tidak hanya kesuksesan.',
      'Konten online saya mencerminkan kepribadian dan nilai-nilai yang saya anut.',
      "Saya tidak merasa perlu 'memainkan peran' ketika membuat konten.",
      'Saya bisa menolak tren yang tidak sesuai dengan nilai-nilai saya.',
      'Saya membagikan pengalaman nyata, bukan yang direkayasa untuk konten.',
    ],
  },
  {
    title: 'Perilaku Posting (Posting Behavior)',
    questions: [
      'Saya memiliki jadwal/sistem yang teratur untuk membuat konten.',
      'Saya bisa menikmati momen penting tanpa merasa harus membagikannya.',
      'Saya tidak merasa cemas ketika tidak posting dalam beberapa hari.',
      'Saya mengalokasikan waktu khusus untuk manajemen media sosial.',
      'Saya memiliki batasan jelas antara konten profesional dan pribadi.',
    ],
  },
  {
    title: 'Dampak dan Pengukuran (Impact & Metrics)',
    questions: [
      'Saya mengukur kesuksesan berdasarkan dampak nyata, bukan hanya likes/followers.',
      'Saya mendapat peluang profesional melalui personal branding saya.',
      'Audiens saya tumbuh secara organik sesuai bidang yang saya tekuni.',
      'Saya mendapat feedback konstruktif yang membantu pengembangan diri.',
      'Konten saya menghasilkan diskusi bermakna, bukan sekedar pujian.',
    ],
  },
  {
    title: 'Pertanyaan Reflektif',
    type: 'reflection',
    questions: [
      'Apa motivasi utama Anda dalam membangun personal brand?',
      'Bagaimana Anda menentukan konten mana yang perlu dibagikan dan mana yang tidak?',
      'Ceritakan satu contoh dimana personal branding Anda membawa dampak positif bagi orang lain.',
    ],
  },
];

// Data struktur untuk pertanyaan approval
const approvalSections = [
  {
    title: 'Evaluasi Kecenderungan Mencari Pengakuan Sosial',
    questions: [
      'Saya merasa cemas jika tidak bisa memperlihatkan pencapaian saya di media sosial.',
      'Saya sering membandingkan kualitas hidup saya dengan orang lain di media sosial.',
      'Saya lebih memilih membeli barang yang bisa dipamerkan daripada yang benar-benar saya butuhkan.',
      'Suasana hati saya sangat bergantung pada likes dan komentar yang saya dapat di media sosial.',
      'Saya merasa kurang berharga ketika melihat teman-teman memiliki lifestyle yang lebih mewah.',
      'Saya sulit menikmati momen spesial tanpa mendokumentasikan dan membagikannya di sosial media.',
      'Saya sering merasa tertekan untuk selalu terlihat sukses di mata orang lain.',
      'Saya menghabiskan banyak waktu memikirkan konten yang akan saya posting.',
    ],
  },
  {
    title: 'Pertanyaan Reflektif',
    type: 'reflection',
    questions: [
      'Ceritakan satu moment dimana Anda merasa paling tertekan untuk mendapat pengakuan sosial.',
      'Apa yang Anda rasakan ketika melihat teman mencapai kesuksesan yang belum bisa Anda raih?',
    ],
  },
];

export default function QuizSection({ onQuizComplete }: QuizSectionProps) {
  const [currentPart, setCurrentPart] = useState(1); // 1 for Branding, 2 for Approval
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [responses, setResponses] = useState<{
    branding: { [key: string]: number };
    approval: { [key: string]: number };
    reflection: { [key: string]: string };
  }>({
    branding: {},
    approval: {},
    reflection: {},
  });
  const [showError, setShowError] = useState(false);

  const calculateProgress = () => {
    const getTotalQuestions = () => {
      if (currentPart === 1) {
        return brandingSections.reduce((total, section) => total + section.questions.length, 0);
      } else {
        return approvalSections.reduce((total, section) => total + section.questions.length, 0);
      }
    };

    const getAnsweredQuestions = () => {
      let answeredCount = 0;
      const currentResponses = currentPart === 1 ? responses.branding : responses.approval;
      const reflectionResponses = responses.reflection;

      const currentSections = currentPart === 1 ? brandingSections : approvalSections;

      currentSections.forEach((section, sectionIndex) => {
        section.questions.forEach((_, questionIndex) => {
          const sectionKey = `${sectionIndex}-${questionIndex}`;
          const reflectionKey = `${currentPart === 1 ? 'branding' : 'approval'}-${sectionKey}`;

          if (section.type === 'reflection') {
            if (reflectionResponses[reflectionKey]?.trim()) {
              answeredCount++;
            }
          } else {
            if (currentResponses[sectionKey] !== undefined) {
              answeredCount++;
            }
          }
        });
      });

      return answeredCount;
    };

    const totalQuestions = getTotalQuestions();
    const answeredQuestions = getAnsweredQuestions();

    return Math.round((answeredQuestions / totalQuestions) * 100);
  };

  const handleLikertResponse = (questionIndex: number, value: number) => {
    setShowError(false);
    const sectionKey = `${currentSectionIndex}-${questionIndex}`;

    setResponses((prev) => ({
      ...prev,
      [currentPart === 1 ? 'branding' : 'approval']: {
        ...prev[currentPart === 1 ? 'branding' : 'approval'],
        [sectionKey]: value,
      },
    }));
  };

  const handleReflectiveResponse = (questionIndex: number, value: string) => {
    setShowError(false);
    const sectionKey = `${currentPart === 1 ? 'branding' : 'approval'}-${currentSectionIndex}-${questionIndex}`;

    setResponses((prev) => ({
      ...prev,
      reflection: {
        ...prev.reflection,
        [sectionKey]: value,
      },
    }));
  };

  // Komponen LikertScale
  interface LikertScaleProps {
    statement: string;
    value: number;
    onChange: (value: number) => void;
  }

  const LikertScale = ({ statement, value, onChange }: LikertScaleProps) => {
    return (
      <div className='likert-scale'>
        <p className='statement mb-3'>{statement}</p>
        <div className='scale-options flex justify-between gap-2'>
          {[1, 2, 3, 4, 5].map((score) => (
            <button key={score} className={`scale-option ${value === score ? 'selected' : ''}`} onClick={() => onChange(score)}>
              {score}
              <span className='scale-label'>
                {score === 1
                  ? 'Sangat Tidak Setuju'
                  : score === 2
                  ? 'Tidak Setuju'
                  : score === 3
                  ? 'Netral'
                  : score === 4
                  ? 'Setuju'
                  : 'Sangat Setuju'}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const handleNext = async () => {
    const currentSections = currentPart === 1 ? brandingSections : approvalSections;
    const currentQuestions = currentSections[currentSectionIndex].questions;
    const isReflective = currentSections[currentSectionIndex].type === 'reflection';

    // Check if all questions in current section are answered
    const allAnswered = currentQuestions.every((_, index) => {
      const sectionKey = `${currentSectionIndex}-${index}`;
      return isReflective
        ? responses.reflection[`${currentPart === 1 ? 'branding' : 'approval'}-${sectionKey}`]
        : (currentPart === 1 ? responses.branding : responses.approval)[sectionKey];
    });

    if (!allAnswered) {
      setShowError(true);
      return;
    }

    if (currentPart === 1) {
      if (currentSectionIndex < brandingSections.length - 1) {
        setCurrentSectionIndex((prev) => prev + 1);
      } else {
        setCurrentPart(2);
        setCurrentSectionIndex(0);
      }
    } else {
      if (currentSectionIndex < approvalSections.length - 1) {
        setCurrentSectionIndex((prev) => prev + 1);
      } else {
        // Calculate final results
        const brandingScores = calculateBrandingScores();
        const approvalScore = calculateApprovalScore();

        onQuizComplete({
          branding: brandingScores,
          approval: approvalScore,
          reflections: responses.reflection,
        });
      }
    }

    window.scrollTo(0, 0);
  };

  const calculateBrandingScores = () => {
    const scores = {
      purpose: 0,
      authenticity: 0,
      behavior: 0,
      impact: 0,
    };

    Object.entries(responses.branding).forEach(([key, value]) => {
      const [section] = key.split('-');
      switch (parseInt(section)) {
        case 0:
          scores.purpose += value as number;
          break;
        case 1:
          scores.authenticity += value as number;
          break;
        case 2:
          scores.behavior += value as number;
          break;
        case 3:
          scores.impact += value as number;
          break;
      }
    });

    return scores;
  };

  const calculateApprovalScore = () => {
    return Object.values(responses.approval).reduce((sum, value) => sum + (value as number), 0);
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex((prev) => prev - 1);
    } else if (currentPart === 2) {
      setCurrentPart(1);
      setCurrentSectionIndex(brandingSections.length - 1);
    }
    window.scrollTo(0, 0);
  };

  const currentSections = currentPart === 1 ? brandingSections : approvalSections;
  const activeSection = currentSections[currentSectionIndex];
  const progress = calculateProgress();

  return (
    <div className='quiz-container'>
      <div className='mb-6'>
        <div className='h-2 bg-gray-200 rounded-full'>
          <div className='h-full bg-blue-600 rounded-full transition-all duration-300' style={{ width: `${progress}%` }} />
        </div>
        <p className='text-right text-sm text-gray-600 mt-1'>{progress}% selesai</p>
      </div>

      <div className='bg-white rounded-xl shadow-sm p-8'>
        <div className='mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>
            {currentPart === 1 ? 'Personal Branding Health Check' : 'Evaluasi Kecenderungan Mencari Pengakuan Sosial'}
          </h2>
          <p className='text-gray-600'>{activeSection.title}</p>
        </div>

        <div className={`space-y-8 ${showError ? 'error' : ''}`}>
          {activeSection.type === 'reflection' ? (
            // Reflective questions
            <div className='space-y-6'>
              {activeSection.questions.map((question, index) => (
                <div key={index} className='reflection-question'>
                  <label className='block text-gray-700 font-medium mb-2'>{question}</label>
                  <textarea
                    className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    rows={3}
                    value={responses.reflection[`${currentPart === 1 ? 'branding' : 'approval'}-${currentSectionIndex}-${index}`] || ''}
                    onChange={(e) => handleReflectiveResponse(index, e.target.value)}
                  />
                </div>
              ))}
            </div>
          ) : (
            // Likert scale questions
            <div className='space-y-8'>
              {activeSection.questions.map((question, index) => (
                <LikertScale
                  key={index}
                  statement={question}
                  value={(currentPart === 1 ? responses.branding : responses.approval)[`${currentSectionIndex}-${index}`]}
                  onChange={(value) => handleLikertResponse(index, value)}
                />
              ))}
            </div>
          )}

          {showError && <div className='text-red-600 bg-red-50 p-3 rounded-lg text-sm'>Mohon jawab semua pertanyaan sebelum melanjutkan</div>}
        </div>

        <div className='flex justify-between mt-8'>
          <button
            onClick={handlePrevious}
            disabled={currentPart === 1 && currentSectionIndex === 0}
            className='px-6 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Sebelumnya
          </button>
          <button onClick={handleNext} className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'>
            {currentPart === 2 && currentSectionIndex === approvalSections.length - 1 ? 'Selesai' : 'Selanjutnya'}
          </button>
        </div>
      </div>
    </div>
  );
}
