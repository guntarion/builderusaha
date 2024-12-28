// src/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/components/CanvasSection.tsx

import { CanvasField } from '../lib/canvasTypes';

interface CanvasSectionProps {
  field: CanvasField;
  isActive: boolean;
  onSelect: () => void;
  onChange: (value: string) => void;
}

export default function CanvasSection({ field, isActive, onSelect, onChange }: CanvasSectionProps) {
  return (
    <div className={`canvas-section ${isActive ? 'active' : ''} ${field.isMandatory ? 'mandatory' : ''}`} onClick={onSelect}>
      <div className='section-header'>
        <h3>{field.title}</h3>
        {field.isMandatory && <span className='mandatory-badge'>Required</span>}
      </div>

      <textarea
        value={field.value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
        className='section-input'
        onClick={(e) => e.stopPropagation()}
      />

      {field.aiSuggestions && field.aiSuggestions.length > 0 && (
        <div className='ai-suggestions'>
          {field.aiSuggestions.map((suggestion, index) => (
            <div key={index} className='suggestion-chip'>
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
