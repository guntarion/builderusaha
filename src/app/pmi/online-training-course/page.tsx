// src/app/pmi/online-training-course/page.tsx
import Link from 'next/link';

export default function OnlineTrainingCoursePage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8'>Online Training/Course Business Template</h1>

      {/* Customer Understanding Section */}
      <section className='mb-12'>
        <h2 className='text-2xl font-bold mb-6'>1. Customer Understanding (JTBD)</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Functional Jobs</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Meningkatkan skill untuk karir</li>
              <li>Belajar bahasa baru/lokal</li>
              <li>Memahami teknologi/tools baru</li>
              <li>Mendapat sertifikasi</li>
              <li>Mengisi waktu luang dengan produktif</li>
            </ul>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Emotional Jobs</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Percaya diri dengan skill baru</li>
              <li>Bangga bisa berkembang</li>
              <li>Optimis tentang masa depan</li>
              <li>Puas bisa belajar mandiri</li>
            </ul>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Social Jobs</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Diakui kemampuannya</li>
              <li>Menjadi inspirasi sesama PMI</li>
              <li>Dihargai oleh employer</li>
              <li>Mampu networking lebih luas</li>
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
                'Keterbatasan Waktu:',
                '- Jadwal kerja tidak menentu',
                '- Sulit ikut kelas tetap',
                '- Waktu istirahat terbatas',
                'Akses Pendidikan:',
                '- Kursus offline mahal',
                '- Lokasi jauh',
                '- Bahasa pengantar sulit',
                '- Materi tidak sesuai kebutuhan',
                'Motivasi & Konsistensi:',
                '- Sulit belajar sendiri',
                '- Kurang dukungan',
                '- Progress tidak terukur',
                '- Kesulitan practice',
              ],
            },
            {
              title: 'Solution',
              content: [
                'Flexible Learning System:',
                '- Recorded video lessons',
                '- Mobile-first platform',
                '- Offline access',
                '- Micro-learning format',
                'PMI-Focused Content:',
                '- Bahasa Indonesia',
                '- Praktis & aplikatif',
                '- Case study relevan',
                '- Level bertahap',
                'Support System:',
                '- Grup diskusi',
                '- Mentor support',
                '- Progress tracking',
                '- Practice exercises',
              ],
            },
            {
              title: 'Unique Value Proposition',
              content: ['"Belajar Fleksibel, Materi Praktis, Komunitas Supportif"', 'Fokus: Kemudahan, Relevansi, Dukungan'],
            },
            {
              title: 'Unfair Advantage',
              content: ['Pengalaman lokal', 'Network PMI', 'Bahasa Indonesia', 'Pemahaman kebutuhan PMI'],
            },
            {
              title: 'Customer Segments',
              content: [
                'Primary:',
                '- PMI aktif',
                '- Calon PMI',
                '- Mantan PMI',
                '- Keluarga PMI',
                'Secondary:',
                '- Komunitas Indonesia di luar negeri',
                '- Pekerja shift',
                '- Remote workers',
              ],
            },
            {
              title: 'Key Metrics',
              content: [
                'Active students',
                'Course completion rate',
                'Student satisfaction',
                'Revenue per student',
                'Retention rate',
                'Learning outcomes',
              ],
            },
            {
              title: 'Channels',
              content: [
                'Online Marketing:',
                '- Social media presence',
                '- WhatsApp broadcast',
                '- Email marketing',
                '- Content marketing',
                'Community:',
                '- PMI groups',
                '- Agency partnerships',
                '- Alumni network',
                '- Referral program',
              ],
            },
            {
              title: 'Cost Structure',
              content: [
                'Fixed Costs:',
                '- Platform hosting',
                '- Content production',
                '- Core team salary',
                '- Marketing base',
                'Variable Costs:',
                '- Mentor fees',
                '- Marketing campaigns',
                '- Content updates',
                '- Support staff',
              ],
            },
            {
              title: 'Revenue Streams',
              content: [
                'Primary:',
                '- Course fees',
                '- Monthly subscriptions',
                '- Package bundles',
                '- Certificate fees',
                'Secondary:',
                '- Private mentoring',
                '- Premium content',
                '- Study materials',
                '- Community access',
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
            <h3 className='text-xl font-semibold mb-4'>Course Categories</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>
                Essential Skills:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Basic Language Skills</li>
                  <li>Digital Literacy</li>
                  <li>Financial Management</li>
                  <li>Work Safety</li>
                </ul>
              </li>
              <li>
                Professional Development:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Advanced Language</li>
                  <li>Technical Skills</li>
                  <li>Service Excellence</li>
                  <li>Leadership Skills</li>
                </ul>
              </li>
              <li>
                Personal Growth:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Mental Health</li>
                  <li>Time Management</li>
                  <li>Communication</li>
                  <li>Problem Solving</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Content Development</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>
                Course Structure:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Short video (5-10 mins)</li>
                  <li>Practice exercises</li>
                  <li>Quizzes</li>
                  <li>Downloadable materials</li>
                </ul>
              </li>
              <li>
                Learning Path:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Basic level</li>
                  <li>Intermediate</li>
                  <li>Advanced</li>
                  <li>Specialization</li>
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
