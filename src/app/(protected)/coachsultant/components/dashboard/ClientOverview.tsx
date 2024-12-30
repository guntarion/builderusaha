export default function ClientOverview() {
  const stats = [
    { name: 'Total Klien', value: '124', change: '+12%', changeType: 'positive' },
    { name: 'Klien Aktif', value: '98', change: '+8%', changeType: 'positive' },
    { name: 'Sesi Bulan Ini', value: '56', change: '-3%', changeType: 'negative' },
    { name: 'Kepuasan Klien', value: '92%', change: '+2%', changeType: 'positive' },
  ];

  return (
    <>
      {stats.map((stat) => (
        <div key={stat.name} className='bg-white p-6 rounded-lg shadow'>
          <div className='text-gray-500 text-sm'>{stat.name}</div>
          <div className='mt-2 flex items-baseline space-x-2'>
            <span className='text-2xl font-semibold text-gray-900'>{stat.value}</span>
            <span className={`text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>{stat.change}</span>
          </div>
        </div>
      ))}
    </>
  );
}
