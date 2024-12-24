// src/app/(protected)/penilaian-wirausaha/ujian-hidup/components/QuizSection.tsx
'use client';

import { useState } from 'react';
import './styles/Quiz.css';
import type {
  QuizSectionProps,
  Section,
  CategoryType,
  QuizResults,
  CategoryScores,
  SubsectionKeys,
  SubsectionKeysHarta,
  SubsectionKeysTahta,
  SubsectionKeysWanita,
} from '../types';
import { LikertScale } from './LikertScale';

// Definisi section data
const sections: Section[] = [
  {
    title: 'Kecenderungan Harta (Material Attachment)',
    category: 'harta',
    subsections: [
      {
        subtitle: 'Relasi dengan Materi',
        questions: [
          'Saya sering memikirkan cara-cara menghasilkan uang lebih banyak.',
          'Keberhasilan bagi saya sangat terkait dengan pencapaian finansial.',
          'Saya merasa tidak nyaman ketika tidak bisa membeli sesuatu yang saya inginkan.',
          'Saya sering membandingkan kondisi finansial saya dengan orang lain.',
        ],
      },
      {
        subtitle: 'Pola Konsumsi',
        questions: [
          'Saya cenderung membeli barang impulsif tanpa perencanaan.',
          'Saya merasa lebih baik setelah berbelanja.',
          'Saya sulit menahan diri ketika melihat diskon/promo.',
        ],
      },
      {
        subtitle: 'Risk Behavior',
        questions: [
          'Saya tertarik dengan investasi berisiko tinggi.',
          'Saya bersedia mengambil utang untuk kesempatan bisnis.',
          'Saya sering tergoda skema cepat kaya.',
        ],
      },
    ],
  },
  {
    title: 'Kecenderungan Tahta (Power/Position)',
    category: 'tahta',
    subsections: [
      {
        subtitle: 'Relasi dengan Kekuasaan',
        questions: [
          'Saya merasa perlu memiliki kendali dalam situasi kelompok.',
          'Pengakuan dan status sosial sangat penting bagi saya.',
          'Saya tidak nyaman ketika pendapat saya tidak didengar.',
          'Saya sering membayangkan diri di posisi pemimpin.',
        ],
      },
      {
        subtitle: 'Pola Kompetisi',
        questions: [
          'Saya selalu ingin menjadi yang terbaik dalam kelompok.',
          'Saya merasa terganggu ketika orang lain lebih diakui.',
          'Saya sulit menerima kritik atau masukan.',
        ],
      },
      {
        subtitle: 'Ambisi',
        questions: [
          'Saya rela mengorbankan waktu pribadi untuk kemajuan karir.',
          'Saya sering merasa tidak puas dengan pencapaian saat ini.',
          'Kesuksesan orang lain membuat saya merasa tertantang.',
        ],
      },
    ],
  },
  {
    title: 'Kecenderungan Wanita (Relationship Dynamics)',
    category: 'wanita',
    subsections: [
      {
        subtitle: 'Relasi Romantis',
        questions: [
          'Saya sering memikirkan tentang hubungan romantis.',
          'Saya merasa kurang lengkap tanpa pasangan.',
          'Saya mudah tertarik pada orang baru.',
          'Saya sulit move-on dari hubungan masa lalu.',
        ],
      },
      {
        subtitle: 'Relasi Keluarga',
        questions: [
          'Saya sering mengalami konflik dalam hubungan keluarga.',
          'Saya merasa terbebani dengan ekspektasi keluarga.',
          'Saya kesulitan menyeimbangkan kebutuhan pribadi dan keluarga.',
        ],
      },
      {
        subtitle: 'Pola Attachment',
        questions: [
          'Saya cenderung terlalu bergantung pada orang terdekat.',
          'Saya takut ditinggalkan/kehilangan orang yang saya sayangi.',
          'Saya sering merasa cemburu atau posesif.',
        ],
      },
    ],
  },
];

type ResponseKey = `${number}-${number}-${number}`;

interface CategoryResponses {
  [key: ResponseKey]: number;
}

interface ResponseState {
  harta: CategoryResponses;
  tahta: CategoryResponses;
  wanita: CategoryResponses;
}

const initialResponses: ResponseState = {
  harta: {},
  tahta: {},
  wanita: {},
};

const initialCategoryScores: CategoryScores = {
  harta: {
    relasiMateri: 0,
    polaKonsumsi: 0,
    riskBehavior: 0,
    total: 0,
  },
  tahta: {
    relasiKekuasaan: 0,
    polaKompetisi: 0,
    ambisi: 0,
    total: 0,
  },
  wanita: {
    relasiRomantis: 0,
    relasiKeluarga: 0,
    polaAttachment: 0,
    total: 0,
  },
};

export default function QuizSection({ onQuizComplete }: QuizSectionProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [responses, setResponses] = useState<ResponseState>(initialResponses);
  const [showError, setShowError] = useState(false);

  const calculateProgress = () => {
    const totalQuestions = sections.reduce(
      (total, section) => total + section.subsections.reduce((subTotal, subsection) => subTotal + subsection.questions.length, 0),
      0
    );

    const answeredQuestions = Object.values(responses).reduce((total, categoryResponses) => total + Object.keys(categoryResponses).length, 0);

    return Math.round((answeredQuestions / totalQuestions) * 100);
  };

  const handleResponse = (sectionIndex: number, subsectionIndex: number, questionIndex: number, value: number) => {
    setShowError(false);
    const responseKey = `${sectionIndex}-${subsectionIndex}-${questionIndex}`;
    const category = sections[sectionIndex].category;

    setResponses((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [responseKey]: value,
      },
    }));
  };

  const getQuestionResponse = (sectionIndex: number, subsectionIndex: number, questionIndex: number): number | undefined => {
    const category = sections[sectionIndex].category;
    return responses[category][`${sectionIndex}-${subsectionIndex}-${questionIndex}`];
  };

  const calculateResults = (): QuizResults => {
    const results = { categoryScores: { ...initialCategoryScores } };

    sections.forEach((section, sectionIndex) => {
      const category = section.category;

      section.subsections.forEach((subsection, subsectionIndex) => {
        subsection.questions.forEach((_, questionIndex) => {
          const score = getQuestionResponse(sectionIndex, subsectionIndex, questionIndex) || 0;

          // Add to subsection total
          if (category === 'harta') {
            const keys: SubsectionKeysHarta[] = ['relasiMateri', 'polaKonsumsi', 'riskBehavior'];
            const subsectionKey = keys[subsectionIndex];
            if (subsectionKey) {
              results.categoryScores.harta[subsectionKey] += score;
            }
          } else if (category === 'tahta') {
            const keys: SubsectionKeysTahta[] = ['relasiKekuasaan', 'polaKompetisi', 'ambisi'];
            const subsectionKey = keys[subsectionIndex];
            if (subsectionKey) {
              results.categoryScores.tahta[subsectionKey] += score;
            }
          } else {
            const keys: SubsectionKeysWanita[] = ['relasiRomantis', 'relasiKeluarga', 'polaAttachment'];
            const subsectionKey = keys[subsectionIndex];
            if (subsectionKey) {
              results.categoryScores.wanita[subsectionKey] += score;
            }
          }

          // Add to category total
          results.categoryScores[category].total += score;
        });
      });
    });

    return results;
  };

  const handleNext = async () => {
    const currentSection = sections[currentSectionIndex];
    const allAnswered = currentSection.subsections.every((subsection, subsectionIndex) =>
      subsection.questions.every((_, questionIndex) => getQuestionResponse(currentSectionIndex, subsectionIndex, questionIndex))
    );

    if (!allAnswered) {
      setShowError(true);
      return;
    }

    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      const results = calculateResults();
      onQuizComplete(results);
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const progress = calculateProgress();
  const currentSection = sections[currentSectionIndex];

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
        </div>

        {currentSection.subsections.map((subsection, subsectionIndex) => (
          <div key={subsectionIndex} className='mb-8'>
            <h3 className='text-lg font-medium mb-4'>{subsection.subtitle}</h3>
            <div className='space-y-6'>
              {subsection.questions.map((question, questionIndex) => (
                <LikertScale
                  key={questionIndex}
                  statement={question}
                  value={getQuestionResponse(currentSectionIndex, subsectionIndex, questionIndex)}
                  onChange={(value) => handleResponse(currentSectionIndex, subsectionIndex, questionIndex, value)}
                />
              ))}
            </div>
          </div>
        ))}

        {showError && <div className='text-red-600 bg-red-50 p-3 rounded-lg text-sm mb-6'>Mohon lengkapi semua pertanyaan sebelum melanjutkan</div>}

        <div className='flex justify-between mt-8'>
          <button
            onClick={handlePrevious}
            disabled={currentSectionIndex === 0}
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
            {currentSectionIndex === sections.length - 1 ? 'Selesai' : 'Selanjutnya'}
          </button>
        </div>
      </div>
    </div>
  );
}
