import { Link2, Plus } from 'lucide-react';
import { Button } from '../../components/Button';

export function ImportantLinks() {
  return (
    <div className='space-y-6'>
      <h2 className='font-semibold text-xl'>Links importantes</h2>
      <div className='space-y-5'>
        <div className='flex items-center gap-4 justify-between'>
          <div className='space-y-1.5 '>
            <span className='block font-medium'>Reserva do AirBnB</span>
            <a
              href='#'
              className='block text-xs text-zinc-400 truncate hover:text-zinc-200'
            >
              https://www.airbnb.com.br/rooms/5437543897594235734233489757439857353276958011
            </a>
          </div>
          <Link2 className='text-zinc-400 size-5 shrink-0' />
        </div>
        <div className='flex items-center gap-4 justify-between'>
          <div className='space-y-1.5 '>
            <span className='block font-medium'>Regras da casa</span>
            <a
              href='#'
              className='block text-xs text-zinc-400 truncate hover:text-zinc-200'
            >
              https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000
            </a>
          </div>
          <Link2 className='text-zinc-400 size-5 shrink-0' />
        </div>
      </div>
      <Button
        className=' w-full justify-center'
        variant='secondary'
        iconLeft={<Plus className='size-5' />}
      >
        Cadastrar novo link
      </Button>
    </div>
  );
}
