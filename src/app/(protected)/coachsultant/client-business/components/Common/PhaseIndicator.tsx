// src/app/(protected)/coachsultant/client-business/components/Common/PhaseIndicator.tsx
interface PhaseIndicatorProps {
  phase: 'ideation' | 'planning' | 'growth' | 'maturity';
}

const phaseColors = {
  ideation: 'bg-blue-500',
  planning: 'bg-yellow-500',
  growth: 'bg-green-500',
  maturity: 'bg-purple-500',
};

export default function PhaseIndicator({ phase }: PhaseIndicatorProps) {
  return <div className={`w-3 h-3 rounded-full ${phaseColors[phase]}`} />;
}
