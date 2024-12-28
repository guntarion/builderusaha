// src/app/(protected)/perjalanan-bisnis/page.tsx
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function BusinessJourneyPage() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  const phases = [
    {
      phase: 'Temukan & Validasi Ide',
      icon: '💡',
      description: 'Validasi ide bisnis Anda dan pahami pasar',
      link: '/perjalanan-bisnis/fase-1',
      isAvailable: true,
    },
    {
      phase: 'Perencanaan & Peluncuran',
      icon: '📝',
      description: 'Siapkan rencana dan luncurkan bisnis Anda',
      link: '/perjalanan-bisnis/fase-2',
      isAvailable: true,
    },
    {
      phase: 'Pertumbuhan & Pengembangan',
      icon: '📈',
      description: 'Kembangkan dan tingkatkan skala bisnis',
      link: '/perjalanan-bisnis/fase-3',
      isAvailable: false,
    },
    {
      phase: 'Maturitas & Exit',
      icon: '🎯',
      description: 'Optimalkan dan rencanakan masa depan',
      link: '/perjalanan-bisnis/fase-4',
      isAvailable: false,
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Perjalanan Bisnis Anda</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {phases.map((phase, index) => (
          <div key={index} className='relative'>
            {phase.isAvailable ? (
              <Link href={phase.link}>
                <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer'>
                  <div className='text-4xl mb-4'>{phase.icon}</div>
                  <h3 className='text-xl font-semibold mb-2'>{phase.phase}</h3>
                  <p className='text-gray-600'>{phase.description}</p>
                </div>
              </Link>
            ) : (
              <div className='bg-white p-6 rounded-xl shadow-sm opacity-75 relative'>
                <div className='absolute inset-0 bg-gray-50 bg-opacity-90 flex items-center justify-center rounded-xl'>
                  <span className='bg-white px-4 py-2 rounded-full text-gray-600 text-sm font-medium shadow-sm'>Segera Hadir</span>
                </div>
                <div className='text-4xl mb-4'>{phase.icon}</div>
                <h3 className='text-xl font-semibold mb-2'>{phase.phase}</h3>
                <p className='text-gray-600'>{phase.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
