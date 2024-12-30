// src/app/(protected)/penilaian-wirausaha/page.tsx
import { auth } from '../../../lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { AssessmentImage } from './ujian-hidup/components/ui/AssessmentImage';

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
    id: 'kesesuaian-bisnis-pmi',
    title: 'Kesesuaian Usaha ala Pekerja Migran Indonesia',
    description: 'Kenali kesesuaian Anda dengan tipe usaha yang khas bagi PMI.',
    link: '/penilaian-wirausaha/kesesuaian-bisnis-pmi',
    isAvailable: true,
    imageUrl: '/images/assessments/asesmen-wirausaha/kesesuaian-bisnis-pmi-thumb.jpg',
  },
  {
    id: 'branding-approval',
    title: 'Sikap Branding dan Pencarian Approval',
    description: 'Antara personal branding dan pencarian validasi sosial.',
    link: '/penilaian-wirausaha/branding-approval',
    isAvailable: true,
    imageUrl: '/images/assessments/asesmen-wirausaha/branding-approval-thumb.jpg',
  },
  {
    id: 'harta-tahta',
    title: 'Kecenderungan Ujian Harta Tahta Cinta',
    description: 'Pahami kecenderungan Anda dalam menghadapi ujian bisnis.',
    link: '/penilaian-wirausaha/ujian-hidup',
    isAvailable: true,
    imageUrl: '/images/assessments/asesmen-wirausaha/ujian-hidup-thumb.jpg',
  },
  {
    id: 'financial-literacy',
    title: 'Literasi Keuangan Wirausaha',
    description: 'Evaluasi pemahaman dan kesiapan Anda dalam mengelola aspek keuangan bisnis.',
    link: '/penilaian-wirausaha/financial-literacy',
    isAvailable: true,
    imageUrl: '/images/assessments/asesmen-wirausaha/financial-literacy-thumb.jpg',
  },
  {
    id: 'global-mindset',
    title: 'Global Leadership Readiness',
    description: 'Evaluasi kesiapan Anda dalam memimpin di konteks bisnis internasional dan lintas budaya.',
    link: '/penilaian-wirausaha/global-mindset',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-wirausaha/global-mindset-thumb.jpg',
  },
  {
    id: 'innovation-creativity',
    title: 'Kapasitas Inovasi dan Kreativitas',
    description: 'Ukur kemampuan Anda dalam menciptakan solusi inovatif dan mengidentifikasi peluang bisnis.',
    link: '/penilaian-wirausaha/innovation-creativity',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-wirausaha/innovation-creativity-thumb.jpg',
  },
  {
    id: 'market-intelligence',
    title: 'Kecerdasan Pasar dan Analisis Kompetitif',
    description: 'Evaluasi kemampuan Anda dalam memahami dinamika pasar dan menganalisis persaingan bisnis.',
    link: '/penilaian-wirausaha/market-intelligence',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-wirausaha/market-intelligence-thumb.jpg',
  },
  {
    id: 'networking-influence',
    title: 'Kemampuan Networking dan Pengaruh',
    description: 'Ukur efektivitas Anda dalam membangun dan memanfaatkan jaringan bisnis profesional.',
    link: '/penilaian-wirausaha/networking-influence',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-wirausaha/networking-influence-thumb.jpg',
  },
  {
    id: 'ethical-leadership',
    title: 'Kepemimpinan Etis dan Dampak Sosial',
    description: 'Evaluasi pendekatan Anda dalam menyelaraskan bisnis dengan tanggung jawab sosial dan etika.',
    link: '/penilaian-wirausaha/ethical-leadership',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-wirausaha/ethical-leadership-thumb.jpg',
  },
  {
    id: 'adaptability-resilience',
    title: 'Ketahanan dan Adaptabilitas Bisnis',
    description: 'Ukur kemampuan Anda dalam beradaptasi dengan perubahan dan bertahan menghadapi tantangan.',
    link: '/penilaian-wirausaha/adaptability-resilience',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-wirausaha/adaptability-resilience-thumb.jpg',
  },
  {
    id: 'women-leadership',
    title: 'Kepemimpinan Wanita dalam Bisnis',
    description: 'Evaluasi kekuatan dan area pengembangan Anda sebagai pemimpin wanita dalam dunia bisnis.',
    link: '/penilaian-wirausaha/women-leadership',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-wirausaha/women-leadership-thumb.jpg',
  },
  {
    id: 'strategic-thinking',
    title: 'Pemikiran Strategis dan Eksekusi',
    description: 'Ukur kemampuan Anda dalam merumuskan dan mengeksekusi strategi bisnis jangka panjang.',
    link: '/penilaian-wirausaha/strategic-thinking',
    isAvailable: false,
    imageUrl: '/images/assessments/asesmen-wirausaha/strategic-thinking-thumb.jpg',
  },
];

export default async function EntrepreneurAssessmentPage() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold mb-2'>Penilaian Wirausaha</h1>
        <p className='text-gray-600'>Serangkaian asesmen untuk memahami berbagai aspek kepribadian wirausaha Anda</p>
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
