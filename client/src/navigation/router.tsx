import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layout/navbar-layout';
import HomePage from 'pages/home-page';
import routes from './routes';
import HouseListPage from '../pages/house-list-page';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
