// src/components/layout/marketing/Navbar.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white border-b'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <Link href='/' className='text-2xl font-bold text-blue-600'>
              BuilderUsaha
            </Link>
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            <Link href='#fitur' className='text-gray-600 hover:text-gray-900'>
              Fitur
            </Link>
            <Link href='#cara-kerja' className='text-gray-600 hover:text-gray-900'>
              Cara Kerja
            </Link>
            <Link href='#testimonial' className='text-gray-600 hover:text-gray-900'>
              Testimonial
            </Link>
            <Link href='/coachsultant' className='text-gray-600 hover:text-gray-900'>
              CoachSultant
            </Link>
            <Button>Mulai Sekarang</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
