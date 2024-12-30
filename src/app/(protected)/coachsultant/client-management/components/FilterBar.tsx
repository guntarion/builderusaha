export default function FilterBar() {
  const filters = [
    { label: 'Status', options: ['Aktif', 'Pending', 'Selesai', 'Paused'] },
    { label: 'Industri', options: ['Teknologi', 'Retail', 'Manufaktur', 'Layanan'] },
    { label: 'Program', options: ['Basic', 'Premium', 'Enterprise'] },
  ];

  return (
    <div className='flex space-x-4'>
      {filters.map((filter) => (
        <select key={filter.label} className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'>
          <option value=''>{filter.label}</option>
          {filter.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
}
