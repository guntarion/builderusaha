// src/app/(protected)/coachsultant/client-business/components/BusinessList/SearchSort.tsx
export default function SearchSort() {
  return (
    <div className='flex gap-2'>
      <input type='text' placeholder='Cari bisnis...' className='p-2 border rounded-lg' />
      <select className='p-2 border rounded-lg'>
        <option value='name-asc'>Nama (A-Z)</option>
        <option value='name-desc'>Nama (Z-A)</option>
        <option value='phase'>Fase</option>
        <option value='progress'>Progress</option>
      </select>
    </div>
  );
}
