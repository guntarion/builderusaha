export default function Alerts() {
  const alerts = [
    {
      id: 1,
      type: 'Penting',
      message: 'Sesi dengan Budi Santoso perlu konfirmasi ulang',
      date: '2023-10-15',
    },
    {
      id: 2,
      type: 'Info',
      message: 'Laporan bulanan perlu diselesaikan sebelum 20 Oktober',
      date: '2023-10-14',
    },
    {
      id: 3,
      type: 'Pengingat',
      message: 'Follow up dengan Ani Wijaya dalam 2 hari',
      date: '2023-10-13',
    },
  ];

  return (
    <div className='bg-white p-6 rounded-lg shadow'>
      <h2 className='text-lg font-semibold text-gray-800 mb-4'>Pemberitahuan</h2>
      <div className='space-y-4'>
        {alerts.map((alert) => (
          <div key={alert.id} className='flex items-start space-x-4'>
            <div
              className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full ${
                alert.type === 'Penting' ? 'bg-red-500' : alert.type === 'Info' ? 'bg-blue-500' : 'bg-yellow-500'
              }`}
            ></div>
            <div className='flex-1'>
              <div className='text-sm text-gray-900'>{alert.message}</div>
              <div className='text-xs text-gray-500'>{alert.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
