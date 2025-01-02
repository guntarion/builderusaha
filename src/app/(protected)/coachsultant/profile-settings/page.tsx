'use client';
{
  /* src/app/(protected)/coachsultant/profile-settings/page.tsx */
}

import Image from 'next/image';
import { useState } from 'react';
import { Upload } from 'lucide-react';

export default function ProfileSettings() {
  const [profileImage, setProfileImage] = useState('/images/assessments/placeholder-thumb.jpg');

  return (
    <div className='p-6 max-w-4xl mx-auto'>
      <h1 className='text-2xl font-semibold mb-6'>Setting Profil</h1>

      <div className='bg-white rounded-lg shadow p-6'>
        <h2 className='text-xl font-semibold mb-6'>Informasi Dasar</h2>

        <div className='mb-8'>
          <div className='flex items-start gap-6'>
            <div>
              <div className='relative w-32 h-32 rounded-lg overflow-hidden mb-2'>
                <Image src={profileImage} alt='Profile' fill className='object-cover' />
              </div>
              <button className='w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'>
                <Upload size={18} />
                <span>Upload Foto</span>
              </button>
              <p className='text-sm text-gray-500 mt-2'>Format: JPG, GIF atau PNG. Ukuran maks 2MB</p>
            </div>

            <div className='flex-1 grid grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Username <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  className='w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Email <span className='text-red-500'>*</span>
                </label>
                <input
                  type='email'
                  className='w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Nama Depan <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  className='w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Nama Belakang <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  className='w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Nomor Telepon</label>
                <input
                  type='tel'
                  className='w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Jenis Kelamin</label>
                <select className='w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
                  <option value=''>Pilih</option>
                  <option value='male'>Laki-laki</option>
                  <option value='female'>Perempuan</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-8'>
          <h3 className='text-lg font-semibold mb-4'>Tentang Saya</h3>
          <textarea
            rows={6}
            className='w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            placeholder='Tuliskan biografi singkat Anda...'
          ></textarea>
        </div>

        <div className='flex justify-end'>
          <button className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'>Simpan Perubahan</button>
        </div>
      </div>
    </div>
  );
}
