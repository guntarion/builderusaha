import { mockBusinessData } from '../../data/mockData';
import { BusinessMetrics } from '../../types';

export function MilestoneList() {
  const milestones: BusinessMetrics['milestones'] = mockBusinessData[0].milestones;

  return (
    <div className='space-y-4'>
      {milestones.map((milestone) => (
        <div key={milestone.id} className='p-4 border rounded-lg'>
          <div className='flex justify-between items-center'>
            <div>
              <h3 className='font-medium'>{milestone.title}</h3>
              <p className='text-sm text-gray-500'>Due: {milestone.dueDate.toLocaleDateString()}</p>
            </div>
            <div
              className={`text-sm font-medium ${
                milestone.status === 'completed'
                  ? 'text-green-600'
                  : milestone.status === 'ongoing'
                  ? 'text-blue-600'
                  : milestone.status === 'delayed'
                  ? 'text-red-600'
                  : 'text-gray-600'
              }`}
            >
              {milestone.status}
            </div>
          </div>
          <div className='mt-2'>
            <div className='w-full bg-gray-200 rounded-full h-2'>
              <div className='bg-blue-600 h-2 rounded-full' style={{ width: `${milestone.progress}%` }}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
