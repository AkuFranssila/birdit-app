import { FC } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { EventsHome } from '@pages/eventsHome/EventsHome';
import { Tournaments } from '@pages/tournaments/Tournaments';
import { Weeklies } from '@pages/weeklies/Weeklies';
import { Practices } from '@pages/practices/Practices';

const routes: RouteObject[] = [
  { path: '/', element: <EventsHome />, handle: 'Home' },
  { path: '/tournaments', element: <Tournaments />, handle: 'Tournaments' },
  { path: '/weeklies', element: <Weeklies />, handle: 'Weeklies' },
  { path: '/practices', element: <Practices />, handle: 'Practices' },
  { path: '/courses', element: <></>, handle: 'Courses' },
  { path: '/:id', element: <></>, handle: 'Event XXX' }, //TODO: Add event name, TODO: Add event type
  { path: '/:id/register', element: <></>, handle: 'Register Event XXX' },
  { path: '/:id/scoring', element: <></>, handle: 'Scoring Event XXX' },
  { path: '/blog', element: <></>, handle: 'Blog' },
  { path: '/help', element: <></>, handle: 'Help' },
  { path: '/about', element: <></>, handle: 'About us' },
  { path: '/user/:id', element: <></>, handle: 'About us' }
];
export const PrivateRoutes: FC = function () {
  const Routes = useRoutes(routes);

  return Routes;
};
