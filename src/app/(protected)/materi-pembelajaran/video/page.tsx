// src/app/(protected)/materi-pembelajaran/video/page.tsx
import { auth } from '../../../../lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

interface Video {
  id: string;
  title: string;
  description: string;
  category: string[];
  author: string;
  publishedAt: Date;
  duration: number; // dalam menit
  embedUrl: string;
  thumbnailUrl: string;
}

// Dummy data untuk video pembelajaran
const videos: Video[] = [
  {
    id: '1',
    title: 'Tutorial JavaScript untuk Otomasi Google Sheets',
    description: 'Belajar dasar JavaScript untuk mengotomasi perhitungan dan manipulasi data di Google Sheets.',
    category: ['Programming', 'Automation'],
    author: 'Guntar Siahaan',
    publishedAt: new Date('2024-01-15'),
    duration: 15,
    embedUrl: 'https://www.youtube.com/embed/AsmbMmjhi44',
    thumbnailUrl: '/placeholder-js-tutorial.jpg',
  },
  // Tambahkan video lainnya sesuai dengan channel YouTube Anda
  {
    id: '2',
    title: 'Google Apps Script untuk Pemula',
    description: 'Pengenalan Google Apps Script dan cara menggunakannya untuk mengotomasi tugas-tugas di Google Workspace.',
    category: ['Google Apps Script', 'Automation'],
    author: 'Guntar Siahaan',
    publishedAt: new Date('2024-01-20'),
    duration: 20,
    embedUrl: 'https://www.youtube.com/embed/-76zS0JpGaE',
    thumbnailUrl: '/placeholder-gas-tutorial.jpg',
  },
  {
    id: '3',
    title: 'Tips dan Trik Excel untuk Bisnis',
    description: 'Berbagai tips dan trik menggunakan Excel untuk meningkatkan produktivitas bisnis Anda.',
    category: ['Excel', 'Productivity'],
    author: 'Guntar Siahaan',
    publishedAt: new Date('2024-01-25'),
    duration: 18,
    embedUrl: 'https://www.youtube.com/embed/uZeyIbxoW_0',
    thumbnailUrl: '/placeholder-excel-tutorial.jpg',
  },
];

function VideoCard({ video }: { video: Video }) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all'>
      {/* Video Embed Container dengan aspect ratio 16:9 */}
      <div className='relative w-full pb-[56.25%] mb-4'>
        <iframe
          className='absolute top-0 left-0 w-full h-full rounded-md'
          src={video.embedUrl}
          title={video.title}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>

      <div className='flex gap-2 mb-2'>
        {video.category.map((cat, index) => (
          <span key={index} className='text-xs bg-gray-100 px-2 py-1 rounded-full'>
            {cat}
          </span>
        ))}
      </div>

      <h3 className='text-xl font-semibold mb-2'>{video.title}</h3>
      <p className='text-gray-600 mb-4'>{video.description}</p>

      <div className='flex items-center text-sm text-gray-500'>
        <span>{video.author}</span>
        <span className='mx-2'>•</span>
        <span>{new Date(video.publishedAt).toLocaleDateString()}</span>
        <span className='mx-2'>•</span>
        <span>{video.duration} menit</span>
      </div>
    </div>
  );
}

export default async function VideoPage() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <div className='flex items-center justify-between mb-8'>
        <div>
          <h1 className='text-3xl font-bold'>Video Pembelajaran</h1>
          <p className='text-gray-600 mt-2'>Tutorial dan pembahasan kasus bisnis dalam format video</p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
