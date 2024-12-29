// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/components/SkillsAssessmentStep.tsx

import { useState } from 'react';
import { Skill, TeamMember, PriorityLevel } from '../lib/TeamScalingTypes';
import { calculateSkillGaps } from '../lib/teamScalingValidation';
import SkillsRadarChart from './visualizations/SkillsRadarChart';
import SkillsGapChart from './visualizations/SkillsGapChart';
import SkillCategoryDistribution from './visualizations/SkillCategoryDistribution';
import AddSkillForm from './AddSkillForm';
import SkillTrendsChart from './visualizations/SkillTrendsChart';

interface SkillsAssessmentStepProps {
  currentSkills: Skill[];
  requiredSkills: Skill[];
  teamMembers: TeamMember[];
  onChange: (current: Skill[], required: Skill[]) => void;
  onNext: () => void;
  onBack: () => void;
}

// Add to SkillsAssessmentStep.tsx - new helper components

const SkillGapCard = ({ priority, count }: { priority: PriorityLevel; count: number }) => (
  <div className={`stat-card stat-card-${priority}`}>
    <div className='flex items-center justify-between'>
      <div>
        <p className='text-sm font-medium text-gray-600'>{priority.charAt(0).toUpperCase() + priority.slice(1)} Gaps</p>
        <p className='mt-1 text-3xl font-bold'>{count}</p>
      </div>
      <div className={`text-2xl ${priority === 'critical' ? 'text-red-500' : priority === 'high' ? 'text-orange-500' : 'text-yellow-500'}`}>
        {priority === 'critical' ? '🔥' : priority === 'high' ? '⚠️' : '📊'}
      </div>
    </div>
    <div className='mt-1'>
      <div className='w-full bg-gray-200 rounded-full h-1.5'>
        <div
          className={`h-1.5 rounded-full ${priority === 'critical' ? 'bg-red-500' : priority === 'high' ? 'bg-orange-500' : 'bg-yellow-500'}`}
          style={{ width: `${Math.min((count / 10) * 100, 100)}%` }}
        />
      </div>
    </div>
  </div>
);

const CategoryPill = ({ category, isSelected, onClick }: { category: string; isSelected: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`
      px-4 py-2 rounded-full text-sm font-medium transition-all
      ${isSelected ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-600 ring-offset-2' : 'text-gray-600 hover:bg-gray-100'}
    `}
  >
    {category}
  </button>
);

// Add tooltips to the gap indicators
const GapIndicator = ({ gap }: { gap: number }) => (
  <div className='relative group'>
    <span
      className={`
      gap-indicator
      ${gap > 5 ? 'gap-indicator-critical' : gap > 3 ? 'gap-indicator-high' : gap > 0 ? 'gap-indicator-medium' : 'gap-indicator-low'}
    `}
    >
      {gap > 0 ? `+${gap}` : 'Met'}
    </span>
    <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block'>
      <div className='bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap'>
        {gap > 0 ? `Need ${gap} more team members` : 'Requirement met'}
      </div>
    </div>
  </div>
);

export default function SkillsAssessmentStep({ currentSkills, requiredSkills, teamMembers, onChange, onNext, onBack }: SkillsAssessmentStepProps) {
  const [showAddSkillForm, setShowAddSkillForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const skillCategories = Array.from(new Set([...currentSkills, ...requiredSkills].map((skill) => skill.category)));

  const gaps = calculateSkillGaps(currentSkills, requiredSkills);

  const filteredSkills = selectedCategory === 'all' ? requiredSkills : requiredSkills.filter((skill) => skill.category === selectedCategory);

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-xl font-semibold mb-2'>Skills Assessment</h2>
        <p className='text-gray-600'>Analisis kebutuhan dan kesenjangan skills dalam tim Anda</p>
      </div>

      {/* Category Filter */}
      <div className='flex gap-2 overflow-x-auto pb-2'>
        <button
          onClick={() => setSelectedCategory('all')}
          className={`
            px-4 py-2 rounded-lg whitespace-nowrap
            ${selectedCategory === 'all' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}
          `}
        >
          All Categories
        </button>
        {skillCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`
              px-4 py-2 rounded-lg whitespace-nowrap
              ${selectedCategory === category ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Gap Overview */}
      <div className='grid grid-cols-3 gap-4'>
        {['critical', 'high', 'medium'].map((priority) => {
          const priorityGaps = gaps.filter((g) => g.priority === priority);
          return (
            <div
              key={priority}
              className={`
              p-4 rounded-lg border
              ${
                priority === 'critical'
                  ? 'bg-red-50 border-red-200'
                  : priority === 'high'
                  ? 'bg-orange-50 border-orange-200'
                  : 'bg-yellow-50 border-yellow-200'
              }
            `}
            >
              <h3 className='font-medium mb-1'>{priority.charAt(0).toUpperCase() + priority.slice(1)} Gaps</h3>
              <p className='text-2xl font-bold'>{priorityGaps.length}</p>
              <p className='text-sm text-gray-600 mt-1'>skills need attention</p>
            </div>
          );
        })}
      </div>

      {/* Skills Visualizations */}
      <div className='grid grid-cols-2 gap-6'>
        <div className='border rounded-lg p-4 bg-white'>
          <h3 className='text-lg font-medium mb-4'>Skills Gap Analysis</h3>
          <SkillsGapChart currentSkills={currentSkills} requiredSkills={requiredSkills} />
        </div>

        <div className='border rounded-lg p-4 bg-white'>
          <h3 className='text-lg font-medium mb-4'>Skills Coverage</h3>
          <SkillsRadarChart currentSkills={currentSkills} requiredSkills={requiredSkills} />
        </div>
      </div>

      <div className='border rounded-lg p-4 bg-white'>
        <h3 className='text-lg font-medium mb-4'>Skills Category Distribution</h3>
        <SkillCategoryDistribution skills={requiredSkills} />
      </div>

      <div className='border rounded-lg p-4 bg-white'>
        <h3 className='text-lg font-medium mb-4'>Skills Growth Projection</h3>
        <SkillTrendsChart currentSkills={currentSkills} requiredSkills={requiredSkills} projectedMonths={6} />
      </div>

      {/* Skills Matrix */}
      <div className='border rounded-lg overflow-hidden'>
        <table className='w-full'>
          <thead>
            <tr className='bg-gray-50'>
              <th className='px-4 py-3 text-left text-sm font-medium text-gray-700'>Skill</th>
              <th className='px-4 py-3 text-left text-sm font-medium text-gray-700'>Category</th>
              <th className='px-4 py-3 text-center text-sm font-medium text-gray-700'>Current</th>
              <th className='px-4 py-3 text-center text-sm font-medium text-gray-700'>Required</th>
              <th className='px-4 py-3 text-center text-sm font-medium text-gray-700'>Gap</th>
              <th className='px-4 py-3 text-left text-sm font-medium text-gray-700'>Priority</th>
              <th className='px-4 py-3 text-right text-sm font-medium text-gray-700'>Actions</th>
            </tr>
          </thead>
          <tbody className='divide-y'>
            {filteredSkills.map((skill) => {
              const gap = gaps.find((g) => g.skillId === skill.id);
              const current = currentSkills.find((s) => s.id === skill.id);

              return (
                <tr key={skill.id} className='hover:bg-gray-50'>
                  <td className='px-4 py-3'>
                    <div>
                      <div className='font-medium'>{skill.name}</div>
                      <div className='text-sm text-gray-600'>{skill.description}</div>
                    </div>
                  </td>
                  <td className='px-4 py-3 text-sm'>{skill.category}</td>
                  <td className='px-4 py-3 text-center'>{current?.currentTeamCount || 0}</td>
                  <td className='px-4 py-3 text-center'>{skill.requiredCount}</td>
                  <td className='px-4 py-3 text-center'>
                    <span
                      className={`
                      inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                      ${gap && gap.gap > 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}
                    `}
                    >
                      {gap ? (gap.gap > 0 ? `+${gap.gap}` : 'Met') : 'N/A'}
                    </span>
                  </td>
                  <td className='px-4 py-3'>
                    <span
                      className={`
                      inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                      ${
                        skill.priority === 'critical'
                          ? 'bg-red-100 text-red-800'
                          : skill.priority === 'high'
                          ? 'bg-orange-100 text-orange-800'
                          : skill.priority === 'medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }
                    `}
                    >
                      {skill.priority.charAt(0).toUpperCase() + skill.priority.slice(1)}
                    </span>
                  </td>
                  <td className='px-4 py-3 text-right'>
                    <button
                      onClick={() => {
                        // Handle edit
                      }}
                      className='text-blue-600 hover:text-blue-700 mr-2'
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        onChange(
                          currentSkills.filter((s) => s.id !== skill.id),
                          requiredSkills.filter((s) => s.id !== skill.id)
                        );
                      }}
                      className='text-red-600 hover:text-red-700'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Add Skills Button */}
      <div className='flex justify-end'>
        <button
          onClick={() => setShowAddSkillForm(true)}
          className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2'
        >
          <span>+</span>
          <span>Add Skill Requirement</span>
        </button>
      </div>

      {/* Navigation */}
      <div className='flex justify-between pt-6'>
        <button onClick={onBack} className='px-4 py-2 text-gray-600 hover:text-gray-800'>
          Back
        </button>
        <button onClick={onNext} className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
          Next
        </button>
      </div>

      {/* Add Skill Form Modal */}
      {showAddSkillForm && (
        <AddSkillForm
          onSubmit={(skill) => {
            onChange(currentSkills, [...requiredSkills, { ...skill, id: Date.now().toString() }]);
            setShowAddSkillForm(false);
          }}
          onCancel={() => setShowAddSkillForm(false)}
          categories={skillCategories}
        />
      )}
    </div>
  );
}
