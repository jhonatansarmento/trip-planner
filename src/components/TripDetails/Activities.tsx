import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CircleCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api/axios';

interface IActivity {
  id: string;
  title: string;
  occurs_at: string;
}

interface IActivityProps {
  date: string;
  activities: IActivity[];
}

export function Activities() {
  const { tripId } = useParams<{ tripId: string }>();
  const [activities, setActivities] = useState<IActivityProps[]>([]);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/activities`)
      .then((response) => setActivities(response.data.activities));
  }, [tripId]);

  return (
    <div className='space-y-8'>
      {activities.map((category) => (
        <div key={category.date} className='space-y-2.5'>
          <div className='flex gap-2 items-baseline'>
            <span className='text-xl text-zinc-300 font-semibold'>
              Dia {format(new Date(category.date), 'd')}
            </span>
            <span className='text-xs text-zinc-500'>
              {format(new Date(category.date), 'EEEE', { locale: ptBR })}
            </span>
          </div>
          {category.activities.length > 0 ? (
            <div>
              {category.activities.map((activity: IActivity) => (
                <div key={activity.id} className='space-y-2.5'>
                  <div className='px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3'>
                    <CircleCheck className='size-5 text-lime-300' />
                    <span className='text-zinc-100'>{activity.title}</span>
                    <span className='text-zinc-400 text-sm ml-auto'>
                      {format(new Date(activity.occurs_at), 'HH:mm')}h
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-zinc-500 text-sm'>
              Nenhuma atividade cadastrada nessa data.
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
