import { Guests } from './Guests';
import { ImportantLinks } from './ImportantLinks';

interface ILinkProps {
  id: string;
  title: string;
  url: string;
}

interface SideSectionProps {
  onOpenLinkModal: () => void;
  links: ILinkProps[];
}

export function SideSection({ onOpenLinkModal, links }: SideSectionProps) {
  return (
    <div className='w-80 space-y-6'>
      <ImportantLinks openCreateLinkModal={onOpenLinkModal} links={links} />
      <div className='w-full h-px bg-zinc-800'></div>
      <Guests />
    </div>
  );
}
