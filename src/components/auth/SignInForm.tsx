// src/components/auth/SignInForm.tsx

'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      await signIn('google', {
        callbackUrl: '/perjalanan-bisnis',
        redirect: true,
      });
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='mt-8 space-y-6'>
      <button
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        className='group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50'
      >
        {isLoading ? 'Memproses...' : 'Masuk dengan Google'}
      </button>
    </div>
  );
}
