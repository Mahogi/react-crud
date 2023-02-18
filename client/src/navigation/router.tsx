import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from 'pages/home-page';
import routes from './routes';
import HousePage from '../pages/house-page';
import HouseFormPage from '../pages/house-form-page';
import NavbarLayout from '../components/layout/navbar-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.HousePage.routePath,
        element: <HousePage />,
      },
      {
        path: routes.HouseCreatePage,
        element: <HouseFormPage mode="create" />,
      },
    ],
  },
]);

export default router;
