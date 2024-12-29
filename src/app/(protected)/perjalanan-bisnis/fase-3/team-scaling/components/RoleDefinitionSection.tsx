import { RoleDefinition } from '../lib/TeamScalingTypes';

interface RoleDefinitionSectionProps {
  roleDefinition: RoleDefinition;
  onChange: (roleDefinition: RoleDefinition) => void;
}

export default function RoleDefinitionSection({ roleDefinition, onChange }: RoleDefinitionSectionProps) {
  const handleChange = (field: keyof RoleDefinition, value: string | string[]) => {
    onChange({
      ...roleDefinition,
      [field]: value,
    });
  };

  return (
    <div className='space-y-4'>
      <div>
        <label className='block text-sm font-medium mb-1'>Judul Peran</label>
        <input
          type='text'
          value={roleDefinition.title}
          onChange={(e) => handleChange('title', e.target.value)}
          className='w-full px-3 py-2 border rounded-lg'
          placeholder='Contoh: Frontend Developer'
        />
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>Tanggung Jawab</label>
        <textarea
          value={roleDefinition.responsibilities.join('\n')}
          onChange={(e) => handleChange('responsibilities', e.target.value.split('\n'))}
          className='w-full px-3 py-2 border rounded-lg'
          placeholder='Masukkan tanggung jawab, satu per baris'
          rows={4}
        />
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>Skill yang Dibutuhkan</label>
        <textarea
          value={roleDefinition.requiredSkills.join('\n')}
          onChange={(e) => handleChange('requiredSkills', e.target.value.split('\n'))}
          className='w-full px-3 py-2 border rounded-lg'
          placeholder='Masukkan skill yang dibutuhkan, satu per baris'
          rows={4}
        />
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>Level Pengalaman</label>
        <select
          value={roleDefinition.experienceLevel}
          onChange={(e) => handleChange('experienceLevel', e.target.value)}
          className='w-full px-3 py-2 border rounded-lg'
        >
          <option value='Entry'>Entry Level</option>
          <option value='Mid'>Mid Level</option>
          <option value='Senior'>Senior Level</option>
        </select>
      </div>
    </div>
  );
}
