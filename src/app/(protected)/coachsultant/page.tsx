import ClientOverview from './components/dashboard/ClientOverview';
import RecentActivities from './components/dashboard/RecentActivities';
import UpcomingSessions from './components/dashboard/UpcomingSessions';
import Alerts from './components/dashboard/Alerts';

export default function DashboardPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-bold text-gray-800'>Dashboard</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <ClientOverview />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2'>
          <RecentActivities />
        </div>
        <div className='space-y-6'>
          <UpcomingSessions />
          <Alerts />
        </div>
      </div>
    </div>
  );
}
