// src/components/CreateTrip/ConfirmTripModal.tsx
import { Mail, User, X } from 'lucide-react';
import { FormEvent } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../Button';

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  setOwnerName: (name: string) => void;
  setOwnerEmail: (email: string) => void;
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  setOwnerName,
  setOwnerEmail,
}: ConfirmTripModalProps) {
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center '>
      <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>
              Confirmar criação da viagem
            </h2>
            <button type='button' onClick={closeConfirmTripModal}>
              <X className='size-5 text-zinc-400' />
            </button>
          </div>
          <p className='text-sm text-zinc-400'>
            Para concluir a criação da viagem para{' '}
            <span className='font-semibold text-zinc-100'>
              Florianópolis, Brasil
            </span>{' '}
            nas datas de
            <span className='font-semibold text-zinc-100'>
              16 a 27 de Agosto de 2024
            </span>{' '}
            preencha seus dados abaixo:
          </p>
        </div>
        <form onSubmit={createTrip} className='space-y-3'>
          <Input
            name='name'
            placeholder='Seu nome completo'
            iconLeft={<User className='text-zinc-400 size-5' />}
            onChange={(event) => setOwnerName(event.target.value)}
          />
          <Input
            type='email'
            name='email'
            placeholder='Seu e-mail pessoal'
            iconLeft={<Mail className='text-zinc-400 size-5' />}
            onChange={(event) => setOwnerEmail(event.target.value)}
          />
          <Button type='submit'>Confirmar criação da viagem</Button>
        </form>
      </div>
    </div>
  );
}