import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className='w-64 bg-white border-r'>
      <div className='p-6'>
        <h2 className='text-lg font-semibold'>Menu Utama</h2>
      </div>
      <nav className='space-y-1'>
        <Link href='/coachsultant' className='block px-6 py-2 text-gray-700 hover:bg-gray-100'>
          Dashboard
        </Link>
        <Link href='/coachsultant/client-management' className='block px-6 py-2 text-gray-700 hover:bg-gray-100'>
          Manajemen Klien
        </Link>
        <Link href='/coachsultant/business-monitor' className='block px-6 py-2 text-gray-700 hover:bg-gray-100'>
          Monitor Bisnis
        </Link>
        <Link href='/coachsultant/coaching-tools' className='block px-6 py-2 text-gray-700 hover:bg-gray-100'>
          Alat Coaching
        </Link>
        <Link href='/coachsultant/communications' className='block px-6 py-2 text-gray-700 hover:bg-gray-100'>
          Komunikasi
        </Link>
        <Link href='/coachsultant/analytics' className='block px-6 py-2 text-gray-700 hover:bg-gray-100'>
          Analitik & Laporan
        </Link>
        <Link href='/coachsultant/collaboration' className='block px-6 py-2 text-gray-700 hover:bg-gray-100'>
          Kolaborasi
        </Link>
        <Link href='/coachsultant/administration' className='block px-6 py-2 text-gray-700 hover:bg-gray-100'>
          Administrasi
        </Link>
        <Link href='/coachsultant/support' className='block px-6 py-2 text-gray-700 hover:bg-gray-100'>
          Dukungan
        </Link>
      </nav>
    </div>
  );
}
