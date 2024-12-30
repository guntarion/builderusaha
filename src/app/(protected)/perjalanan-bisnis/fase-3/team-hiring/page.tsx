import { TeamHiringForm } from './components/TeamHiringForm';
import { FormProvider } from './context/FormContext';

export default function TeamHiringPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Penilaian Kebutuhan Tim</h1>
      <FormProvider>
        <TeamHiringForm />
      </FormProvider>
    </div>
  );
}
