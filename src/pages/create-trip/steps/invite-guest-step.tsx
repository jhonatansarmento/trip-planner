import { ArrowRight, UserRoundPlus } from 'lucide-react';
import { Button } from '../../../components/Button';

interface InviteGuestStepProps {
  openGuestsModal: () => void;
  openConfirmTripModal: () => void;
  emailsToInvite: string[];
}

export function InviteGuestStep({
  emailsToInvite,
  openConfirmTripModal,
  openGuestsModal,
}: InviteGuestStepProps) {
  return (
    <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3'>
      <Button
        type='button'
        onClick={openGuestsModal}
        className='flex-1'
        iconLeft={<UserRoundPlus className='size-5 text-zinc-400' />}
        variant='secondary'
      >
        {emailsToInvite.length > 0 ? (
          <span className='text-zinc-100 text-lg flex-1 text-left'>
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className='text-zinc-400 text-lg flex-1 text-left'>
            Quem estará na viagem?
          </span>
        )}
      </Button>
      <div className='w-px h-6 bg-zinc-800'></div>
      <Button
        onClick={openConfirmTripModal}
        variant='primary'
        iconRight={<ArrowRight className='size-5' />}
      >
        Confirmar viagem
      </Button>
    </div>
  );
}
