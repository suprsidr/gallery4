import React from 'react';
import { useRoutes } from 'hookrouter';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Albums from './Albums';
import Album from './Album';
import NotFound from './NotFound';

/* eslint-disable */
const routes = {
  '/': () => <HomePage />,
  '/about': () => <AboutPage />,
  '/albums': () => <Albums />,
  '/album/:id': ({ id }) => <Album id={id} />
};
/* eslint-enable */

const Router = () => {
  const routeResult = useRoutes(routes);

  return routeResult || <NotFound />;
};

export default Router;