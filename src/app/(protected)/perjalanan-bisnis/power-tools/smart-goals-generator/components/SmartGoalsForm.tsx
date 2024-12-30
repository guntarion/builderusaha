// src/app/(protected)/perjalanan-bisnis/power-tools/smart-goals-generator/components/SmartGoalsForm.tsx

'use client';

import { useState } from 'react';
import { DatePicker } from '@/components/ui/DatePicker';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { useSmartGoals } from '../hooks/useSmartGoals';
import type { GoalCategory, Industry, Resource, SmartGoalFormData } from '../types';

const goalCategories: GoalCategory[] = [
  'Business Growth',
  'Financial',
  'Operations',
  'Marketing',
  'Team Development',
  'Personal Development',
  'Customer Service',
  'Product Development',
];

const industries: Industry[] = [
  'Technology',
  'Retail',
  'Manufacturing',
  'Healthcare',
  'Financial Services',
  'Education',
  'Real Estate',
  'Construction',
  'Transportation',
  'Entertainment',
  'Food & Beverage',
  'Agriculture',
  'Energy',
  'Tourism',
  'Professional Services',
];

const resources: Resource[] = ['Budget', 'Team size', 'Tools', 'Time commitment'];

export function SmartGoalsForm() {
  const [formData, setFormData] = useState<SmartGoalFormData>({
    goalStatement: '',
    category: 'Business Growth',
    timeline: {
      startDate: new Date(),
      endDate: new Date(),
    },
    industry: undefined,
    currentMetrics: undefined,
    resources: undefined,
    constraints: undefined,
  });

  const { generateSmartGoal, isLoading, error, data } = useSmartGoals();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await generateSmartGoal(formData);
  };

  return (
    <div className='w-full max-w-4xl mx-auto p-6'>
      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Goal Statement */}
        <div className='space-y-2'>
          <label htmlFor='goalStatement' className='block text-sm font-medium text-gray-700'>
            Goal Statement
          </label>
          <input
            type='text'
            id='goalStatement'
            maxLength={100}
            required
            value={formData.goalStatement}
            onChange={(e) => setFormData({ ...formData, goalStatement: e.target.value })}
            className='w-full p-2 border rounded-md'
            placeholder='e.g., Increase sales'
          />
        </div>

        {/* Category */}
        <div className='space-y-2'>
          <label className='block text-sm font-medium text-gray-700'>Goal Category</label>
          <Select value={formData.category} onValueChange={(value: GoalCategory) => setFormData({ ...formData, category: value })}>
            <SelectTrigger>
              <SelectValue placeholder='Select a category' />
            </SelectTrigger>
            <SelectContent>
              {goalCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Timeline */}
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-gray-700'>Start Date</label>
            <DatePicker
              date={formData.timeline.startDate}
              onChange={(date) =>
                setFormData({
                  ...formData,
                  timeline: { ...formData.timeline, startDate: date },
                })
              }
            />
          </div>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-gray-700'>End Date</label>
            <DatePicker
              date={formData.timeline.endDate}
              onChange={(date) =>
                setFormData({
                  ...formData,
                  timeline: { ...formData.timeline, endDate: date },
                })
              }
            />
          </div>
        </div>

        {/* Industry */}
        <div className='space-y-2'>
          <label className='block text-sm font-medium text-gray-700'>Industry (Optional)</label>
          <Select value={formData.industry} onValueChange={(value: Industry) => setFormData({ ...formData, industry: value })}>
            <SelectTrigger>
              <SelectValue placeholder='Select an industry' />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Current Metrics */}
        <div className='space-y-2'>
          <label htmlFor='currentMetrics' className='block text-sm font-medium text-gray-700'>
            Current Metrics (Optional)
          </label>
          <input
            type='text'
            id='currentMetrics'
            value={formData.currentMetrics || ''}
            onChange={(e) => setFormData({ ...formData, currentMetrics: e.target.value })}
            className='w-full p-2 border rounded-md'
            placeholder='e.g., $100,000 monthly recurring revenue'
          />
        </div>

        {/* Resources */}
        <div className='space-y-2'>
          <label className='block text-sm font-medium text-gray-700'>Resources Available (Optional)</label>
          <div className='grid grid-cols-2 gap-2'>
            {resources.map((resource) => (
              <label key={resource} className='flex items-center space-x-2 text-sm'>
                <input
                  type='checkbox'
                  checked={formData.resources?.includes(resource) || false}
                  onChange={(e) => {
                    const newResources = e.target.checked
                      ? [...(formData.resources || []), resource]
                      : formData.resources?.filter((r) => r !== resource) || [];
                    setFormData({ ...formData, resources: newResources });
                  }}
                  className='rounded border-gray-300'
                />
                <span>{resource}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Constraints */}
        <div className='space-y-2'>
          <label htmlFor='constraints' className='block text-sm font-medium text-gray-700'>
            Constraints (Optional)
          </label>
          <textarea
            id='constraints'
            value={formData.constraints || ''}
            onChange={(e) => setFormData({ ...formData, constraints: e.target.value })}
            className='w-full p-2 border rounded-md'
            placeholder='e.g., Limited market presence in Europe'
            rows={3}
          />
        </div>

        <button
          type='submit'
          disabled={isLoading}
          className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50'
        >
          {isLoading ? 'Generating...' : 'Generate SMART Goal'}
        </button>
      </form>

      {error && <div className='mt-4 p-4 bg-red-50 text-red-700 rounded-md'>{error}</div>}

      {data && (
        <div className='mt-8 p-6 bg-white rounded-lg shadow'>
          <h2 className='text-2xl font-bold mb-4'>Generated SMART Goal</h2>

          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Specific</h3>
              <p className='text-gray-700'>{data.smart_goal.specific.refined_statement}</p>
              <ul className='mt-2 list-disc list-inside'>
                {data.smart_goal.specific.clarifying_details.map((detail, i) => (
                  <li key={i} className='text-gray-600'>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Measurable</h3>
              <div className='space-y-2'>
                <div>
                  <p className='font-medium'>Primary Metrics:</p>
                  <ul className='list-disc list-inside'>
                    {data.smart_goal.measurable.primary_metrics.map((metric, i) => (
                      <li key={i} className='text-gray-600'>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className='font-medium'>Secondary Metrics:</p>
                  <ul className='list-disc list-inside'>
                    {data.smart_goal.measurable.secondary_metrics.map((metric, i) => (
                      <li key={i} className='text-gray-600'>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Achievable</h3>
              <div className='space-y-2'>
                <div>
                  <p className='font-medium'>Target Breakdown:</p>
                  <ul className='list-disc list-inside'>
                    {data.smart_goal.achievable.target_breakdown.map((target, i) => (
                      <li key={i} className='text-gray-600'>
                        {target}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className='font-medium'>Required Resources:</p>
                  <ul className='list-disc list-inside'>
                    {data.smart_goal.achievable.required_resources.map((resource, i) => (
                      <li key={i} className='text-gray-600'>
                        {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Relevant</h3>
              <p className='text-gray-700'>{data.smart_goal.relevant.business_impact}</p>
              <div className='mt-2'>
                <p className='font-medium'>Stakeholder Benefits:</p>
                <ul className='list-disc list-inside'>
                  {data.smart_goal.relevant.stakeholder_benefits.map((benefit, i) => (
                    <li key={i} className='text-gray-600'>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Time-bound</h3>
              <p className='font-medium'>Final Deadline: {data.smart_goal.time_bound.final_deadline}</p>
              <div className='mt-2'>
                <p className='font-medium'>Milestones:</p>
                <ul className='space-y-2'>
                  {data.smart_goal.time_bound.milestones.map((milestone, i) => (
                    <li key={i} className='text-gray-600'>
                      <span className='font-medium'>{milestone.date}:</span> {milestone.description} ({milestone.target})
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Tracking Plan</h3>
              <p className='font-medium'>Frequency: {data.smart_goal.tracking_plan.frequency}</p>
              <div className='mt-2'>
                <p className='font-medium'>Methods:</p>
                <ul className='list-disc list-inside'>
                  {data.smart_goal.tracking_plan.methods.map((method, i) => (
                    <li key={i} className='text-gray-600'>
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
