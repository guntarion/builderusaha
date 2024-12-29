// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/components/DepartmentCard.tsx

import { Department, TeamMember } from '../lib/TeamScalingTypes';

interface DepartmentCardProps {
  department: Department;
  teamMembers: TeamMember[];
  onDelete: () => void;
}

export default function DepartmentCard({ department, teamMembers, onDelete }: DepartmentCardProps) {
  return (
    <div className='border rounded-lg p-4 hover:shadow-sm transition-shadow'>
      <div className='flex justify-between items-start'>
        <div>
          <h4 className='font-medium'>{department.name}</h4>
          <p className='text-sm text-gray-600 mt-1'>{department.description}</p>
        </div>
        <button onClick={onDelete} className='text-red-600 hover:text-red-700'>
          ×
        </button>
      </div>

      <div className='mt-4'>
        <div className='flex items-center gap-4 text-sm text-gray-600'>
          <span>Anggota: {teamMembers.length}</span>
          <span>Target: {department.headCount}</span>
        </div>
      </div>

      {teamMembers.length > 0 && (
        <div className='mt-3'>
          <div className='flex -space-x-2 overflow-hidden'>
            {teamMembers.slice(0, 5).map((member) => (
              <div key={member.id} className='inline-block h-8 w-8 rounded-full bg-gray-200 border-2 border-white' title={member.name}>
                <span className='sr-only'>{member.name}</span>
                <span className='text-xs font-medium text-gray-600 flex items-center justify-center h-full'>{member.name.charAt(0)}</span>
              </div>
            ))}
            {teamMembers.length > 5 && (
              <div className='inline-block h-8 w-8 rounded-full bg-gray-200 border-2 border-white'>
                <span className='text-xs font-medium text-gray-600 flex items-center justify-center h-full'>+{teamMembers.length - 5}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
