import { format } from 'date-fns';
import { Calendar, MapPin, Settings2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { api } from '../../lib/axios';

interface ITripProps {
  id: string;
  destination: string;
  ends_at: string;
  starts_at: string;
  is_confirmed: boolean;
}

export function DestinationAndDateHeader() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState<ITripProps | undefined>();

  useEffect(() => {
    api.get(`/trips/${tripId}`).then((response) => setTrip(response.data.trip));
  }, [tripId]);

  const displayedDate = trip
    ? format(trip.starts_at, "d ' de 'LLL")
        .concat(' ate ')
        .concat(format(trip.ends_at, "d ' de 'LLL"))
    : null;

  return (
    <div className='px-6 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <MapPin className='size-5 text-zinc-400' />
        <span className='text-zinc-100'>{trip?.destination}</span>
      </div>
      <div>
        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-2'>
            <Calendar className='size-5 text-zinc-400' />
            <span className='text-zinc-100'>{displayedDate}</span>
          </div>
          <div className='w-px h-6 bg-zinc-800'></div>

          <Button
            variant='secondary'
            iconRight={<Settings2 className='size-5' />}
          >
            Alterar local/data
          </Button>
        </div>
      </div>
    </div>
  );
}
