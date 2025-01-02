'use client';

{
  /* src/app/(protected)/coachsultant/components/layout/Header.tsx */
}

import { Bell, Search } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const placeholderImage = '/images/assessments/placeholder-thumb.jpg';

  return (
    <header className='h-16 bg-white border-b border-gray-200'>
      <div className='h-full px-4 flex items-center justify-between'>
        <div className='flex-1 max-w-xl'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Cari...'
              className='w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20} />
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <button className='relative p-2 text-gray-600 hover:bg-gray-100 rounded-full'>
            <Bell size={20} />
            <span className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full'></span>
          </button>

          <div className='flex items-center gap-3'>
            <div className='text-right'>
              <p className='text-sm font-medium'>Dr. Cahyadi Santoso</p>
              <p className='text-xs text-gray-500'>Konsultan Bisnis UMKM</p>
            </div>
            <div className='relative w-10 h-10 rounded-full overflow-hidden'>
              <Image src={placeholderImage} alt='Profile' fill className='object-cover' />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
