import { Plus } from 'lucide-react';
import { Button } from '../Button';

interface ActivityHeaderProps {
  onOpenModal: () => void;
}

export function ActivityHeader({ onOpenModal }: ActivityHeaderProps) {
  return (
    <div className='flex items-center justify-between'>
      <h2 className='text-3xl font-semibold'>Atividades</h2>
      <Button onClick={onOpenModal} iconLeft={<Plus className='size-5' />}>
        Cadastrar atividade
      </Button>
    </div>
  );
}
