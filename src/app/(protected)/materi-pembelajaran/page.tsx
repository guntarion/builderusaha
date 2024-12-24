// src/app/(protected)/materi-pembelajaran/page.tsx
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function LearningMaterialsPage() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Materi Pembelajaran</h1>

      <div className='grid md:grid-cols-3 gap-6'>
        {[
          {
            type: 'Video Pembelajaran',
            icon: '🎥',
            count: 24,
            description: 'Video tutorial dan pembahasan kasus',
          },
          {
            type: 'Artikel Panduan',
            icon: '📚',
            count: 48,
            description: 'Panduan lengkap dan studi kasus',
          },
          {
            type: 'Webinar',
            icon: '🎯',
            count: 12,
            description: 'Sesi interaktif dengan pakar',
          },
        ].map((material, index) => (
          <div key={index} className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer'>
            <div className='text-4xl mb-4'>{material.icon}</div>
            <h3 className='text-xl font-semibold mb-2'>{material.type}</h3>
            <p className='text-gray-600 mb-2'>{material.description}</p>
            <p className='text-sm text-gray-500'>{material.count} materi tersedia</p>
          </div>
        ))}
      </div>
    </div>
  );
}
