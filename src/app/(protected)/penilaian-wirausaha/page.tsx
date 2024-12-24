// src/app/(protected)/penilaian-wirausaha/page.tsx
import { auth } from '../../../lib/auth';
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
    id: 'personality',
    title: 'Identifikasi Tipe Kepribadian',
    description: 'Kenali tipe kepribadian dan karakteristik wirausaha Anda.',
    link: '/penilaian-wirausaha/personality',
    isAvailable: false,
  },
  {
    id: 'branding-approval',
    title: 'Sikap Branding dan Pencarian Approval',
    description: 'Evaluasi praktik personal branding dan pola pencarian validasi sosial Anda.',
    link: '/penilaian-wirausaha/branding-approval',
    isAvailable: true,
  },
  {
    id: 'harta-tahta',
    title: 'Kecenderungan Ujian Harta Tahta Cinta',
    description: 'Pahami kecenderungan Anda dalam menghadapi ujian bisnis.',
    link: '/penilaian-wirausaha/ujian-hidup',
    isAvailable: true,
  },
];

export default async function EntrepreneurAssessmentPage() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Penilaian Wirausaha</h1>

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
              <button disabled className='inline-block bg-gray-400 text-white px-6 py-2 rounded-lg cursor-not-allowed'>
                Segera Hadir
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
