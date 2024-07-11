import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateTripPage } from './pages/Home';
import { TripDetailsPage } from './pages/TripDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateTripPage />,
  },
  {
    path: '/trips/:tripId',
    element: <TripDetailsPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
