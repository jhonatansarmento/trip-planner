import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActivitySection } from '../../components/TripDetails/ActivitySection';
import { CreateActivityModal } from '../../components/TripDetails/CreateActivityModal';
import { CreateLinkModal } from '../../components/TripDetails/CreateLinkModal';
import { DestinationAndDateHeader } from '../../components/TripDetails/DestinationAndDateHeader';
import { SideSection } from '../../components/TripDetails/SideSection';
import { api } from '../../services/api/axios';

interface IActivity {
  id: string;
  title: string;
  occurs_at: string;
}

interface ILinkProps {
  id: string;
  title: string;
  url: string;
}

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [links, setLinks] = useState<ILinkProps[]>([]);
  const { tripId } = useParams();

  const openCreateActivityModal = () => {
    setIsCreateActivityModalOpen(true);
  };

  const closeCreateActivityModal = () => {
    setIsCreateActivityModalOpen(false);
  };

  const openCreateLinkModal = () => {
    setIsCreateLinkModalOpen(true);
  };

  const closeCreateLinkModal = () => {
    setIsCreateLinkModalOpen(false);
  };

  const handleActivityCreated = (activity: IActivity) => {
    setActivities((prevActivities) => [...prevActivities, activity]);
  };

  const handleLinkCreated = (link: ILinkProps) => {
    setLinks((prevLinks) => [...prevLinks, link]);
  };

  useEffect(() => {
    const fetchActivities = async () => {
      const response = await api.get(`/trips/${tripId}/activities`);
      setActivities(response.data.activities);
    };

    const fetchLinks = async () => {
      const response = await api.get(`/trips/${tripId}/links`);
      setLinks(response.data.links);
    };

    fetchActivities();
    fetchLinks();
  }, []);

  return (
    <div className='max-w-6xl px-6 py-10 mx-auto space-y-8'>
      <DestinationAndDateHeader />

      <main className='flex gap-16 px-6'>
        <ActivitySection
          onOpenModal={openCreateActivityModal}
          activities={activities}
        />
        <SideSection onOpenLinkModal={openCreateLinkModal} links={links} />
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
          onActivityCreated={handleActivityCreated}
        />
      )}
      {isCreateLinkModalOpen && (
        <CreateLinkModal
          closeCreateLinkModal={closeCreateLinkModal}
          onLinkCreated={handleLinkCreated}
        />
      )}
    </div>
  );
}
