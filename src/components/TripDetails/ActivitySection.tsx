import { Activities } from './Activities';
import { ActivityHeader } from './ActivityHeader';

interface ActivitySectionProps {
  onOpenModal: () => void;
}

export function ActivitySection({ onOpenModal }: ActivitySectionProps) {
  return (
    <div className='flex-1 space-y-6'>
      <ActivityHeader onOpenModal={onOpenModal} />
      <Activities />
    </div>
  );
}
