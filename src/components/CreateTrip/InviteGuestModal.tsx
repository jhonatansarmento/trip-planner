// src/components/CreateTrip/InviteGuestModal.tsx
import { AtSign, Plus, X } from 'lucide-react';
import { FormEvent } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../Button';

interface InviteGuestModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInvites: (email: string) => void;
}

export function InviteGuestModal({
  closeGuestsModal,
  emailsToInvite,
  addNewEmailToInvite,
  removeEmailFromInvites,
}: InviteGuestModalProps) {
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center '>
      <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Selecionar Convidados</h2>
            <button type='button' onClick={closeGuestsModal}>
              <X className='size-5 text-zinc-400' />
            </button>
          </div>
          <p className='text-sm text-zinc-400 text-left'>
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>
        <div className='flex flex-wrap gap-2'>
          {emailsToInvite.map((email, index) => {
            return (
              <div
                key={index}
                className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'
              >
                <span className='text-zinc-300'>{email}</span>
                <button
                  onClick={() => removeEmailFromInvites(email)}
                  type='button'
                >
                  <X className='size-4 text-zinc-400' />
                </button>
              </div>
            );
          })}
        </div>

        <div className='w-full h-px bg-zinc-800'></div>

        <form
          onSubmit={addNewEmailToInvite}
          className='p-3 bg-zinc-950 border-zinc-800 rounded-lg flex items-center justify-between gap-2'
        >
          <Input
            type='email'
            name='email'
            className='h-3'
            placeholder='Digite o e-mail do convidado'
            iconLeft={<AtSign className='text-zinc-400 size-5' />}
          />
          <Button iconRight={<Plus className='size-5 ' />} type='submit'>
            Convidar
          </Button>
        </form>
      </div>
    </div>
  );
}
