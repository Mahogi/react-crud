import React from 'react';
import { Box } from '@mui/material';
import ApiService from 'services/api-service';
import classes from './index.module.css';
import HouseCard from './house-list-page/house-card';

const HomePage = () => {
  const [houses, setHouses] = React.useState<HouseModel[]>([]);
  const title = 'Vacation Earth Homes';

  React.useEffect(() => {
    (async () => {
      const fetchedHouses = await ApiService.fetchHouses();
      setHouses(fetchedHouses);
    })();
  }, []);

  return (
    <>
      <h1 className={classes.h1}>{title}</h1>
      <Box className={classes.container}>
        {houses.map((house) => (<HouseCard key={house.id} {...house} />
        ))}
      </Box>
    </>
  );
};

export default HomePage;
