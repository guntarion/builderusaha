// src/app/(protected)/coachsultant/components/dashboard/RecentActivities.tsx
import { Clock, CheckCircle, AlertCircle, Calendar, BookOpen, TrendingUp } from 'react-feather';

type ActivityStatus = 'Selesai' | 'Ditunda' | 'Berlangsung';

interface Activity {
  id: number;
  client: string;
  type: string;
  date: string;
  status: ActivityStatus;
  icon: JSX.Element;
  duration: string;
  notes: string;
  progress: number;
}

const statusIcons: Record<ActivityStatus, JSX.Element> = {
  Selesai: <CheckCircle size={16} className='text-green-500' />,
  Ditunda: <AlertCircle size={16} className='text-yellow-500' />,
  Berlangsung: <Clock size={16} className='text-blue-500' />,
};

export default function RecentActivities() {
  const activities = [
    {
      id: 1,
      client: 'Cahyadi Santoso',
      type: 'Sesi Coaching',
      date: '2023-10-15',
      status: 'Selesai' as ActivityStatus,
      icon: <BookOpen size={20} className='text-blue-500' />,
      duration: '1.5 jam',
      notes: 'Membahas strategi ekspansi bisnis',
      progress: 100,
    },
    {
      id: 2,
      client: 'Ani Wijaya',
      type: 'Konsultasi Bisnis',
      date: '2023-10-14',
      status: 'Selesai' as ActivityStatus,
      icon: <TrendingUp size={20} className='text-purple-500' />,
      duration: '2 jam',
      notes: 'Analisis model bisnis baru',
      progress: 100,
    },
    {
      id: 3,
      client: 'Cahyo Pratama',
      type: 'Review Progress',
      date: '2023-10-13',
      status: 'Ditunda' as ActivityStatus,
      icon: <Calendar size={20} className='text-orange-500' />,
      duration: '1 jam',
      notes: 'Meninjau pencapaian Q3',
      progress: 30,
    },
    {
      id: 4,
      client: 'Dewi Lestari',
      type: 'Perencanaan Strategis',
      date: '2023-10-12',
      status: 'Selesai' as ActivityStatus,
      icon: <CheckCircle size={20} className='text-green-500' />,
      duration: '2.5 jam',
      notes: 'Membuat roadmap bisnis 2024',
      progress: 100,
    },
    {
      id: 5,
      client: 'Budi Setiawan',
      type: 'Workshop Digital Marketing',
      date: '2023-10-11',
      status: 'Selesai' as ActivityStatus,
      icon: <TrendingUp size={20} className='text-purple-500' />,
      duration: '3 jam',
      notes: 'Strategi pemasaran digital untuk UMKM',
      progress: 100,
    },
    {
      id: 6,
      client: 'Rina Permata',
      type: 'Konsultasi Keuangan',
      date: '2023-10-10',
      status: 'Berlangsung' as ActivityStatus,
      icon: <BookOpen size={20} className='text-blue-500' />,
      duration: '1.5 jam',
      notes: 'Analisis laporan keuangan Q3',
      progress: 60,
    },
  ];

  return (
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-semibold text-gray-800'>Aktivitas Terakhir</h2>
        <button className='text-sm text-blue-600 hover:text-blue-700 font-medium'>Lihat Semua →</button>
      </div>

      <div className='space-y-4'>
        {activities.map((activity) => (
          <div
            key={activity.id}
            className='group flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-all duration-200 border border-gray-100 hover:border-gray-200'
          >
            <div className='flex items-center space-x-4'>
              <div className='p-2 bg-gray-50 rounded-lg group-hover:bg-white'>{activity.icon}</div>
              <div>
                <div className='font-medium text-gray-900'>{activity.client}</div>
                <div className='text-sm text-gray-500 flex items-center space-x-2'>
                  <span>{activity.type}</span>
                  <span>•</span>
                  <span>{activity.duration}</span>
                </div>
                <div className='text-xs text-gray-400 mt-1 flex items-center space-x-2'>
                  <Calendar size={12} />
                  <span>{activity.date}</span>
                </div>
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <div className='text-xs text-blue-500'>{activity.status === 'Berlangsung' ? `${activity.progress}%` : ''}</div>
              <div className='flex items-center space-x-2'>
                {statusIcons[activity.status]}
                <span
                  className={`text-sm font-medium ${
                    activity.status === 'Selesai' ? 'text-green-600' : activity.status === 'Ditunda' ? 'text-yellow-600' : 'text-blue-600'
                  }`}
                >
                  {activity.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
