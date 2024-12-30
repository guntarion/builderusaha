import ClientHeader from './components/ClientHeader';
import ClientTable from './components/ClientTable';
import QuickStats from './components/QuickStats';

export default function ClientManagementPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-bold text-gray-800'>Manajemen Klien</h1>

      <div className='space-y-6'>
        <ClientHeader />
        <ClientTable />
      </div>
    </div>
  );
}
