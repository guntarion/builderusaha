'use client';

import { useState } from 'react';
import { Button } from './ui/Button';
import { useFormContext } from '../context/FormContext';

interface TimelineItem {
  title: string;
  description: string;
  date: string;
}

interface BudgetItem {
  category: string;
  description: string;
  amount: string;
}

type SectionKey = keyof ExpandedSections;

interface ExpandedSections {
  businessContext: boolean;
  challenges: boolean;
  scalingTriggers: boolean;
  teamNeeds: boolean;
  hiringPlan: boolean;
  timeline: boolean;
  budget: boolean;
  [key: string]: boolean; // Index signature
}

export function ResultsDisplay() {
  const { formData } = useFormContext();
  const enhancedContext = formData.apiResponse?.enhancedContext || '';
  const hiringPlan = formData.apiResponse?.hiringPlan || '';
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    businessContext: true,
    challenges: true,
    scalingTriggers: true,
    teamNeeds: true,
    hiringPlan: true,
    timeline: true,
    budget: true,
  });

  const toggleSection = (section: SectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
      alert('Data berhasil disalin ke clipboard');
    } catch (error) {
      console.error('Gagal menyalin data:', error);
    }
  };

  const renderSection = (title: string, sectionKey: SectionKey, content: any) => (
    <div className='bg-gray-50 p-4 rounded-lg'>
      <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleSection(sectionKey)}>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <span>{expandedSections[sectionKey] ? '▲' : '▼'}</span>
      </div>
      {expandedSections[sectionKey] && (
        <div className='mt-2'>
          {typeof content === 'string' ? (
            <pre className='text-sm whitespace-pre-wrap'>{content}</pre>
          ) : (
            <pre className='text-sm'>{JSON.stringify(content, null, 2)}</pre>
          )}
        </div>
      )}
    </div>
  );

  const renderTimeline = () => (
    <div className='space-y-4'>
      {(formData as any)?.timeline?.map((item: TimelineItem, index: number) => (
        <div key={index} className='flex items-center space-x-4'>
          <div className='w-4 h-4 bg-blue-600 rounded-full'></div>
          <div>
            <p className='font-medium'>{item.title}</p>
            <p className='text-sm text-gray-600'>{item.description}</p>
            <p className='text-sm text-gray-500'>{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderBudget = () => (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {(formData as any)?.budget?.map((item: BudgetItem, index: number) => (
        <div key={index} className='p-3 bg-white rounded-lg shadow-sm'>
          <p className='font-medium'>{item.category}</p>
          <p className='text-sm text-gray-600'>{item.description}</p>
          <p className='text-blue-600 font-semibold'>{item.amount}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold mb-4'>Rekomendasi Perekrutan Tim</h2>

      <div className='space-y-4'>
        {renderSection('Konteks Bisnis', 'businessContext', formData.businessContext)}
        {renderSection('Tantangan & Tujuan', 'challenges', formData.challenges)}
        {renderSection('Pemicu Skalabilitas', 'scalingTriggers', formData.scalingTriggers)}
        {renderSection('Kebutuhan Tim', 'teamNeeds', formData.teamNeeds)}
        {renderSection('Analisis Bisnis', 'enhancedContext', enhancedContext)}
        {renderSection('Rencana Perekrutan', 'hiringPlan', hiringPlan)}

        <div className='bg-gray-50 p-4 rounded-lg'>
          <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleSection('timeline')}>
            <h3 className='text-lg font-semibold'>Timeline Perekrutan</h3>
            <span>{expandedSections.timeline ? '▲' : '▼'}</span>
          </div>
          {expandedSections.timeline && <div className='mt-4'>{renderTimeline()}</div>}
        </div>

        <div className='bg-gray-50 p-4 rounded-lg'>
          <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleSection('budget')}>
            <h3 className='text-lg font-semibold'>Rincian Anggaran</h3>
            <span>{expandedSections.budget ? '▲' : '▼'}</span>
          </div>
          {expandedSections.budget && <div className='mt-4'>{renderBudget()}</div>}
        </div>
      </div>

      <div className='flex gap-4 mt-6'>
        <Button onClick={handlePrint}>Cetak</Button>
        <Button onClick={handleCopy}>Salin ke Clipboard</Button>
      </div>
    </div>
  );
}
