// src/app/(marketing)/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Navbar } from '@/components/layout/marketing/Navbar';

export default function HomePage() {
  return (
    <div className='min-h-screen'>
      <Navbar />

      {/* Hero Section */}
      <section className='pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
              Bangun Bisnis Impian Anda
              <br />
              <span className='text-blue-600'>Dengan AI Pendamping</span>
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              BuilderUsaha membantu Anda memulai, mengembangkan, dan mengelola bisnis dengan panduan personalisasi berbasis AI di setiap tahap
              perjalanan bisnis Anda.
            </p>
            <div className='flex justify-center gap-4'>
              <Button size='lg'>Mulai Perjalanan Bisnis</Button>
              <Button variant='outline' size='lg'>
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='fitur' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-center mb-12'>Fitur Utama</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                title: 'Perjalanan Bisnis',
                description: 'Panduan lengkap 4 fase pengembangan bisnis dari ide hingga matang',
                icon: '🚀',
                href: '/perjalanan-bisnis',
              },
              {
                title: 'Penilaian Wirausaha',
                description: 'Analisis kemampuan dan potensi diri sebagai pengusaha',
                icon: '📊',
                href: '/penilaian-wirausaha',
              },
              {
                title: 'Penilaian Bisnis',
                description: 'Evaluasi kesehatan dan potensi bisnis Anda',
                icon: '📈',
                href: '/penilaian-bisnis',
              },
              {
                title: 'Materi Pembelajaran',
                description: 'Akses ke video, artikel, dan webinar dari para ahli',
                icon: '📚',
                href: '/materi-pembelajaran',
              },
            ].map((feature, index) => (
              <Link key={index} href={feature.href} className='block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all'>
                <div className='text-4xl mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id='cara-kerja' className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-center mb-12'>Cara Kerja</h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                step: '1',
                title: 'Mulai Perjalanan',
                description: 'Tentukan fase bisnis Anda dan lakukan penilaian awal',
              },
              {
                step: '2',
                title: 'Terima Rekomendasi',
                description: 'Dapatkan saran yang dipersonalisasi berdasarkan profil Anda',
              },
              {
                step: '3',
                title: 'Tumbuh Bersama',
                description: 'Akses materi pembelajaran dan pantau perkembangan bisnis',
              },
            ].map((step, index) => (
              <div key={index} className='text-center'>
                <div className='w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4'>
                  {step.step}
                </div>
                <h3 className='text-xl font-semibold mb-2'>{step.title}</h3>
                <p className='text-gray-600'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
