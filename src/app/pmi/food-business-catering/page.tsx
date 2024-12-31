// src/app/pmi/food-business-catering/page.tsx
import Link from 'next/link';

export default function FoodBusinessCateringPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8'>Food Business + Catering Business Template</h1>

      {/* Customer Understanding Section */}
      <section className='mb-12'>
        <h2 className='text-2xl font-bold mb-6'>1. Customer Understanding (JTBD)</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Functional Jobs</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Mendapatkan makanan Indonesia</li>
              <li>Menyimpan makanan untuk waktu lama</li>
              <li>Menyediakan makanan untuk acara</li>
              <li>Menghemat waktu memasak</li>
              <li>Mendapat nutrisi familiar</li>
            </ul>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Emotional Jobs</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Merasa dekat dengan kampung halaman</li>
              <li>Nyaman dengan rasa familiar</li>
              <li>Bangga berbagi makanan Indonesia</li>
              <li>Nostalgia rasa rumah</li>
              <li>Mengurangi homesick</li>
            </ul>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Social Jobs</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Menjadi sumber makanan Indonesia</li>
              <li>Berkontribusi di acara komunitas</li>
              <li>Berbagi budaya lewat makanan</li>
              <li>Menjalin komunitas lewat makanan</li>
              <li>Membanggakan kuliner Indonesia</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lean Canvas Section */}
      <section className='mb-12'>
        <h2 className='text-2xl font-bold mb-6'>2. Lean Canvas Detail</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[
            {
              title: 'Problem',
              content: [
                'Makanan Indonesia:',
                '- Sulit dapat bahan',
                '- Tidak ada waktu masak',
                '- Rasa tidak otentik',
                '- Harga mahal',
                'Penyimpanan:',
                '- Shelf life pendek',
                '- Storage terbatas',
                '- Kualitas menurun',
                '- Packaging tidak tepat',
                'Catering:',
                '- Sulit dapat catering Indonesia',
                '- Porsi tidak sesuai',
                '- Harga tidak terjangkau',
                '- Menu terbatas',
              ],
            },
            {
              title: 'Solution',
              content: [
                'Frozen Food Line:',
                '- Ready-to-eat meals',
                '- Bumbu instant',
                '- Frozen ingredients',
                '- Snack packages',
                'Storage System:',
                '- Vacuum packaging',
                '- Portion control',
                '- Storage guide',
                '- Reheating instruction',
                'Catering Service:',
                '- Event packages',
                '- Customizable menu',
                '- Flexible portions',
                '- Delivery service',
              ],
            },
            {
              title: 'Unique Value Proposition',
              content: ['"Rasa Indonesia Autentik, Siap Saji, Tahan Lama"', 'Fokus: Keaslian, Kemudahan, Kualitas'],
            },
            {
              title: 'Unfair Advantage',
              content: ['Resep autentik', 'Teknik preservasi', 'Network supplier', 'Pemahaman selera PMI'],
            },
            {
              title: 'Customer Segments',
              content: [
                'Primary:',
                '- PMI individual',
                '- Komunitas Indonesia',
                '- Event organizer',
                '- Asian restaurants',
                'Secondary:',
                '- Local customers',
                '- International students',
                '- Corporate clients',
                '- Food enthusiasts',
              ],
            },
            {
              title: 'Key Metrics',
              content: [
                'Sales volume',
                'Customer retention',
                'Food quality rating',
                'Delivery success',
                'Event satisfaction',
                'Storage life achievement',
              ],
            },
            {
              title: 'Cost Structure',
              content: [
                'Production Costs:',
                '- Bahan baku',
                '- Packaging materials',
                '- Equipment',
                '- Kitchen rental',
                '- Staff salary',
                'Operational Costs:',
                '- Storage facility',
                '- Delivery service',
                '- Marketing',
                '- Utilities',
                '- Insurance',
              ],
            },
            {
              title: 'Revenue Streams',
              content: [
                'Product Sales:',
                '- Frozen meals',
                '- Ready-to-cook packs',
                '- Sauce/seasoning',
                '- Snack boxes',
                'Services:',
                '- Catering packages',
                '- Cooking classes',
                '- Special orders',
                '- Delivery fees',
              ],
            },
          ].map((section, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-4'>{section.title}</h3>
              <ul className='list-disc pl-5 space-y-2'>
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Guide Section */}
      <section>
        <h2 className='text-2xl font-bold mb-6'>3. Implementation Guide</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Product Development</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>
                Menu Planning:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Regional favorites</li>
                  <li>Best sellers</li>
                  <li>Seasonal menu</li>
                  <li>Special requests</li>
                </ul>
              </li>
              <li>
                Production Process:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Recipe standardization</li>
                  <li>Quality control</li>
                  <li>Portion control</li>
                  <li>Packaging method</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Operational Setup</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>
                Kitchen Requirements:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Equipment list</li>
                  <li>Storage solutions</li>
                  <li>Safety standards</li>
                  <li>Workflow design</li>
                </ul>
              </li>
              <li>
                Storage System:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Freezer capacity</li>
                  <li>Temperature control</li>
                  <li>Inventory management</li>
                  <li>Stock rotation</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className='mt-12'>
        <Link href='/template-usaha/' className='text-blue-600 hover:text-blue-800'>
          &larr; Back to PMI Business Templates
        </Link>
      </div>
    </div>
  );
}
