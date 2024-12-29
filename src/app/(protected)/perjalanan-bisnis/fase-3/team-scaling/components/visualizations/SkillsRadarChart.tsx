// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/components/visualizations/SkillsRadarChart.tsx

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend, Tooltip } from 'recharts';
import { Skill } from '../../lib/TeamScalingTypes';

interface SkillsRadarChartProps {
  currentSkills: Skill[];
  requiredSkills: Skill[];
}

export default function SkillsRadarChart({ currentSkills, requiredSkills }: SkillsRadarChartProps) {
  const data = requiredSkills.map((skill) => {
    const current = currentSkills.find((s) => s.id === skill.id);
    return {
      skill: skill.name,
      required: skill.requiredCount,
      current: current?.currentTeamCount || 0,
    };
  });

  return (
    <div className='h-80 w-full'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart outerRadius={90} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey='skill' />
          <Radar name='Current' dataKey='current' stroke='#3B82F6' fill='#3B82F6' fillOpacity={0.3} />
          <Radar name='Required' dataKey='required' stroke='#EF4444' fill='#EF4444' fillOpacity={0.3} />
          <Tooltip />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
