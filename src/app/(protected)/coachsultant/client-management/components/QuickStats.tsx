export default function QuickStats() {
  const stats = [
    { name: 'Total Klien', value: '124', change: '+12%', changeType: 'positive' },
    { name: 'Engagement Aktif', value: '98', change: '+8%', changeType: 'positive' },
    { name: 'Tugas Tertunda', value: '15', change: '-3%', changeType: 'negative' },
  ];

  return (
    <div className='flex space-x-6'>
      {stats.map((stat) => (
        <div key={stat.name} className='bg-white p-4 rounded-lg shadow'>
          <div className='text-gray-500 text-sm'>{stat.name}</div>
          <div className='mt-2 flex items-baseline space-x-2'>
            <span className='text-2xl font-semibold text-gray-900'>{stat.value}</span>
            <span className={`text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>{stat.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
