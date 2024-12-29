// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/components/visualizations/SkillCategoryDistribution.tsx

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Skill } from '../../lib/TeamScalingTypes';

interface SkillCategoryDistributionProps {
  skills: Skill[];
}

export default function SkillCategoryDistribution({ skills }: SkillCategoryDistributionProps) {
  const categoryData = skills.reduce((acc, skill) => {
    const category = skill.category;
    const existing = acc.find((item) => item.name === category);
    if (existing) {
      existing.value++;
    } else {
      acc.push({ name: category, value: 1 });
    }
    return acc;
  }, [] as Array<{ name: string; value: number }>);

  const COLORS = ['#3B82F6', '#EF4444', '#22C55E', '#F97316', '#8B5CF6', '#EC4899'];

  return (
    <div className='h-80 w-full'>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Pie data={categoryData} dataKey='value' nameKey='name' cx='50%' cy='50%' outerRadius={80} label={(entry) => entry.name}>
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
