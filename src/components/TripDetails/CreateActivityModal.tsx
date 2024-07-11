import { Calendar, Tag, X } from 'lucide-react';
import { FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { api } from '../../services/api/axios';

interface IActivity {
  id: string;
  title: string;
  occurs_at: string;
}

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
  onActivityCreated: (activity: IActivity) => void;
}

export function CreateActivityModal({
  closeCreateActivityModal,
  onActivityCreated,
}: CreateActivityModalProps) {
  const { tripId } = useParams();

  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const title = data.get('title')?.toString();
    const occurs_at = data.get('occurs_at')?.toString();

    if (title && occurs_at) {
      const response = await api.post(`/trips/${tripId}/activities`, {
        title,
        occurs_at,
      });

      onActivityCreated({
        id: response.data.activityId,
        title,
        occurs_at,
      });

      closeCreateActivityModal();
    }
  }

  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center '>
      <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
            <button type='button' onClick={closeCreateActivityModal}>
              <X className='size-5 text-zinc-400' />
            </button>
          </div>
          <p className='text-sm text-zinc-400'>
            Todos convidados podem visualizar as atividades.
          </p>
        </div>
        <form onSubmit={createActivity} className='space-y-3'>
          <Input
            name='title'
            placeholder='Qual a atividade?'
            iconLeft={<Tag className='text-zinc-400 size-5' />}
          />
          <Input
            type='datetime-local'
            name='occurs_at'
            placeholder='Data e horário da atividade'
            iconLeft={<Calendar className='text-zinc-400 size-5' />}
          />
          <Button type='submit' className='w-full justify-center'>
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  );
}
