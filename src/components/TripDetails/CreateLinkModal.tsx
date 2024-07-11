import { Link2, X } from 'lucide-react';
import { FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { api } from '../../services/api/axios';

interface CreateLinkModalProps {
  closeCreateLinkModal: () => void;
  onLinkCreated: (link: { id: string; title: string; url: string }) => void;
}

export function CreateLinkModal({
  closeCreateLinkModal,
  onLinkCreated,
}: CreateLinkModalProps) {
  const { tripId } = useParams();

  async function handleCreateLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const title = data.get('title')?.toString();
    const url = data.get('url')?.toString();

    if (title && url) {
      const response = await api.post(`/trips/${tripId}/links`, {
        title,
        url,
      });
      onLinkCreated({ id: response.data.linkId, title, url });
      closeCreateLinkModal();
    }
  }

  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Cadastrar Link Importante</h2>
            <button type='button' onClick={closeCreateLinkModal}>
              <X className='size-5 text-zinc-400' />
            </button>
          </div>
          <p className='text-sm text-zinc-400'>
            Adicione links importantes para a viagem. Todos os convidados
            poderão vê-los.
          </p>
        </div>
        <form onSubmit={handleCreateLink} className='space-y-3'>
          <Input
            name='title'
            placeholder='Título do link'
            iconLeft={<Link2 className='text-zinc-400 size-5' />}
          />
          <Input
            type='url'
            name='url'
            placeholder='URL do link'
            iconLeft={<Link2 className='text-zinc-400 size-5' />}
          />
          <Button type='submit' className='w-full justify-center'>
            Adicionar Link
          </Button>
        </form>
      </div>
    </div>
  );
}
