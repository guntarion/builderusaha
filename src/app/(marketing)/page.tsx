// src/app/(marketing)/page.tsx
'use client';

import Link from 'next/link';
import { Button } from 'src/components/ui/Button';
import { Navbar } from 'src/components/layout/marketing/Navbar';
import Image from 'next/image';
import { useEffect } from 'react';
import './styles.css';

export default function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.marketing-header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('header-solid');
          header.classList.remove('header-transparent');
        } else {
          header.classList.add('header-transparent');
          header.classList.remove('header-solid');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='min-h-screen animated-background'>
      <div className='geometric-shapes'>
        <div className='shape-left'></div>
        <div className='shape-right'></div>
      </div>

      <Navbar className='marketing-header header-transparent' />

      {/* Hero Section */}
      <section className='hero-section'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='banner-content'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6'>
                Bangun Bisnis Impian Anda
                <br />
                <span className='ai-companion-text'>Dengan AI Pendamping</span>
              </h1>
              <p className='text-xl mb-8 text-blue-50'>
                BuilderUsaha membantu Anda memulai, mengembangkan, dan mengelola bisnis dengan panduan personalisasi berbasis AI di setiap tahap
                perjalanan bisnis Anda.
              </p>
              <div className='flex gap-4'>
                <Button className='bg-white text-blue-600 hover:bg-blue-50'>Mulai Perjalanan Bisnis</Button>
                <Button className='bg-blue-400 text-white hover:bg-blue-500'>Pelajari Lebih Lanjut</Button>
              </div>
            </div>
            <div className='banner-img hidden md:block'>
              <Image src='/images/hero-bisnis.jpg' alt='Business Growth' width={600} height={500} priority />
              <div className='banner-floating-icon'>
                <Image src='/images/icon-finance.svg' alt='Chart' width={60} height={60} />
              </div>
              <div className='banner-floating-icon'>
                <Image src='/images/icon-rate-stars.svg' alt='Growth' width={60} height={60} />
              </div>
              <div className='banner-floating-icon'>
                <Image src='/images/icon-card-id.svg' alt='Target' width={60} height={60} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Features Section */}
      <section className='why-choose-us'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h3 className='text-blue-600 font-semibold mb-2'>Fitur Utama</h3>
            <h2 className='text-3xl font-bold'>Kenapa Memilih BuilderUsaha</h2>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-6'>
              <Link href='/perjalanan-bisnis' className='block hover:bg-blue-50 rounded-lg transition-colors'>
                <div className='why-choose-item'>
                  <div className='why-choose-icon'>
                    <Image src='/images/icon-journey.svg' alt='Journey' width={32} height={32} />
                  </div>
                  <div className='why-choose-content'>
                    <h3>Perjalanan Bisnis Terstruktur</h3>
                    <p>Panduan lengkap 4 fase pengembangan bisnis dari ide hingga matang dengan AI yang memahami kebutuhan Anda</p>
                  </div>
                </div>
              </Link>

              <Link href='/penilaian-wirausaha' className='block hover:bg-blue-50 rounded-lg transition-colors'>
                <div className='why-choose-item'>
                  <div className='why-choose-icon'>
                    <Image src='/images/icon-assessment.svg' alt='Assessment' width={32} height={32} />
                  </div>
                  <div className='why-choose-content'>
                    <h3>Penilaian terhadap Pebisnis</h3>
                    <p>Analisis tentang potensi wirausaha untuk membantu proses bertumbuh sebagai pebisnis</p>
                  </div>
                </div>
              </Link>

              <Link href='/penilaian-bisnis' className='block hover:bg-blue-50 rounded-lg transition-colors'>
                <div className='why-choose-item'>
                  <div className='why-choose-icon'>
                    <Image src='/images/icon-learning.svg' alt='Learning' width={32} height={32} />
                  </div>
                  <div className='why-choose-content'>
                    <h3>Penilaian terhadap Usaha</h3>
                    <p>Assessment terhadap usaha untuk membantu naik level usaha Anda</p>
                  </div>
                </div>
              </Link>

              <Link href='/materi-pembelajaran' className='block hover:bg-blue-50 rounded-lg transition-colors'>
                <div className='why-choose-item'>
                  <div className='why-choose-icon'>
                    <Image src='/images/icon-support.svg' alt='Support' width={32} height={32} />
                  </div>
                  <div className='why-choose-content'>
                    <h3>Pembelajaran Adaptif</h3>
                    <p>Materi pembelajaran yang disesuaikan dengan tahap dan kebutuhan bisnis Anda</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className='relative hidden md:block'>
              <Image src='/images/business-growth.jpg' alt='Business Growth' width={600} height={600} className='rounded-lg' />
              <div className='absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg'>
                <div className='flex items-center gap-4'>
                  <div className='text-blue-600 font-bold text-xl'>1000+</div>
                  <div className='text-sm'>Pengusaha telah berhasil mengembangkan bisnis mereka</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id='cara-kerja' className='py-20 bg-blue-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h3 className='text-blue-600 font-semibold mb-2'>Cara Kerja</h3>
            <h2 className='text-3xl font-bold'>Mulai Perjalanan Bisnis Anda</h2>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                step: '1',
                title: 'Mulai Perjalanan',
                description: 'Tentukan fase bisnis Anda dan lakukan penilaian awal dengan AI',
                icon: '/images/icon-start.svg',
              },
              {
                step: '2',
                title: 'Terima Rekomendasi',
                description: 'Dapatkan saran yang dipersonalisasi berdasarkan profil Anda',
                icon: '/images/icon-recommendation.svg',
              },
              {
                step: '3',
                title: 'Tumbuh Bersama',
                description: 'Akses materi pembelajaran dan pantau perkembangan bisnis',
                icon: '/images/icon-growth.svg',
              },
            ].map((step, index) => (
              <div key={index} className='text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all'>
                <Image src={step.icon} alt={step.title} width={64} height={64} className='mx-auto mb-6' />
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

      {/* Footer */}
      <footer className='footer'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='footer-content'>
            <div className='footer-section'>
              <Image src='/images/logo.svg' alt='BuilderUsaha' width={160} height={40} className='mb-4' />
              <p className='mb-4'>Membangun bisnis impian Anda dengan panduan AI yang personal dan terstruktur.</p>
              <div className='social-links'>
                <Link href='#'>
                  <i className='fab fa-facebook'></i>
                </Link>
                <Link href='#'>
                  <i className='fab fa-twitter'></i>
                </Link>
                <Link href='#'>
                  <i className='fab fa-instagram'></i>
                </Link>
                <Link href='#'>
                  <i className='fab fa-linkedin'></i>
                </Link>
              </div>
            </div>

            <div className='footer-section'>
              <h3>Layanan</h3>
              <div className='footer-links text-sm space-y-2'>
                <div>
                  <Link href='/perjalanan-bisnis'>Perjalanan Bisnis</Link>
                </div>
                <div>
                  <Link href='/penilaian-wirausaha'>Penilaian Wirausaha</Link>
                </div>
                <div>
                  <Link href='/penilaian-bisnis'>Penilaian Bisnis</Link>
                </div>
                <div>
                  <Link href='/materi-pembelajaran'>Materi Pembelajaran</Link>
                </div>
              </div>
            </div>

            <div className='footer-section'>
              <h3>Perusahaan</h3>
              <div className='footer-links text-sm space-y-2'>
                <div>
                  <Link href='/tentang-kami'>Tentang Kami</Link>
                </div>
                <div>
                  <Link href='/blog'>Blog</Link>
                </div>
                <div>
                  <Link href='/karir'>Karir</Link>
                </div>
                <div>
                  <Link href='/kontak'>Kontak</Link>
                </div>
              </div>
            </div>

            <div className='footer-section'>
              <h3>Bantuan</h3>
              <div className='footer-links text-sm space-y-2'>
                <div>
                  <Link href='/faq'>FAQ</Link>
                </div>
                <div>
                  <Link href='/kebijakan-privasi'>Kebijakan Privasi</Link>
                </div>
                <div>
                  <Link href='/syarat-ketentuan'>Syarat & Ketentuan</Link>
                </div>
                <div>
                  <Link href='/bantuan'>Pusat Bantuan</Link>
                </div>
              </div>
            </div>
          </div>

          <div className='footer-bottom'>
            <div className='footer-bottom-content'>
              <p>© 2025 BuilderUsaha. All rights reserved.</p>
              <div className='flex gap-4'>
                <Link href='/kebijakan-privasi'>Kebijakan Privasi</Link>
                <Link href='/syarat-ketentuan'>Syarat & Ketentuan</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
