import { TeamStructure } from '../lib/TeamScalingTypes';

interface TeamStructureSectionProps {
  teamStructure: TeamStructure;
  onChange: (teamStructure: TeamStructure) => void;
}

export default function TeamStructureSection({ teamStructure, onChange }: TeamStructureSectionProps) {
  const handleDepartmentChange = (index: number, field: string, value: string | string[]) => {
    const updatedDepartments = [...teamStructure.departments];
    updatedDepartments[index] = {
      ...updatedDepartments[index],
      [field]: value,
    };
    onChange({ departments: updatedDepartments });
  };

  const addDepartment = () => {
    onChange({
      departments: [
        ...teamStructure.departments,
        {
          name: '',
          roles: [],
          reportingTo: '',
        },
      ],
    });
  };

  const removeDepartment = (index: number) => {
    const updatedDepartments = teamStructure.departments.filter((_, i) => i !== index);
    onChange({ departments: updatedDepartments });
  };

  return (
    <div className='space-y-4'>
      {teamStructure.departments.map((department, index) => (
        <div key={index} className='border p-4 rounded-lg'>
          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div>
              <label className='block text-sm font-medium mb-1'>Nama Departemen</label>
              <input
                type='text'
                value={department.name}
                onChange={(e) => handleDepartmentChange(index, 'name', e.target.value)}
                className='w-full px-3 py-2 border rounded-lg'
                placeholder='Contoh: Engineering'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Melapor Kepada</label>
              <input
                type='text'
                value={department.reportingTo}
                onChange={(e) => handleDepartmentChange(index, 'reportingTo', e.target.value)}
                className='w-full px-3 py-2 border rounded-lg'
                placeholder='Contoh: CTO'
              />
            </div>

            <div className='col-span-2'>
              <label className='block text-sm font-medium mb-1'>Peran dalam Departemen</label>
              <textarea
                value={department.roles.join('\n')}
                onChange={(e) => handleDepartmentChange(index, 'roles', e.target.value.split('\n'))}
                className='w-full px-3 py-2 border rounded-lg'
                placeholder='Masukkan peran, satu per baris'
                rows={3}
              />
            </div>
          </div>

          <button onClick={() => removeDepartment(index)} className='text-red-500 hover:text-red-700 text-sm'>
            Hapus Departemen
          </button>
        </div>
      ))}

      <button onClick={addDepartment} className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>
        Tambah Departemen
      </button>
    </div>
  );
}
