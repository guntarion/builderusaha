import { ReactNode } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <Header />
        <main className='flex-1 p-6 overflow-y-auto'>{children}</main>
      </div>
    </div>
  );
}
