// src/app/(protected)/materi-pembelajaran/page.tsx
import { auth } from '../../../lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

// MaterialCard Component untuk reusability
interface MaterialCardProps {
  type: string;
  icon: string;
  count: number;
  description: string;
  href: string;
}

function MaterialCard({ type, icon, count, description, href }: MaterialCardProps) {
  return (
    <Link href={href}>
      <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer'>
        <div className='text-4xl mb-4'>{icon}</div>
        <h3 className='text-xl font-semibold mb-2'>{type}</h3>
        <p className='text-gray-600 mb-2'>{description}</p>
        <p className='text-sm text-gray-500'>{count} materi tersedia</p>
      </div>
    </Link>
  );
}

export default async function LearningMaterialsPage() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  const materials = [
    {
      type: 'Video Pembelajaran',
      icon: '🎥',
      count: 24,
      description: 'Video tutorial dan pembahasan kasus',
      href: '/materi-pembelajaran/video',
    },
    {
      type: 'Artikel Panduan',
      icon: '📚',
      count: 48,
      description: 'Panduan lengkap dan studi kasus',
      href: '/materi-pembelajaran/artikel',
    },
    {
      type: 'Webinar',
      icon: '🎯',
      count: 12,
      description: 'Sesi interaktif dengan pakar',
      href: '/materi-pembelajaran/webinar',
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Materi Pembelajaran</h1>

      <div className='grid md:grid-cols-3 gap-6'>
        {materials.map((material, index) => (
          <MaterialCard key={index} {...material} />
        ))}
      </div>
    </div>
  );
}
