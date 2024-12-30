import { useState } from 'react';
import { Button } from '../../../../../components/ui/Button';
import { Settings } from 'lucide-react';

interface DashboardConfigProps {
  onSave: (config: { showKPI: boolean; showMilestones: boolean; showRisks: boolean; showGrowth: boolean }) => void;
}

type ConfigKey = keyof {
  showKPI: boolean;
  showMilestones: boolean;
  showRisks: boolean;
  showGrowth: boolean;
};

export function DashboardConfig({ onSave }: DashboardConfigProps) {
  const [config, setConfig] = useState({
    showKPI: true,
    showMilestones: true,
    showRisks: true,
    showGrowth: true,
  });

  const handleChange = (key: ConfigKey) => {
    setConfig((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow'>
      <h2 className='text-xl font-semibold mb-4 flex items-center gap-2'>
        <Settings className='w-5 h-5' />
        Dashboard Configuration
      </h2>

      <div className='space-y-4'>
        <div className='flex items-center space-x-2'>
          <input
            type='checkbox'
            id='showKPI'
            checked={config.showKPI}
            onChange={() => handleChange('showKPI')}
            className='w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
          />
          <label htmlFor='showKPI' className='text-sm font-medium text-gray-700'>
            Show KPI Metrics
          </label>
        </div>

        <div className='flex items-center space-x-2'>
          <input
            type='checkbox'
            id='showMilestones'
            checked={config.showMilestones}
            onChange={() => handleChange('showMilestones')}
            className='w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
          />
          <label htmlFor='showMilestones' className='text-sm font-medium text-gray-700'>
            Show Milestones
          </label>
        </div>

        <div className='flex items-center space-x-2'>
          <input
            type='checkbox'
            id='showRisks'
            checked={config.showRisks}
            onChange={() => handleChange('showRisks')}
            className='w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
          />
          <label htmlFor='showRisks' className='text-sm font-medium text-gray-700'>
            Show Risk Assessment
          </label>
        </div>

        <div className='flex items-center space-x-2'>
          <input
            type='checkbox'
            id='showGrowth'
            checked={config.showGrowth}
            onChange={() => handleChange('showGrowth')}
            className='w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
          />
          <label htmlFor='showGrowth' className='text-sm font-medium text-gray-700'>
            Show Growth Analytics
          </label>
        </div>

        <Button className='mt-4' onClick={() => onSave(config)}>
          Save Configuration
        </Button>
      </div>
    </div>
  );
}
