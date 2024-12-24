// src/app/(protected)/penilaian-wirausaha/kesesuaian-bisnis-pmi/components/LikertScale.tsx
import type { LikertScaleProps } from '../types';

export default function LikertScale({ statement, value, onChange }: LikertScaleProps) {
  const options = [
    { value: 1, label: 'Sangat Tidak Setuju' },
    { value: 2, label: 'Tidak Setuju' },
    { value: 3, label: 'Netral' },
    { value: 4, label: 'Setuju' },
    { value: 5, label: 'Sangat Setuju' },
  ];

  return (
    <div className='likert-scale'>
      <p className='likert-statement'>{statement}</p>
      <div className='scale-options'>
        {options.map((option) => (
          <button
            key={option.value}
            className={`scale-option ${value === option.value ? 'selected' : ''}`}
            onClick={() => onChange(option.value)}
            type='button'
          >
            {option.value}
            <span className='scale-label'>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
