// src/app/pmi/local-assistant-service/page.tsx
import Link from 'next/link';

export default function LocalAssistantServicePage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8'>Local Assistant Service Business Template</h1>

      {/* Customer Understanding Section */}
      <section className='mb-12'>
        <h2 className='text-2xl font-bold mb-6'>1. Customer Understanding (JTBD)</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Functional Jobs</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Bantuan adaptasi awal</li>
              <li>Pengurusan dokumen</li>
              <li>Komunikasi dengan pihak lokal</li>
              <li>Navigasi sistem setempat</li>
              <li>Penanganan masalah darurat</li>
            </ul>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Emotional Jobs</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Merasa aman di negara baru</li>
              <li>Percaya diri beraktivitas</li>
              <li>Tenang menghadapi masalah</li>
              <li>Tidak merasa sendiri</li>
              <li>Nyaman beradaptasi</li>
            </ul>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Social Jobs</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Diterima di lingkungan baru</li>
              <li>Mampu berinteraksi dengan locals</li>
              <li>Mandiri dalam keseharian</li>
              <li>Terintegrasi dengan komunitas</li>
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
                'Adaptasi Awal:',
                '- Culture shock',
                '- Sistem berbeda',
                '- Bahasa asing',
                '- Lingkungan baru',
                'Urusan Administratif:',
                '- Dokumen kompleks',
                '- Prosedur tidak familiar',
                '- Kendala bahasa',
                '- Deadline ketat',
                'Kendala Praktis:',
                '- Transportasi',
                '- Tempat tinggal',
                '- Kebutuhan medis',
                '- Banking/keuangan',
              ],
            },
            {
              title: 'Solution',
              content: [
                'Orientation Service:',
                '- City tour praktis',
                '- Local system guide',
                '- Cultural briefing',
                '- Basic language intro',
                'Admin Support:',
                '- Document handling',
                '- Translation assist',
                '- Appointment booking',
                '- Form filling',
                'Daily Assistance:',
                '- Transport guide',
                '- Shopping assist',
                '- Medical support',
                '- Emergency contact',
              ],
            },
            {
              title: 'Unique Value Proposition',
              content: ['"Pendamping Lokal Terpercaya untuk PMI"', 'Fokus: Keamanan, Kepercayaan, Kenyamanan'],
            },
            {
              title: 'Unfair Advantage',
              content: ['Pengalaman lokal', 'Network setempat', 'Bahasa lokal', 'Pemahaman kultur'],
            },
            {
              title: 'Customer Segments',
              content: ['Primary:', '- PMI baru tiba', '- PMI dengan kendala bahasa', '- PMI butuh bantuan khusus', '- Keluarga PMI berkunjung'],
            },
            {
              title: 'Key Metrics',
              content: [
                'Client satisfaction',
                'Service completion rate',
                'Response time',
                'Client retention',
                'Referral rate',
                'Emergency handling success',
              ],
            },
            {
              title: 'Channels',
              content: [
                'Direct Marketing:',
                '- Agency partnership',
                '- Community outreach',
                '- Social media presence',
                '- WhatsApp business',
                'Network:',
                '- PMI groups',
                '- Embassy contact',
                '- Local authorities',
                '- Medical facilities',
              ],
            },
            {
              title: 'Cost Structure',
              content: [
                'Fixed Costs:',
                '- Staff salary',
                '- Office/meeting point',
                '- Communication tools',
                '- Insurance coverage',
                'Variable Costs:',
                '- Transport',
                '- Translation fees',
                '- Admin supplies',
                '- Emergency fund',
              ],
            },
            {
              title: 'Revenue Streams',
              content: [
                'Core Services:',
                '- Basic package',
                '- Premium support',
                '- Emergency service',
                '- Special request',
                'Additional Services:',
                '- Document processing',
                '- Shopping service',
                '- Medical accompany',
                '- Airport pickup',
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
            <h3 className='text-xl font-semibold mb-4'>Service Categories</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>
                Welcome Package:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Airport pickup</li>
                  <li>Accommodation setup</li>
                  <li>Basic necessities</li>
                  <li>Local orientation</li>
                  <li>SIM card setup</li>
                </ul>
              </li>
              <li>
                Administrative Support:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Visa processing</li>
                  <li>Work permit</li>
                  <li>Bank account</li>
                  <li>Medical registration</li>
                  <li>Insurance setup</li>
                </ul>
              </li>
              <li>
                Daily Support:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Transport guidance</li>
                  <li>Shopping assistance</li>
                  <li>Translation help</li>
                  <li>Basic troubleshooting</li>
                </ul>
              </li>
              <li>
                Emergency Support:
                <ul className='list-disc pl-5 mt-2'>
                  <li>24/7 hotline</li>
                  <li>Medical emergency</li>
                  <li>Police matters</li>
                  <li>Lost documents</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Operational Setup</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>
                Team Structure:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Local coordinators</li>
                  <li>Language assistants</li>
                  <li>Admin staff</li>
                  <li>Emergency response</li>
                </ul>
              </li>
              <li>
                Support System:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Command center</li>
                  <li>Client database</li>
                  <li>Task tracking</li>
                  <li>Resource allocation</li>
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
