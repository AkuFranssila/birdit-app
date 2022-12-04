import { FC } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { Home } from '@pages/home/Home';

const routes: RouteObject[] = [{ path: '/', element: <Home /> }];
export const PrivateRoutes: FC = function () {
  const Routes = useRoutes(routes);

  return Routes;
};
