// src/app/(protected)/penilaian-bisnis/page.tsx
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function BusinessAssessmentPage() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Penilaian Bisnis</h1>

      <div className='grid md:grid-cols-2 gap-6'>
        <div className='bg-white rounded-xl shadow-sm p-6'>
          <h2 className='text-xl font-semibold mb-4'>Kesehatan Bisnis</h2>
          <p className='text-gray-600 mb-4'>Evaluasi kondisi operasional dan keuangan bisnis Anda</p>
          <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'>Mulai Evaluasi</button>
        </div>

        <div className='bg-white rounded-xl shadow-sm p-6'>
          <h2 className='text-xl font-semibold mb-4'>Potensi Pertumbuhan</h2>
          <p className='text-gray-600 mb-4'>Analisis peluang dan potensi pengembangan bisnis</p>
          <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'>Analisis Potensi</button>
        </div>
      </div>
    </div>
  );
}
