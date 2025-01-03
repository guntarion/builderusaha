// src/app/(protected)/coachsultant/appointments/page.tsx
'use client';

export default function AppointmentsPage() {
  const appointments = [
    {
      name: 'Rumasi Arief',
      date: '15 Maret 2024',
      time: '10:00 WIB',
      status: 'Menunggu Konfirmasi',
    },
    {
      name: 'Ani Wijaya',
      date: '16 Maret 2024',
      time: '14:00 WIB',
      status: 'Dikonfirmasi',
    },
    {
      name: 'Cahyo Pratama',
      date: '17 Maret 2024',
      time: '09:30 WIB',
      status: 'Dibatalkan',
    },
    {
      name: 'Dewi Lestari',
      date: '18 Maret 2024',
      time: '13:00 WIB',
      status: 'Menunggu Konfirmasi',
    },
  ];

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-6'>Daftar Janji Temu</h1>

      {appointments.map((appointment, index) => (
        <div key={index} className='bg-white rounded-lg shadow-md p-4 mb-4 flex items-center'>
          <img
            src={
              appointment.name === 'Rumasi Arief'
                ? '/images/person/patient2.jpg'
                : appointment.name === 'Ani Wijaya'
                ? '/images/person/patient3.jpg'
                : appointment.name === 'Cahyo Pratama'
                ? '/images/person/patient14.jpg'
                : appointment.name === 'Dewi Lestari'
                ? '/images/person/patient10.jpg'
                : '/images/person/persondefault.jpg'
            }
            alt='Profile'
            className='w-16 h-16 rounded-full object-cover mr-4'
          />

          <div className='flex-1'>
            <h2 className='font-semibold'>{appointment.name}</h2>
            <div className='text-sm text-gray-600 flex items-center mt-1'>
              <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
              {appointment.date} | {appointment.time}
            </div>
            <div className='text-sm text-gray-600 flex items-center mt-1'>
              <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              {appointment.status}
            </div>
          </div>

          <div className='flex gap-2'>
            <button className='px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700'>Lihat</button>
            <button className='px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700'>Terima</button>
            <button className='px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700'>Batalkan</button>
          </div>
        </div>
      ))}
    </div>
  );
}
