// src/app/(protected)/penilaian-wirausaha/ujian-hidup/components/LikertScale.tsx
interface LikertScaleProps {
  statement: string;
  value?: number;
  onChange: (value: number) => void;
}

export function LikertScale({ statement, value, onChange }: LikertScaleProps) {
  return (
    <div className='likert-scale'>
      <p className='statement mb-3'>{statement}</p>
      <div className='scale-options flex justify-between gap-2'>
        {[1, 2, 3, 4, 5].map((score) => (
          <button key={score} className={`scale-option ${value === score ? 'selected' : ''}`} onClick={() => onChange(score)}>
            {score}
            <span className='scale-label'>
              {score === 1 ? 'Sangat Tidak Setuju' : score === 2 ? 'Tidak Setuju' : score === 3 ? 'Netral' : score === 4 ? 'Setuju' : 'Sangat Setuju'}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
