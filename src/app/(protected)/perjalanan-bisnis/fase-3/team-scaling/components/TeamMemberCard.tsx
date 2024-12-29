// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/components/TeamMemberCard.tsx

import { TeamMember } from '../lib/TeamScalingTypes';

interface TeamMemberCardProps {
  member: TeamMember;
  onDelete: () => void;
}

export default function TeamMemberCard({ member, onDelete }: TeamMemberCardProps) {
  const seniorityColors = {
    junior: 'bg-green-100 text-green-800',
    mid_level: 'bg-blue-100 text-blue-800',
    senior: 'bg-purple-100 text-purple-800',
    lead: 'bg-red-100 text-red-800',
  };

  return (
    <div className='border rounded-lg p-4 hover:shadow-sm transition-shadow'>
      <div className='flex justify-between items-start'>
        <div>
          <h4 className='font-medium'>{member.name}</h4>
          <p className='text-sm text-gray-600'>{member.role}</p>
        </div>
        <button onClick={onDelete} className='text-red-600 hover:text-red-700'>
          ×
        </button>
      </div>

      <div className='mt-3'>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${seniorityColors[member.seniorityLevel]}`}>
          {member.seniorityLevel.replace('_', ' ').charAt(0).toUpperCase() + member.seniorityLevel.slice(1).replace('_', ' ')}
        </span>
      </div>

      <div className='mt-3'>
        <p className='text-xs text-gray-500'>Department</p>
        <p className='text-sm'>{member.department}</p>
      </div>

      <div className='mt-3'>
        <p className='text-xs text-gray-500'>Joined</p>
        <p className='text-sm'>
          {new Date(member.startDate).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
          })}
        </p>
      </div>

      {member.skills.length > 0 && (
        <div className='mt-3'>
          <p className='text-xs text-gray-500 mb-1'>Skills</p>
          <div className='flex flex-wrap gap-1'>
            {member.skills.map((skill) => (
              <span key={skill} className='bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs'>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
