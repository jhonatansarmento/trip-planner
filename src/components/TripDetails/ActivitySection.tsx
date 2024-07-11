import { Activities } from './Activities';
import { ActivityHeader } from './ActivityHeader';

interface IActivity {
  id: string;
  title: string;
  occurs_at: string;
}

interface ActivitySectionProps {
  onOpenModal: () => void;
  activities: IActivity[];
}

export function ActivitySection({
  onOpenModal,
  activities,
}: ActivitySectionProps) {
  return (
    <div className='flex-1 space-y-6'>
      <ActivityHeader onOpenModal={onOpenModal} />
      <Activities activities={activities} />
    </div>
  );
}
