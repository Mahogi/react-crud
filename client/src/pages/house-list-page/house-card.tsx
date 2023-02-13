import React from 'react';
import { Paper, Rating } from '@mui/material';
import classes from './house-card.module.css';
import HouseModel from '../../models/house-models';

const HouseCard: React.FC<HouseModel> = ({
  title,
  location,
  images,
  price,
  rating,
}) => (
  <Paper sx={{
    padding: '15px', backgroundColor: '#eeeeee', width: '320px', margin: '10px',
  }}
  >
    <h3>{title}</h3>
    <span>
      Location -
      {location.country}
      ,
      {location.city}
    </span>
    <img src={images[0]} alt="house" className={classes.img} />
    <span>
      Price per night:
      {price}
    </span>
    <br />
    <Rating
      value={rating}
      precision={0.1}
      size="large"
      readOnly
    />
  </Paper>
);
export default HouseCard;
