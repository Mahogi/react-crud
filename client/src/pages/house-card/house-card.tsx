import React from 'react';
import {
  Button, Rating, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import HouseModel from '../../models/house-models';
import Img from '../../ui/img';
import * as Styled from './styled';
import routes from '../../navigation/routes';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Pagination]);

const HouseCard: React.FC<HouseModel> = ({
  id,
  title,
  location,
  images,
  price,
  rating,
}) => {
  const navigate = useNavigate();

  return (
    <Styled.PaperWrapper>
      <Styled.AdminActions>
        <Button variant="contained" color="warning" size="small">Update</Button>
        <Button variant="contained" color="error" size="small">Delete</Button>
      </Styled.AdminActions>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>{title}</Typography>
      <span>
        {`Location - ${location.country}, ${location.city}`}
      </span>
      <Swiper
        effect="slide"
        navigation
        modules={[Navigation]}
        grabCursor
        slidesPerView="auto"
        pagination
        loop
      >
        {
          images.map((img: string) => (
            <SwiperSlide key={img}>
              <Img src={img} alt="house" sx={{ height: '200px' }} />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <span>{`Price per night: ${price}`}</span>
      <Rating
        value={rating}
        precision={0.1}
        size="large"
        readOnly
      />
      <Styled.ButtonContainer>
        <Button color="warning" variant="outlined">Remember</Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigate(routes.HousePage.createLink(id))}
        >
          View details
        </Button>
      </Styled.ButtonContainer>
    </Styled.PaperWrapper>
  );
};

export default HouseCard;
