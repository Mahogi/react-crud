import React from 'react';
import { Box, Rating, Typography } from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';
import ApiService from '../../services/api-service';
import routes from '../../navigation/routes';
import * as Styled from './styled';

const HousePage = () => {
  const { id } = useParams();
  if (id === undefined) {
    return <Navigate to={routes.HomePage} />;
  }

  const [house, setHouse] = React.useState<HouseModel | undefined>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedHouse = await ApiService.fetchHouse(id);
        setHouse(fetchedHouse);
      })();
    }
  }, [id]);

  if (house !== undefined) {
    return (
      <Box sx={{ padding: '20px ' }}>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>{house.title}</Typography>
        <Typography variant="h6">{`${house.location.city}, ${house.location.country}`}</Typography>
        <Styled.ImageBoxWrapper>
          {house.images.map((image) => (
            <Styled.SingleHouseImg key={image} src={image} alt="house" />
          ))}

          {/* <Styled.SingleHouseImg key={house.images[0]} src={house.images[0]} alt="house" /> */}
          {/* <Styled.SingleHouseImg key={house.images[1]} src={house.images[1]} alt="house" /> */}
          {/* <Styled.SingleHouseImg key={house.images[2]} src={house.images[2]} alt="house" /> */}
        </Styled.ImageBoxWrapper>
        <Typography variant="h6">{`Price per night: ${house.price}`}</Typography>
        <Rating
          value={house.rating}
          precision={0.1}
          size="large"
          readOnly
        />
      </Box>
    );
  }

  return (
    <Box>There has been an error.</Box>
  );
};

export default HousePage;
