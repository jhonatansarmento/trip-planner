import { CreateTripForm } from '../../components/CreateTrip/CreateTripForm';
import Header from '../../components/CreateTrip/Header';
import Terms from '../../components/CreateTrip/Terms';

export function CreateTripPage() {
  return (
    <div className='h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center'>
      <div className='max-w-3xl w-full px-6 text-center space-y-10'>
        <Header />
        <CreateTripForm />
        <Terms />
      </div>
    </div>
  );
}
