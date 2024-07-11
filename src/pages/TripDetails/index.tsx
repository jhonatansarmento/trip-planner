import { Plus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { Activities } from '../../components/TripDetails/Activities';
import { CreateActivityModal } from '../../components/TripDetails/CreateActivityModal';
import { DestinationAndDateHeader } from '../../components/TripDetails/DestinationAndDateHeader';
import { Guests } from '../../components/TripDetails/Guests';
import { ImportantLinks } from '../../components/TripDetails/ImportantLinks';

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className='max-w-6xl px-6 py-10 mx-auto space-y-8'>
      <DestinationAndDateHeader />

      <main className='flex gap-16 px-6'>
        <div className='flex-1 space-y-6'>
          <div className='flex items-center justify-between'>
            <h2 className='text-3xl font-semibold'>Atividades</h2>
            <Button
              onClick={openCreateActivityModal}
              iconLeft={<Plus className='size-5' />}
            >
              Cadastrar atividade
            </Button>
          </div>
          <Activities />
        </div>
        <div className='w-80 space-y-6'>
          <ImportantLinks />
          <div className='w-full h-px bg-zinc-800'></div>
          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  );
}
