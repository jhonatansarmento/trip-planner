import { Link2, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { api } from '../../services/api/axios';

interface ILinkProps {
  id: string;
  title: string;
  url: string;
}

interface ImportantLinksProps {
  openCreateLinkModal: () => void;
}

export function ImportantLinks({ openCreateLinkModal }: ImportantLinksProps) {
  const { tripId } = useParams();
  const [links, setLinks] = useState<ILinkProps[]>([]);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/links`)
      .then((response) => setLinks(response.data.links));
  }, [tripId]);

  return (
    <div className='space-y-6'>
      <h2 className='font-semibold text-xl'>Links importantes</h2>
      <div className='space-y-5'>
        {links.map((link) => (
          <div
            key={link.id}
            className='flex items-center gap-4 justify-between'
          >
            <div className='space-y-1.5'>
              <span className='block font-medium'>{link.title}</span>
              <a
                href={link.url}
                className='block text-xs text-zinc-400 truncate hover:text-zinc-200'
                target='_blank'
                rel='noopener noreferrer'
              >
                {link.url}
              </a>
            </div>
            <Link2 className='text-zinc-400 size-5 shrink-0' />
          </div>
        ))}
      </div>
      <Button
        className='w-full justify-center'
        variant='secondary'
        iconLeft={<Plus className='size-5' />}
        onClick={openCreateLinkModal}
      >
        Cadastrar novo link
      </Button>
    </div>
  );
}
