import React from 'react';
import ApiService from 'services/api-service';
import { Typography } from '@mui/material';
import HouseCard from './house-card/house-card';
import * as Styled from './homepage-styled';
import Header from './header';

const HomePage = () => {
  const [houses, setHouses] = React.useState<HouseModel[]>([]);
  const title = 'Vacation Earth Homes';

  React.useEffect(() => {
    (async () => {
      const fetchedHouses = await ApiService.fetchHouses();
      setHouses(fetchedHouses);
    })();
  }, []);

  const onDelete = async (houseId: string) => {
    try {
      await ApiService.deleteHouse(houseId);
      const fetchedHouses = await ApiService.fetchHouses();
      setHouses(fetchedHouses);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          textAlign: 'center',
        }}
        color="darkgreen"
      >
        {title}
      </Typography>
      <Header />
      <Styled.HouseCardsGrid>
        {houses.map((house) => (<HouseCard key={house.id} {...house} onDelete={onDelete} />
        ))}
      </Styled.HouseCardsGrid>
    </>
  );
};

export default HomePage;
