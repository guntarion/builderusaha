import QuickStats from './QuickStats';
import FilterBar from './FilterBar';

export default function ClientHeader() {
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <QuickStats />
        <div className='flex items-center space-x-4'>
          <input
            type='text'
            placeholder='Cari klien...'
            className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <FilterBar />
        </div>
      </div>
    </div>
  );
}
