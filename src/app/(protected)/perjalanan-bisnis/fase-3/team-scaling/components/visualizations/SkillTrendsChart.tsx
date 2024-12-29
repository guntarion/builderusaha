// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/components/visualizations/SkillTrendsChart.tsx

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Skill } from '../../lib/TeamScalingTypes';

interface SkillTrendsChartProps {
  currentSkills: Skill[];
  requiredSkills: Skill[];
  projectedMonths: number;
}

export default function SkillTrendsChart({ currentSkills, requiredSkills, projectedMonths = 6 }: SkillTrendsChartProps) {
  // Generate monthly projections
  const generateProjections = () => {
    const months = Array.from({ length: projectedMonths + 1 }, (_, i) => i);
    const data = months.map((month) => {
      const projection = {
        month: `Month ${month}`,
        current: 0,
        required: 0,
        projected: 0,
      };

      // Calculate totals
      currentSkills.forEach((skill) => {
        projection.current += skill.currentTeamCount;
      });

      requiredSkills.forEach((skill) => {
        projection.required += skill.requiredCount;
      });

      // Simple linear projection
      const gap = projection.required - projection.current;
      projection.projected = projection.current + (gap / projectedMonths) * month;

      return projection;
    });

    return data;
  };

  const data = generateProjections();

  return (
    <div className='h-80 w-full'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='current' stroke='#3B82F6' name='Current Skills' />
          <Line type='monotone' dataKey='required' stroke='#EF4444' name='Required Skills' />
          <Line type='monotone' dataKey='projected' stroke='#22C55E' strokeDasharray='5 5' name='Projected Growth' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
