// src/app/(protected)/perjalanan-bisnis/page.tsx
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function BusinessJourneyPage() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Perjalanan Bisnis Anda</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {[
          {
            phase: 'Temukan & Validasi Ide',
            icon: '💡',
            description: 'Validasi ide bisnis Anda dan pahami pasar',
          },
          {
            phase: 'Perencanaan & Peluncuran',
            icon: '📝',
            description: 'Siapkan rencana dan luncurkan bisnis Anda',
          },
          {
            phase: 'Pertumbuhan & Pengembangan',
            icon: '📈',
            description: 'Kembangkan dan tingkatkan skala bisnis',
          },
          {
            phase: 'Maturitas & Exit',
            icon: '🎯',
            description: 'Optimalkan dan rencanakan masa depan',
          },
        ].map((phase, index) => (
          <div key={index} className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer'>
            <div className='text-4xl mb-4'>{phase.icon}</div>
            <h3 className='text-xl font-semibold mb-2'>{phase.phase}</h3>
            <p className='text-gray-600'>{phase.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
