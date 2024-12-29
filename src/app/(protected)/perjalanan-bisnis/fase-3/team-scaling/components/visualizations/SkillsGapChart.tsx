// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/components/visualizations/SkillsGapChart.tsx

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarProps } from 'recharts';
import { Skill } from '../../lib/TeamScalingTypes';

interface SkillsGapChartProps {
  currentSkills: Skill[];
  requiredSkills: Skill[];
}

export default function SkillsGapChart({ currentSkills, requiredSkills }: SkillsGapChartProps) {
  const data = requiredSkills
    .map((skill) => {
      const current = currentSkills.find((s) => s.id === skill.id);
      const gap = skill.requiredCount - (current?.currentTeamCount || 0);
      return {
        name: skill.name,
        gap: gap,
        priority: skill.priority,
        fill: skill.priority === 'critical' ? '#EF4444' : skill.priority === 'high' ? '#F97316' : skill.priority === 'medium' ? '#FBBF24' : '#22C55E',
      };
    })
    .sort((a, b) => b.gap - a.gap);

  return (
    <div className='h-80 w-full'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={data} layout='vertical'>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis type='number' />
          <YAxis dataKey='name' type='category' width={150} />
          <Tooltip
            content={({ payload, label }) => {
              if (!payload?.length) return null;
              return (
                <div className='bg-white p-2 border rounded shadow-lg'>
                  <p className='font-medium'>{label}</p>
                  <p className='text-sm text-gray-600'>Gap: {payload[0].value}</p>
                  <p className='text-sm text-gray-600'>Priority: {payload[0].payload.priority}</p>
                </div>
              );
            }}
          />
          <Bar
            dataKey='gap'
            fill='#8884d8' // This will be overridden by the fill property in the data
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
