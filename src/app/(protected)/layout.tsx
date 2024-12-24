// src\app\(protected)\layout.tsx
import { auth } from '../../lib/auth';
import { redirect } from 'next/navigation';
import { Navbar } from '../../components/layout/protected/Navbar';

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div>
      <Navbar />
      <main className='pt-16'>{children}</main>
    </div>
  );
}
