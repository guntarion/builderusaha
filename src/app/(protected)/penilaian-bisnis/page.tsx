// src/app/(protected)/penilaian-bisnis/page.tsx
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

interface Assessment {
  id: string;
  title: string;
  description: string;
  link: string;
  isAvailable: boolean;
}

const assessments: Assessment[] = [
  {
    id: 'fase-bisnis',
    title: 'Identifikasi Fase Bisnis',
    description: 'Kenali fase bisnis Anda saat ini dan dapatkan panduan untuk naik ke level berikutnya.',
    link: '/penilaian-bisnis/fase-bisnis',
    isAvailable: true,
  },
  {
    id: 'kesehatan-bisnis',
    title: 'Kesehatan Bisnis',
    description: 'Evaluasi kondisi operasional dan keuangan bisnis Anda secara menyeluruh.',
    link: '/penilaian-bisnis/kesehatan-bisnis',
    isAvailable: false,
  },
  {
    id: 'potensi-pertumbuhan',
    title: 'Potensi Pertumbuhan',
    description: 'Analisis peluang dan potensi pengembangan bisnis Anda ke depan.',
    link: '/penilaian-bisnis/potensi-pertumbuhan',
    isAvailable: false,
  },
  {
    id: 'team-dynamics',
    title: 'Dinamika Tim',
    description: 'Evaluasi efektivitas dan kinerja tim dalam menjalankan bisnis.',
    link: '/penilaian-bisnis/team-dynamics',
    isAvailable: false,
  },
  {
    id: 'innovation-readiness',
    title: 'Kesiapan Inovasi',
    description: 'Ukur kapabilitas bisnis Anda dalam melakukan inovasi berkelanjutan.',
    link: '/penilaian-bisnis/innovation-readiness',
    isAvailable: false,
  },
  {
    id: 'market-position',
    title: 'Posisi Pasar',
    description: 'Analisis posisi kompetitif dan kekuatan bisnis Anda di pasar.',
    link: '/penilaian-bisnis/market-position',
    isAvailable: false,
  },
];

export default async function BusinessAssessmentPage() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold mb-2'>Penilaian Bisnis</h1>
        <p className='text-gray-600'>Serangkaian asesmen untuk memahami berbagai aspek bisnis Anda</p>
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {assessments.map((assessment) => (
          <div key={assessment.id} className='bg-white rounded-xl shadow-sm p-6'>
            <h3 className='text-xl font-semibold mb-3'>{assessment.title}</h3>
            <p className='text-gray-600 mb-6'>{assessment.description}</p>

            {assessment.isAvailable ? (
              <Link href={assessment.link} className='inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'>
                Mulai Asesmen
              </Link>
            ) : (
              <div className='space-y-2'>
                <button disabled className='inline-block w-full bg-gray-100 text-gray-400 px-6 py-2 rounded-lg cursor-not-allowed'>
                  Segera Hadir
                </button>
                <p className='text-xs text-gray-400 text-center'>Asesmen ini sedang dalam pengembangan</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
