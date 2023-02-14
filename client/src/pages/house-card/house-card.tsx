import React from 'react';
import { Button, Rating, Typography } from '@mui/material';
import HouseModel from '../../models/house-models';
import Img from '../../ui/img';
import * as Styled from './styled';

const HouseCard: React.FC<HouseModel> = ({
  title,
  location,
  images,
  price,
  rating,
}) => (
  <Styled.PaperWrapper>
    <Typography variant="h6" sx={{ textAlign: 'center' }}>{title}</Typography>
    <span>
      {`Location - ${location.country}, ${location.city}`}
    </span>
    <Img src={images[0]} alt="house" sx={{ height: '200px' }} />
    <span>{`Price per night: ${price}`}</span>
    <Rating
      value={rating}
      precision={0.1}
      size="large"
      readOnly
    />
    <Styled.ButtonContainer>
      <Button color="warning" variant="outlined">Remember</Button>
      <Button color="primary" variant="contained">View details</Button>
    </Styled.ButtonContainer>
  </Styled.PaperWrapper>
);
export default HouseCard;
