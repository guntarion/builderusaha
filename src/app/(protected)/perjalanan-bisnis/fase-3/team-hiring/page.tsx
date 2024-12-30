'use client';

import Link from 'next/link';
import { TeamHiringForm } from './components/TeamHiringForm';
import { FormProvider } from './context/FormContext';

export default function TeamHiringPage() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <div className='mb-8'>
        <Link href='/perjalanan-bisnis/fase-3' className='text-blue-600 hover:text-blue-700 flex items-center gap-2 mb-4'>
          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
          </svg>
          Kembali
        </Link>

        <header className='mb-8'>
          <h1 className='text-2xl font-bold'>Team Hiring Planner</h1>
          <p className='text-gray-600'>Rancang strategi perekrutan yang efektif dengan bantuan AI</p>
        </header>
      </div>

      <div className='bg-white rounded-xl shadow-sm p-6'>
        <FormProvider>
          <TeamHiringForm />
        </FormProvider>
      </div>

      <div className='mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6'>
        <h2 className='text-lg font-semibold text-blue-900 mb-2'>💡 Tips Perekrutan</h2>
        <ul className='space-y-2 text-blue-800'>
          <li className='flex items-start gap-2'>
            <span className='mt-1'>•</span>
            <span>Definisikan kebutuhan tim dengan jelas dan terukur</span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='mt-1'>•</span>
            <span>Pertimbangkan timeline dan budget dalam perencanaan</span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='mt-1'>•</span>
            <span>Sesuaikan strategi rekrutmen dengan kultur perusahaan</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
