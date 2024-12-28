// src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/components/RiskSection.tsx

import { useState } from 'react';
import { Risk, RiskLevel } from '../lib/MVPTypes';
import { calculateRiskSeverity } from '../lib/mvpValidation';
import RiskForm from './RiskForm';

interface RiskSectionProps {
  risks: Risk[];
  onChange: (risks: Risk[]) => void;
}

export default function RiskSection({ risks, onChange }: RiskSectionProps) {
  const [showForm, setShowForm] = useState(false);
  const [editingRisk, setEditingRisk] = useState<Risk | null>(null);

  // Group risks by severity
  const groupedRisks = risks.reduce((acc, risk) => {
    const severity = calculateRiskSeverity(risk);
    if (!acc[severity]) {
      acc[severity] = [];
    }
    acc[severity].push(risk);
    return acc;
  }, {} as Record<'critical' | 'high' | 'medium' | 'low', Risk[]>);

  const handleRiskAdd = (risk: Risk) => {
    onChange([...risks, { ...risk, id: Date.now().toString() }]);
    setShowForm(false);
  };

  const handleRiskEdit = (risk: Risk) => {
    onChange(risks.map((r) => (r.id === risk.id ? risk : r)));
    setEditingRisk(null);
  };

  const handleRiskDelete = (riskId: string) => {
    onChange(risks.filter((r) => r.id !== riskId));
  };

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-start'>
        <div>
          <h2 className='text-xl font-semibold'>Risk Assessment</h2>
          <p className='text-gray-600'>Identifikasi dan kelola risiko dalam pengembangan MVP Anda</p>
        </div>
        <button onClick={() => setShowForm(true)} className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
          <span className='flex items-center gap-2'>
            <span>➕</span>
            Tambah Risiko
          </span>
        </button>
      </div>

      {/* Risk Summary */}
      <div className='grid grid-cols-4 gap-4'>
        {[
          { severity: 'critical', label: 'Kritis', color: 'red' },
          { severity: 'high', label: 'Tinggi', color: 'orange' },
          { severity: 'medium', label: 'Sedang', color: 'yellow' },
          { severity: 'low', label: 'Rendah', color: 'green' },
        ].map(({ severity, label, color }) => (
          <div key={severity} className={`p-4 rounded-lg border bg-${color}-50 border-${color}-200`}>
            <h3 className={`text-${color}-700 font-medium`}>{label}</h3>
            <p className='text-2xl font-bold mt-1'>{groupedRisks[severity as keyof typeof groupedRisks]?.length || 0}</p>
          </div>
        ))}
      </div>

      {/* Risk List */}
      <div className='space-y-4'>
        {risks.length === 0 ? (
          <div className='text-center py-8 text-gray-500'>Belum ada risiko yang diidentifikasi</div>
        ) : (
          risks.map((risk) => {
            const severity = calculateRiskSeverity(risk);
            const severityColors = {
              critical: 'red',
              high: 'orange',
              medium: 'yellow',
              low: 'green',
            };

            return (
              <div key={risk.id} className='border rounded-lg p-4 hover:shadow-sm transition-shadow'>
                <div className='flex justify-between items-start'>
                  <div>
                    <h3 className='font-medium'>{risk.description}</h3>
                    <div className='flex items-center gap-4 mt-2'>
                      <span
                        className={`
                        px-2 py-1 rounded-full text-sm font-medium
                        bg-${severityColors[severity]}-100 
                        text-${severityColors[severity]}-700
                      `}
                      >
                        {severity.charAt(0).toUpperCase() + severity.slice(1)}
                      </span>
                      <span className='text-sm text-gray-600'>Impact: {risk.impact.toUpperCase()}</span>
                      <span className='text-sm text-gray-600'>Probability: {risk.probability.toUpperCase()}</span>
                    </div>
                  </div>
                  <div className='flex gap-2'>
                    <button onClick={() => setEditingRisk(risk)} className='text-blue-600 hover:text-blue-700'>
                      Edit
                    </button>
                    <button onClick={() => handleRiskDelete(risk.id)} className='text-red-600 hover:text-red-700'>
                      Hapus
                    </button>
                  </div>
                </div>

                <div className='mt-4 space-y-2'>
                  <div>
                    <h4 className='text-sm font-medium text-gray-700'>Strategi Mitigasi:</h4>
                    <p className='text-gray-600 mt-1'>{risk.mitigationStrategy}</p>
                  </div>
                  <div>
                    <h4 className='text-sm font-medium text-gray-700'>Rencana Kontingensi:</h4>
                    <p className='text-gray-600 mt-1'>{risk.contingencyPlan}</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Risk Form Modal */}
      {(showForm || editingRisk) && (
        <RiskForm
          risk={editingRisk}
          onSubmit={editingRisk ? handleRiskEdit : handleRiskAdd}
          onCancel={() => {
            setShowForm(false);
            setEditingRisk(null);
          }}
        />
      )}

      {/* Tips Section */}
      <div className='mt-8 p-4 bg-blue-50 rounded-lg'>
        <h3 className='text-blue-800 font-medium'>💡 Tips Risk Assessment</h3>
        <ul className='mt-2 space-y-2 text-blue-700'>
          <li>• Identifikasi risiko teknis dan non-teknis</li>
          <li>• Fokus pada risiko yang berpotensi menghambat MVP</li>
          <li>• Buat rencana mitigasi yang konkret dan terukur</li>
          <li>• Review dan update risk assessment secara berkala</li>
        </ul>
      </div>
    </div>
  );
}
