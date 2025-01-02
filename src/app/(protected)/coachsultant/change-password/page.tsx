'use client';

{
  /* src/app/(protected)/coachsultant/change-password/page.tsx */
}

export default function ChangePassword() {
  return (
    <div className='p-6 max-w-4xl mx-auto'>
      <h1 className='text-2xl font-semibold mb-6'>Ubah Password</h1>

      <div className='bg-white rounded-lg shadow p-6'>
        <div className='max-w-md'>
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Password Saat Ini <span className='text-red-500'>*</span>
            </label>
            <input
              type='password'
              className='w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Password Baru <span className='text-red-500'>*</span>
            </label>
            <input
              type='password'
              className='w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
            <p className='mt-1 text-sm text-gray-500'>Minimal 8 karakter</p>
          </div>

          <div className='mb-8'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Konfirmasi Password Baru <span className='text-red-500'>*</span>
            </label>
            <input
              type='password'
              className='w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div className='flex justify-end'>
            <button className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'>Ubah Password</button>
          </div>
        </div>
      </div>
    </div>
  );
}
