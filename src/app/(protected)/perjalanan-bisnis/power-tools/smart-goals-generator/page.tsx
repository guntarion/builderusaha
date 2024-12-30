// src/app/(protected)/perjalanan-bisnis/power-tools/smart-goals-generator/page.tsx

import { Metadata } from 'next';
import { SmartGoalsForm } from './components/SmartGoalsForm';

export const metadata: Metadata = {
  title: 'SMART Goals Generator | Builder Usaha',
  description: 'Transform your business goals into SMART (Specific, Measurable, Achievable, Relevant, Time-bound) objectives with AI assistance.',
};

export default function SmartGoalsGeneratorPage() {
  return (
    <div className='container mx-auto py-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold mb-4'>SMART Goals Generator</h1>
          <p className='text-gray-600'>
            Transform your business goals into SMART objectives. Our AI-powered tool helps you create Specific, Measurable, Achievable, Relevant, and
            Time-bound goals for your business success.
          </p>
        </div>

        <SmartGoalsForm />
      </div>
    </div>
  );
}
