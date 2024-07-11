import { CheckCircle2, CircleDashed, UserCog } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { api } from '../../services/api/axios';

interface IParticipantsProps {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
}

export function Guests() {
  const { tripId } = useParams();
  const [participants, setParticipants] = useState<IParticipantsProps[]>([]);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data.participants));
  }, [tripId]);

  return (
    <div className='space-y-6'>
      <h2 className='font-semibold text-xl'>Convidados</h2>
      <div className='space-y-5'>
        {participants.map((participant, index) => {
          return (
            <div
              key={participant.id}
              className='flex items-center gap-4 justify-between'
            >
              <div className='space-y-1.5 '>
                <span className='block font-medium'>
                  {participant.name ?? `Convidado ${index}`}
                </span>
                <span className='block text-sm text-zinc-400 truncate'>
                  {participant.email}
                </span>
              </div>
              {participant.is_confirmed ? (
                <CheckCircle2 className='text-green-400 size-5 shrink-0' />
              ) : (
                <CircleDashed className='text-zinc-400 size-5 shrink-0' />
              )}
            </div>
          );
        })}
      </div>
      <Button
        variant='secondary'
        className='w-full'
        iconLeft={<UserCog className='size-5' />}
      >
        Gerenciar convidados
      </Button>
    </div>
  );
}
