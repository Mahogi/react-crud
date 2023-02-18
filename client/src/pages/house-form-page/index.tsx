import React from 'react';
import { Box } from '@mui/material';

type HouseFormPageProps = {
  mode?: 'create' | 'edit'
};

const HouseFormPage: React.FC<HouseFormPageProps> = ({ mode = 'create' }) => {
  const test = 'HouseFormPage';
  return (
    <Box>{mode}</Box>
  );
};

export default HouseFormPage;
