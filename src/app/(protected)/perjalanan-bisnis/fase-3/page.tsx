// src/app/(protected)/perjalanan-bisnis/fase-3/page.tsx

import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  link: string;
  isAvailable: boolean;
  features: string[];
}

const tools: Tool[] = [
  {
    id: 'growth-wheel',
    name: 'Growth Wheel Implementation',
    description: 'Diagnosa dan optimalkan pertumbuhan bisnis Anda dengan pendekatan terstruktur',
    icon: '📈',
    link: '/perjalanan-bisnis/fase-3/growth-wheel',
    isAvailable: false,
    features: [
      'Business diagnostics tool',
      'Goal setting and tracking',
      'Action plan generator',
      'Progress monitoring dashboard',
      'Performance metrics tracker',
    ],
  },
  {
    id: 'team-scaling',
    name: 'Team Scaling Assistant',
    description: 'Panduan AI untuk mengembangkan dan mengelola tim secara efektif',
    icon: '👥',
    link: '/perjalanan-bisnis/fase-3/team-scaling',
    isAvailable: true,
    features: ['Role definition generator', 'Hiring timeline planner', 'Team structure optimizer', 'Skills gap analyzer', 'Training needs assessor'],
  },
];

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div
      className={`relative bg-white rounded-xl shadow-sm overflow-hidden ${
        tool.isAvailable ? 'hover:shadow-md transition-shadow cursor-pointer' : 'opacity-75'
      }`}
    >
      {tool.isAvailable ? <Link href={tool.link} className='absolute inset-0 z-10' /> : null}
      {!tool.isAvailable && (
        <div className='absolute inset-0 bg-gray-50 bg-opacity-90 flex items-center justify-center z-10'>
          <div className='bg-white px-4 py-2 rounded-full shadow-sm'>
            <span className='text-gray-600 text-sm font-medium'>Segera Hadir</span>
          </div>
        </div>
      )}

      <div className='p-6'>
        <div className='text-4xl mb-4'>{tool.icon}</div>
        <h3 className='text-xl font-semibold mb-2'>{tool.name}</h3>
        <p className='text-gray-600 mb-4'>{tool.description}</p>

        <div className='space-y-3'>
          <h4 className='font-medium text-gray-900'>Fitur Utama:</h4>
          <ul className='space-y-2'>
            {tool.features.map((feature, index) => (
              <li key={index} className='flex items-start gap-2 text-gray-600'>
                <span className='text-blue-500 mt-1'>•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {tool.isAvailable && (
          <div className='mt-6 flex justify-end'>
            <span className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700'>
              Mulai Sekarang
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default async function Phase3Page() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <div className='mb-8'>
        <Link href='/perjalanan-bisnis' className='text-blue-600 hover:text-blue-700 flex items-center gap-2 mb-4'>
          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
          </svg>
          Kembali
        </Link>

        <h1 className='text-3xl font-bold'>Fase 3: Pertumbuhan & Scaling</h1>
        <p className='text-gray-600 mt-2'>Kembangkan dan tingkatkan skala bisnis Anda dengan bantuan AI</p>
      </div>

      <div className='grid md:grid-cols-2 gap-6'>
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      <div className='mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6'>
        <h2 className='text-lg font-semibold text-blue-900 mb-2'>💡 Tips Fase Scaling</h2>
        <ul className='space-y-2 text-blue-800'>
          <li className='flex items-start gap-2'>
            <span className='mt-1'>•</span>
            <span>Mulai dengan analisis kebutuhan tim yang terstruktur</span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='mt-1'>•</span>
            <span>Pastikan setiap peran baru sejalan dengan tujuan pertumbuhan</span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='mt-1'>•</span>
            <span>Tetapkan timeline rekrutmen yang realistis</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
