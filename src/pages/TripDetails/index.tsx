import { useState } from 'react';
import { ActivitySection } from '../../components/TripDetails/ActivitySection';
import { CreateActivityModal } from '../../components/TripDetails/CreateActivityModal';
import { DestinationAndDateHeader } from '../../components/TripDetails/DestinationAndDateHeader';
import { SideSection } from '../../components/TripDetails/SideSection';

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  const openCreateActivityModal = () => {
    setIsCreateActivityModalOpen(true);
  };

  const closeCreateActivityModal = () => {
    setIsCreateActivityModalOpen(false);
  };

  return (
    <div className='max-w-6xl px-6 py-10 mx-auto space-y-8'>
      <DestinationAndDateHeader />

      <main className='flex gap-16 px-6'>
        <ActivitySection onOpenModal={openCreateActivityModal} />
        <SideSection />
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  );
}
