import { auth } from '../../../lib/auth';
import { redirect } from 'next/navigation';

export default async function EntrepreneurAssessmentPage() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Penilaian Wirausaha</h1>

      <div className='bg-white rounded-xl shadow-sm p-8'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-2xl font-semibold mb-6'>Mulai Penilaian Wirausaha Anda</h2>

          <p className='text-gray-600 mb-8'>
            Penilaian ini akan membantu Anda memahami kekuatan dan area pengembangan Anda sebagai seorang wirausaha.
          </p>

          <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'>Mulai Penilaian</button>
        </div>
      </div>
    </div>
  );
}
