import { FormEvent, useCallback, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api/axios';
import { ConfirmTripModal } from './ConfirmTripModal';
import { InviteGuestModal } from './InviteGuestModal';
import { DestinationAndDateStep } from './steps/DestinationAndDateStepProps';
import { InviteGuestStep } from './steps/InviteGuestStep';

export const CreateTripForm = () => {
  const navigate = useNavigate();

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [destination, setDestination] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >();
  const [emailsToInvite, setEmailsToInvite] = useState(['jhonatan@email.com']);

  const openGuestsInput = useCallback(() => setIsGuestsInputOpen(true), []);
  const closeGuestsInput = useCallback(() => setIsGuestsInputOpen(false), []);

  const openGuestsModal = useCallback(() => setIsGuestsModalOpen(true), []);
  const closeGuestsModal = useCallback(() => setIsGuestsModalOpen(false), []);

  const openConfirmTripModal = useCallback(
    () => setIsConfirmTripModalOpen(true),
    []
  );
  const closeConfirmTripModal = useCallback(
    () => setIsConfirmTripModalOpen(false),
    []
  );

  const addNewEmailToInvite = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const data = new FormData(event.currentTarget);
      const email = data.get('email')?.toString();

      if (email && !emailsToInvite.includes(email)) {
        setEmailsToInvite((prevEmails) => [...prevEmails, email]);
        event.currentTarget.reset();
      }
    },
    [emailsToInvite]
  );

  const removeEmailFromInvites = useCallback((emailToRemove: string) => {
    setEmailsToInvite((prevEmails) =>
      prevEmails.filter((email) => email !== emailToRemove)
    );
  }, []);

  const createTrip = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (
        !destination ||
        !eventStartAndEndDates?.from ||
        !eventStartAndEndDates?.to ||
        !emailsToInvite.length ||
        !ownerEmail ||
        !ownerName
      ) {
        return;
      }

      try {
        const response = await api.post('/trips', {
          destination,
          starts_at: eventStartAndEndDates.from,
          ends_at: eventStartAndEndDates.to,
          emails_to_invite: emailsToInvite,
          owner_name: ownerName,
          owner_email: ownerEmail,
        });

        const { tripId } = response.data;
        navigate(`/trips/${tripId}`);
      } catch (error) {
        console.error('Error creating trip:', error);
      }
    },
    [
      destination,
      eventStartAndEndDates,
      emailsToInvite,
      ownerName,
      ownerEmail,
      navigate,
    ]
  );

  return (
    <div className='space-y-10'>
      <div className='space-y-4'>
        <DestinationAndDateStep
          closeGuestsInput={closeGuestsInput}
          isGuestsInputOpen={isGuestsInputOpen}
          openGuestsInput={openGuestsInput}
          setDestination={setDestination}
          eventStartAndEndDates={eventStartAndEndDates}
          setEventStartAndEndDates={setEventStartAndEndDates}
        />
        {isGuestsInputOpen && (
          <InviteGuestStep
            emailsToInvite={emailsToInvite}
            openConfirmTripModal={openConfirmTripModal}
            openGuestsModal={openGuestsModal}
          />
        )}
      </div>
      {isGuestsModalOpen && (
        <InviteGuestModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          removeEmailFromInvites={removeEmailFromInvites}
        />
      )}
      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
        />
      )}
    </div>
  );
};
