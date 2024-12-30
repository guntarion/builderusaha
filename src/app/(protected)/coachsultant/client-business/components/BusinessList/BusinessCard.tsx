// src/app/(protected)/coachsultant/client-business/components/BusinessList/BusinessCard.tsx
import { ClientBusiness } from '../../../../types/client-business';
import ProgressBar from '../Common/ProgressBar';
import MetricDisplay from '../Common/MetricDisplay';
import PhaseIndicator from '../Common/PhaseIndicator';

interface BusinessCardProps {
  business: ClientBusiness;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  const getPhaseCompletion = () => {
    switch (business.phase) {
      case 'ideation':
        return {
          progress: business.ideationPhase?.problemValidation || 0,
          keyMetrics: [
            { label: 'Market Research', value: business.ideationPhase?.marketResearch.marketSize },
            { label: 'Value Prop', value: business.ideationPhase?.valueProposition.clarity },
          ],
        };
      // TODO: Add cases for other phases
      default:
        return {
          progress: 0,
          keyMetrics: [],
        };
    }
  };

  return (
    <div className='bg-white rounded-lg shadow p-4'>
      <div className='flex justify-between items-start'>
        <div>
          <h3 className='font-semibold'>{business.businessName}</h3>
          <p className='text-sm text-gray-600'>Phase: {business.phase}</p>
        </div>
        <PhaseIndicator phase={business.phase} />
      </div>

      <div className='mt-4'>
        <ProgressBar value={getPhaseCompletion().progress} label='Phase Progress' />

        <div className='mt-4 grid grid-cols-2 gap-4'>
          {getPhaseCompletion().keyMetrics.map((metric) => (
            <MetricDisplay key={metric.label} label={metric.label} value={metric.value} />
          ))}
        </div>
      </div>
    </div>
  );
}
