export default function UpcomingSessions() {
  const sessions = [
    {
      id: 1,
      client: 'Eko Prasetyo',
      time: '10:00 - 11:00',
      date: '2023-10-16',
      type: 'Sesi Coaching',
    },
    {
      id: 2,
      client: 'Fitriani',
      time: '13:00 - 14:00',
      date: '2023-10-17',
      type: 'Konsultasi Bisnis',
    },
    {
      id: 3,
      client: 'Gunawan',
      time: '09:00 - 10:00',
      date: '2023-10-18',
      type: 'Review Progress',
    },
  ];

  return (
    <div className='bg-white p-6 rounded-lg shadow'>
      <h2 className='text-lg font-semibold text-gray-800 mb-4'>Sesi Mendatang</h2>
      <div className='space-y-4'>
        {sessions.map((session) => (
          <div key={session.id} className='flex items-center justify-between'>
            <div>
              <div className='font-medium text-gray-900'>{session.client}</div>
              <div className='text-sm text-gray-500'>{session.type}</div>
            </div>
            <div className='text-right'>
              <div className='text-sm text-gray-900'>{session.date}</div>
              <div className='text-sm text-gray-500'>{session.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
