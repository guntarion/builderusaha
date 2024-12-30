'use client';

import { useState } from 'react';
import { Client } from '../types';
import { mockClients } from '../mockData';

export default function ClientTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // For now, we'll use mock data
  const clients = mockClients;
  const totalPages = Math.ceil(clients.length / itemsPerPage);
  const currentClients = clients.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  if (clients.length === 0) {
    return <div className='bg-white rounded-lg shadow p-6 text-center text-gray-500'>Tidak ada data klien yang tersedia</div>;
  }
  return (
    <div className='bg-white rounded-lg shadow'>
      <table className='min-w-full'>
        <thead>
          <tr className='border-b'>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Klien</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Industri</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Program</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Mulai</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Status</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Sesi Berikutnya</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Aktivitas Terakhir</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Aksi</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
          {clients.map((client) => (
            <tr key={client.id}>
              <td className='px-6 py-4'>
                <div className='flex items-center'>
                  <img className='h-10 w-10 rounded-full' src={client.avatar} alt={client.name} />
                  <div className='ml-4'>
                    <div className='text-sm font-medium text-gray-900'>{client.name}</div>
                    <div className='text-sm text-gray-500'>{client.company}</div>
                  </div>
                </div>
              </td>
              <td className='px-6 py-4 text-sm text-gray-500'>{client.industry}</td>
              <td className='px-6 py-4 text-sm text-gray-500'>{client.program}</td>
              <td className='px-6 py-4 text-sm text-gray-500'>{new Date(client.startDate).toLocaleDateString()}</td>
              <td className='px-6 py-4'>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    client.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : client.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : client.status === 'completed'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {client.status}
                </span>
              </td>
              <td className='px-6 py-4 text-sm text-gray-500'>{client.nextSession ? new Date(client.nextSession).toLocaleString() : '-'}</td>
              <td className='px-6 py-4 text-sm text-gray-500'>
                {client.recentActivity.length > 0 ? (
                  <div>
                    <div className='text-gray-900'>{client.recentActivity[0].type}</div>
                    <div className='text-gray-500'>{new Date(client.recentActivity[0].date).toLocaleDateString()}</div>
                  </div>
                ) : (
                  '-'
                )}
              </td>
              <td className='px-6 py-4 text-sm font-medium'>
                <button className='text-blue-600 hover:text-blue-900'>Lihat</button>
                <button className='ml-2 text-gray-600 hover:text-gray-900'>Edit</button>
                <button className='ml-2 text-green-600 hover:text-green-900'>Pesan</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className='px-6 py-4 border-t flex items-center justify-between'>
        <div className='text-sm text-gray-500'>
          Menampilkan {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, clients.length)} dari {clients.length} klien
        </div>
        <div className='flex space-x-2'>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className='px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-lg disabled:opacity-50'
          >
            Sebelumnya
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className='px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-lg disabled:opacity-50'
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
}
