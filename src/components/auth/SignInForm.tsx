// src/components/auth/SignInForm.tsx

'use client';

import { signIn } from 'next-auth/react';

export function SignInForm() {
  return (
    <div className='mt-8 space-y-6'>
      <button
        onClick={() => signIn('google', { callbackUrl: '/perjalanan-bisnis' })}
        className='group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
      >
        Masuk dengan Google
      </button>
    </div>
  );
}
