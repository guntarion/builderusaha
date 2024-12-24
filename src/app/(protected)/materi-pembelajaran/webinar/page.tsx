// src/app/(protected)/materi-pembelajaran/webinar/page.tsx
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

interface Webinar {
  id: string;
  title: string;
  speaker: {
    name: string;
    role: string;
    organization: string;
    imageUrl: string;
  };
  dateTime: {
    date: string;
    time: string;
    timezone: string;
  };
  description: string;
  sponsoredBy?: string;
  isUpcoming: boolean;
  registrationUrl: string;
  recordingUrl?: string; // untuk webinar yang sudah selesai
}

const webinars: Webinar[] = [
  {
    id: '1',
    title: 'Strategi Mengembangkan UMKM di Era Digital',
    speaker: {
      name: 'Dr. Budi Santoso',
      role: 'Direktur Digital Transformation',
      organization: 'Kementerian UMKM',
      imageUrl: '/placeholder-speaker-1.jpg',
    },
    dateTime: {
      date: '15 Januari 2025',
      time: '14:00',
      timezone: 'WIB',
    },
    description:
      'Webinar ini akan membahas strategi praktis untuk mengembangkan UMKM menggunakan teknologi digital, termasuk pemanfaatan e-commerce dan media sosial.',
    isUpcoming: true,
    registrationUrl: '/register/webinar-1',
  },
  {
    id: '2',
    title: 'Peluang Bisnis untuk Pekerja Migran Indonesia',
    speaker: {
      name: 'Ibu Sinta Wijaya',
      role: 'Kepala Divisi Pemberdayaan',
      organization: 'BP2MI',
      imageUrl: '/placeholder-speaker-2.jpg',
    },
    dateTime: {
      date: '20 Januari 2025',
      time: '10:00',
      timezone: 'WIB',
    },
    description:
      'Menggali berbagai peluang usaha yang bisa dijalankan oleh PMI, baik selama bekerja di luar negeri maupun setelah kembali ke Indonesia.',
    sponsoredBy: 'Badan Pelindungan Pekerja Migran Indonesia (BP2MI)',
    isUpcoming: true,
    registrationUrl: '/register/webinar-2',
  },
  {
    id: '3',
    title: 'Financial Technology untuk UKM',
    speaker: {
      name: 'Alex Wibowo',
      role: 'CEO',
      organization: 'FinTech Indonesia',
      imageUrl: '/placeholder-speaker-3.jpg',
    },
    dateTime: {
      date: '5 Januari 2025',
      time: '13:00',
      timezone: 'WIB',
    },
    description: 'Memahami dan memanfaatkan berbagai layanan fintech untuk mengembangkan bisnis UKM.',
    isUpcoming: false,
    registrationUrl: '/register/webinar-3',
    recordingUrl: '/recording/webinar-3',
  },
];

function WebinarCard({ webinar }: { webinar: Webinar }) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all'>
      <div className='flex items-start gap-4'>
        {/* Speaker Image */}
        <div className='w-16 h-16 rounded-full overflow-hidden flex-shrink-0'>
          <div className='w-full h-full bg-gray-200 flex items-center justify-center'>
            <span className='text-gray-400 text-xs'>Photo</span>
          </div>
        </div>

        <div className='flex-grow'>
          {/* Date & Time */}
          <div className='flex items-center gap-2 text-sm text-blue-600 mb-2'>
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
            <span>
              {webinar.dateTime.date} • {webinar.dateTime.time} {webinar.dateTime.timezone}
            </span>
          </div>

          {/* Title */}
          <h3 className='text-xl font-semibold mb-2'>{webinar.title}</h3>

          {/* Speaker Info */}
          <div className='text-sm text-gray-600 mb-3'>
            <div className='font-medium'>{webinar.speaker.name}</div>
            <div>
              {webinar.speaker.role}, {webinar.speaker.organization}
            </div>
          </div>

          {/* Description */}
          <p className='text-gray-600 mb-4'>{webinar.description}</p>

          {/* Sponsor if any */}
          {webinar.sponsoredBy && <div className='text-sm text-gray-500 mb-4'>Sponsored by {webinar.sponsoredBy}</div>}

          {/* Action Button */}
          {webinar.isUpcoming ? (
            <button className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors'>Register Now</button>
          ) : (
            <div className='flex gap-4'>
              <button className='bg-gray-100 text-gray-600 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors'>Watch Recording</button>
              <span className='text-gray-500 self-center'>Completed</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default async function WebinarPage() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  const upcomingWebinars = webinars.filter((w) => w.isUpcoming);
  const pastWebinars = webinars.filter((w) => !w.isUpcoming);

  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold'>Webinar</h1>
        <p className='text-gray-600 mt-2'>Sesi interaktif dengan para pakar bisnis dan industri</p>
      </div>

      {/* Upcoming Webinars */}
      <div className='mb-12'>
        <h2 className='text-2xl font-semibold mb-6'>Upcoming Webinars</h2>
        <div className='space-y-6'>
          {upcomingWebinars.map((webinar) => (
            <WebinarCard key={webinar.id} webinar={webinar} />
          ))}
        </div>
      </div>

      {/* Past Webinars */}
      <div>
        <h2 className='text-2xl font-semibold mb-6'>Past Webinars</h2>
        <div className='space-y-6'>
          {pastWebinars.map((webinar) => (
            <WebinarCard key={webinar.id} webinar={webinar} />
          ))}
        </div>
      </div>
    </div>
  );
}
