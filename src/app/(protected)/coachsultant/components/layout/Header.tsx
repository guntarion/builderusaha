export default function Header() {
  return (
    <header className='bg-white shadow'>
      <div className='flex items-center justify-between px-6 py-4'>
        <div>
          <h1 className='text-xl font-semibold text-gray-800'>CoachSultant</h1>
        </div>
        <div className='flex items-center space-x-4'>
          <button className='p-2 text-gray-500 hover:text-gray-700'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
              />
            </svg>
          </button>
          <div className='relative'>
            <button className='flex items-center focus:outline-none'>
              <img className='h-8 w-8 rounded-full' src='https://via.placeholder.com/150' alt='User profile' />
              <span className='ml-2 text-gray-700'>Profil Saya</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
