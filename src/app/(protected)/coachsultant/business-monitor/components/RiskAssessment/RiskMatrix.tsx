import { mockBusinessData } from '../../data/mockData';
import { BusinessMetrics } from '../../types';

export function RiskMatrix() {
  const risks = mockBusinessData[0].risks;

  return (
    <div className='space-y-4'>
      <div className='grid grid-cols-4 gap-4'>
        <div className='font-medium'>Category</div>
        <div className='font-medium'>Severity</div>
        <div className='font-medium'>Probability</div>
        <div className='font-medium'>Status</div>

        {risks.map((risk: BusinessMetrics['risks'][number]) => (
          <>
            <div>{risk.category}</div>
            <div className={`${risk.severity === 'high' ? 'text-red-500' : risk.severity === 'medium' ? 'text-yellow-500' : 'text-green-500'}`}>
              {risk.severity}
            </div>
            <div>{Math.round(risk.probability * 100)}%</div>
            <div>{risk.status}</div>
          </>
        ))}
      </div>
    </div>
  );
}
