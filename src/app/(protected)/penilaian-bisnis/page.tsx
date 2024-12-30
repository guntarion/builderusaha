// src/app/(protected)/penilaian-bisnis/page.tsx
import { auth } from '../../../lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { AssessmentImage } from './team-dynamics/components/ui/AssessmentImage';

interface Assessment {
  id: string;
  title: string;
  description: string;
  link: string;
  isAvailable: boolean;
  imageUrl: string;
}

const assessments: Assessment[] = [
  {
    id: 'fase-bisnis',
    title: 'Identifikasi Fase Bisnis',
    description: 'Kenali fase bisnis saat ini dengan panduan untuk naik level.',
    link: '/penilaian-bisnis/fase-bisnis',
    isAvailable: true,
    imageUrl: '/images/assessments/asesmen-bisnis/fase-bisnis-thumb.jpg',
  },
  {
    id: 'pitch-readiness',
    title: 'Kesiapan Pitching',
    description: 'Evaluasi kesiapan materi dan presentasi bisnis Anda untuk investor.',
    link: '/penilaian-bisnis/pitch-readiness',
    isAvailable: true,
    imageUrl: '/images/assessments/asesmen-bisnis/pitch-readiness-thumb.jpg',
  },
  {
    id: 'team-dynamics',
    title: 'Dinamika Tim',
    description: 'Evaluasi efektivitas dan kinerja tim dalam menjalankan bisnis.',
    link: '/penilaian-bisnis/team-dynamics',
    isAvailable: true,
    imageUrl: '/images/assessments/asesmen-bisnis/team-dynamics-thumb.jpg',
  },
  {
    id: 'kesehatan-bisnis',
    title: 'Kesehatan Bisnis',
    description: 'Evaluasi kondisi operasional dan keuangan bisnis Anda secara menyeluruh.',
    link: '/penilaian-bisnis/kesehatan-bisnis',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-bisnis/kesehatan-bisnis-thumb.jpg',
  },
  {
    id: 'potensi-pertumbuhan',
    title: 'Potensi Pertumbuhan',
    description: 'Analisis peluang dan potensi pengembangan bisnis Anda ke depan.',
    link: '/penilaian-bisnis/potensi-pertumbuhan',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-bisnis/potensi-pertumbuhan-thumb.jpg',
  },

  {
    id: 'innovation-readiness',
    title: 'Kesiapan Inovasi',
    description: 'Ukur kapabilitas bisnis Anda dalam melakukan inovasi berkelanjutan.',
    link: '/penilaian-bisnis/innovation-readiness',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-bisnis/innovation-readiness-thumb.jpg',
  },
  {
    id: 'market-position',
    title: 'Posisi Pasar',
    description: 'Analisis posisi kompetitif dan kekuatan bisnis Anda di pasar.',
    link: '/penilaian-bisnis/market-position',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-bisnis/market-position-thumb.jpg',
  },
  {
    id: 'investment-readiness',
    title: 'Kesiapan Investasi',
    description: 'Evaluasi kesiapan bisnis Anda untuk menerima pendanaan dan investasi.',
    link: '/penilaian-bisnis/investment-readiness',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-bisnis/investment-readiness-thumb.jpg',
  },
  {
    id: 'global-expansion',
    title: 'Kesiapan Ekspansi Global',
    description: 'Ukur potensi dan kesiapan bisnis Anda untuk memasuki pasar internasional.',
    link: '/penilaian-bisnis/global-expansion',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-bisnis/global-expansion-thumb.jpg',
  },
  {
    id: 'digital-transformation',
    title: 'Transformasi Digital',
    description: 'Evaluasi kematangan digital dan potensi transformasi teknologi dalam bisnis Anda.',
    link: '/penilaian-bisnis/digital-transformation',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-bisnis/digital-transformation-thumb.jpg',
  },
  {
    id: 'sustainability-impact',
    title: 'Dampak Keberlanjutan',
    description: 'Analisis keselarasan bisnis dengan prinsip ESG dan SDGs.',
    link: '/penilaian-bisnis/sustainability-impact',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-bisnis/sustainability-impact-thumb.jpg',
  },

  {
    id: 'supply-chain',
    title: 'Ketahanan Rantai Pasok',
    description: 'Analisis efektivitas dan ketahanan rantai pasok bisnis Anda.',
    link: '/penilaian-bisnis/supply-chain',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-bisnis/supply-chain-thumb.jpg',
  },
  {
    id: 'acceleration-fit',
    title: 'Kesesuaian Program Akselerasi',
    description: 'Evaluasi kesesuaian bisnis Anda dengan berbagai program akselerasi dan inkubasi.',
    link: '/penilaian-bisnis/acceleration-fit',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-bisnis/acceleration-fit-thumb.jpg',
  },
  {
    id: 'women-business-certification',
    title: 'Sertifikasi Bisnis Wanita',
    description: 'Evaluasi kesiapan untuk sertifikasi dan program khusus bisnis yang dipimpin wanita.',
    link: '/penilaian-bisnis/women-business-certification',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-bisnis/women-business-certification-thumb.jpg',
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

      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {assessments.map((assessment) => (
          <div key={assessment.id} className='bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md'>
            <AssessmentImage imageUrl={assessment.imageUrl} title={assessment.title} isAvailable={assessment.isAvailable} />

            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-3'>{assessment.title}</h3>
              <p className='text-gray-600 mb-6'>{assessment.description}</p>

              {assessment.isAvailable ? (
                <Link
                  href={assessment.link}
                  className='inline-block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center'
                >
                  Mulai Asesmen
                </Link>
              ) : (
                <div className='space-y-2'>
                  <button disabled className='inline-block w-full bg-gray-100 text-gray-400 px-6 py-3 rounded-lg cursor-not-allowed'>
                    Segera Hadir
                  </button>
                  <p className='text-xs text-gray-400 text-center'>Asesmen ini sedang dalam pengembangan</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
