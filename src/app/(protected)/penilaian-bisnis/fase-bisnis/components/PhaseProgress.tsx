// src/app/(protected)/penilaian-bisnis/fase-bisnis/components/PhaseProgress.tsx
import { BusinessPhase } from '../data/types';

interface PhaseProgressProps {
  currentPhase: BusinessPhase;
  overallScore: number;
}

export default function PhaseProgress({ currentPhase, overallScore }: PhaseProgressProps) {
  const phases = [
    { id: 'PHASE_1_1', label: 'Seed', group: 1 },
    { id: 'PHASE_1_2', label: 'Validated', group: 1 },
    { id: 'PHASE_2_1', label: 'Startup', group: 2 },
    { id: 'PHASE_2_2', label: 'Survival', group: 2 },
    { id: 'PHASE_3_1', label: 'Established', group: 3 },
    { id: 'PHASE_3_2', label: 'Expansion', group: 3 },
    { id: 'PHASE_4_1', label: 'Rapid Growth', group: 4 },
    { id: 'PHASE_4_2', label: 'Mature', group: 4 },
  ];

  const currentPhaseIndex = phases.findIndex((phase) => phase.id === currentPhase);

  return (
    <div>
      {/* Phase Groups */}
      <div className='grid grid-cols-4 gap-4 mb-4 text-center text-sm font-medium'>
        <div className='text-blue-600'>
          Phase 1<br />
          Ideation
        </div>
        <div className='text-blue-600'>
          Phase 2<br />
          Launch
        </div>
        <div className='text-blue-600'>
          Phase 3<br />
          Growth
        </div>
        <div className='text-blue-600'>
          Phase 4<br />
          Maturity
        </div>
      </div>

      {/* Progress Bar */}
      <div className='relative'>
        <div className='h-2 bg-gray-200 rounded-full'>
          <div className='h-full bg-blue-600 rounded-full transition-all' style={{ width: `${(currentPhaseIndex + 1) * (100 / 8)}%` }} />
        </div>

        {/* Phase Markers */}
        <div className='grid grid-cols-8 absolute -top-1 left-0 right-0'>
          {phases.map((phase, index) => (
            <div key={phase.id} className={`flex flex-col items-center ${index <= currentPhaseIndex ? 'text-blue-600' : 'text-gray-400'}`}>
              <div
                className={`w-4 h-4 rounded-full border-2 ${index <= currentPhaseIndex ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'}`}
              />
              <span className='text-xs mt-2'>{phase.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Score Indicator */}
      <div className='mt-8 text-center'>
        <div className='inline-block bg-blue-50 rounded-full px-4 py-2'>
          <span className='text-blue-600 font-medium'>Overall Progress: {Math.round(overallScore)}%</span>
        </div>
      </div>
    </div>
  );
}
