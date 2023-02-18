import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from '../navigation/routes';

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box component="header" sx={{ py: 2, px: 4 }}>
      <Button
        variant="contained"
        color="info"
        size="large"
        onClick={() => navigate(routes.HouseCreatePage)}
      >
        Add Vacation House
      </Button>
    </Box>
  );
};

export default Header;
