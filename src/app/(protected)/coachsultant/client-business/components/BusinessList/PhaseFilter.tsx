// src/app/(protected)/coachsultant/client-business/components/BusinessList/PhaseFilter.tsx
export default function PhaseFilter() {
  return (
    <select className='p-2 border rounded-lg'>
      <option value='all'>Semua Fase</option>
      <option value='ideation'>Ideation</option>
      <option value='planning'>Planning</option>
      <option value='growth'>Growth</option>
      <option value='maturity'>Maturity</option>
    </select>
  );
}
