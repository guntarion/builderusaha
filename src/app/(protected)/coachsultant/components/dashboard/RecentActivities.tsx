export default function RecentActivities() {
  const activities = [
    {
      id: 1,
      client: 'Budi Santoso',
      type: 'Sesi Coaching',
      date: '2023-10-15',
      status: 'Selesai',
    },
    {
      id: 2,
      client: 'Ani Wijaya',
      type: 'Konsultasi Bisnis',
      date: '2023-10-14',
      status: 'Selesai',
    },
    {
      id: 3,
      client: 'Cahyo Pratama',
      type: 'Review Progress',
      date: '2023-10-13',
      status: 'Ditunda',
    },
    {
      id: 4,
      client: 'Dewi Lestari',
      type: 'Perencanaan Strategis',
      date: '2023-10-12',
      status: 'Selesai',
    },
  ];

  return (
    <div className='bg-white p-6 rounded-lg shadow'>
      <h2 className='text-lg font-semibold text-gray-800 mb-4'>Aktivitas Terakhir</h2>
      <div className='space-y-4'>
        {activities.map((activity) => (
          <div key={activity.id} className='flex items-center justify-between'>
            <div>
              <div className='font-medium text-gray-900'>{activity.client}</div>
              <div className='text-sm text-gray-500'>{activity.type}</div>
            </div>
            <div className='text-sm text-gray-500'>{activity.date}</div>
            <div className={`text-sm ${activity.status === 'Selesai' ? 'text-green-600' : 'text-yellow-600'}`}>{activity.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
