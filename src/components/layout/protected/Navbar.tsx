// src/components/layout/protected/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { clsx } from 'clsx';

export function Navbar() {
  const pathname = usePathname();

  const navigation = [
    { name: 'Perjalanan Bisnis', href: '/perjalanan-bisnis' },
    { name: 'Penilaian Wirausaha', href: '/penilaian-wirausaha' },
    { name: 'Penilaian Bisnis', href: '/penilaian-bisnis' },
    { name: 'Materi Pembelajaran', href: '/materi-pembelajaran' },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white border-b'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <Link href='/' className='text-2xl font-bold text-blue-600'>
              BuilderUsaha
            </Link>

            <div className='hidden md:flex items-center space-x-8 ml-10'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'text-sm font-medium transition-colors',
                    pathname === item.href ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <button onClick={() => signOut({ callbackUrl: '/' })} className='text-sm font-medium text-gray-600 hover:text-gray-900'>
            Keluar
          </button>
        </div>
      </div>
    </nav>
  );
}
