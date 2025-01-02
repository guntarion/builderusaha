// src/components/layout/marketing/Navbar.tsx
import Link from 'next/link';
import { Button } from 'src/components/ui/Button';
import { cn } from 'src/lib/utils';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <nav className={cn('fixed top-0 left-0 right-0 z-50', className)}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <Link href='/' className='text-2xl font-bold text-white'>
              BuilderUsaha
            </Link>
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            <Link href='#fitur' className='text-white/80 hover:text-white'>
              Fitur
            </Link>
            <Link href='#cara-kerja' className='text-white/80 hover:text-white'>
              Cara Kerja
            </Link>
            <Link href='/template-usaha' className='text-white/80 hover:text-white'>
              Template Usaha
            </Link>
            <Link href='/coachsultant' className='text-white/80 hover:text-white'>
              CoachSultant
            </Link>
            <Button className='bg-blue-400 hover:bg-blue-500 nav-button rounded-full px-6'>Mulai Sekarang</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
