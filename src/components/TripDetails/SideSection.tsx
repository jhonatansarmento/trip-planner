import { Guests } from './Guests';
import { ImportantLinks } from './ImportantLinks';

export function SideSection() {
  return (
    <div className='w-80 space-y-6'>
      <ImportantLinks />
      <div className='w-full h-px bg-zinc-800'></div>
      <Guests />
    </div>
  );
}
