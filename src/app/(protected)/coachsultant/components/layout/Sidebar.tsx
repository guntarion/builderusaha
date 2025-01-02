'use client';

{
  /* src/app/(protected)/coachsultant/components/layout/Sidebar.tsx */
}

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Calendar, Users, Clock, FileText, Wallet, Star, MessageSquare, Settings, Lock, Share2, LogOut } from 'lucide-react';
import Image from 'next/image';

export default function Sidebar() {
  const pathname = usePathname();
  const placeholderImage = '/images/assessments/placeholder-thumb.jpg';

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/coachsultant' },
    { icon: Calendar, label: 'Jadwal Konsultasi', href: '/coachsultant/appointments' },
    { icon: Users, label: 'Klien Saya', href: '/coachsultant/client-management' },
    { icon: FileText, label: 'Bisnis klien', href: '/coachsultant/client-business' },
    { icon: Clock, label: 'Jadwal Tersedia', href: '/coachsultant/availability' },
    { icon: Wallet, label: 'Keuangan', href: '/coachsultant/business-monitor' },
    { icon: Star, label: 'Ulasan', href: '/coachsultant/reviews' },
    { icon: MessageSquare, label: 'Pesan', href: '/coachsultant/communications', badge: '23' },
    { icon: Settings, label: 'Setting Profil', href: '/coachsultant/profile-settings' },
    { icon: Lock, label: 'Ubah Password', href: '/coachsultant/change-password' },
    { icon: Share2, label: 'Media Sosial', href: '/coachsultant/social-media' },
    { icon: LogOut, label: 'Keluar', href: '/auth/signout' },
  ];

  return (
    <div className='w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col'>
      <div className='p-6 flex flex-col items-center border-b border-gray-200'>
        <div className='relative w-24 h-24 rounded-full overflow-hidden mb-4'>
          <Image src={placeholderImage} alt='Profile' fill className='object-cover' />
        </div>
        <h2 className='text-lg font-semibold'>Dr. Cahyadi Santoso</h2>
        <p className='text-sm text-gray-500'>Konsultan Bisnis UMKM</p>
      </div>

      <nav className='flex-1 p-4'>
        <ul className='space-y-2'>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                  {item.badge && <span className='ml-auto bg-green-400 text-white text-xs px-2 py-1 rounded-full'>{item.badge}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
