import React from 'react';
import {
  Box, Button, Rating, Stack, TextField, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocationField from './location-field';
import ImagesField from './images-field';
import * as Styled from './styled';
import { formatValues } from './helpers';
import ApiService from '../../services/api-service';
import routes from '../../navigation/routes';

type HouseFormPageProps = {
  mode?: 'create' | 'edit'
};

const HouseFormPage: React.FC<HouseFormPageProps> = ({ mode = 'create' }) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = JSON.stringify(formatValues(formRef.current));
      const createResponseStatus = await ApiService.createHouse(values);
      if (createResponseStatus === 201) {
        navigate(routes.HomePage);
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : error);
    }
  };
  return (
    <Styled.Container>
      <Styled.PaperForm elevation={4} onSubmit={handleSubmit} ref={formRef}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>Create House</Typography>
        <Stack sx={{ gap: 2, mt: 2 }}>
          <TextField label="Title" fullWidth variant="filled" name="title" required />
          <LocationField />
          <ImagesField />

          <TextField
            label="Price"
            fullWidth
            variant="filled"
            name="price"
            type="number"
            inputProps={{ step: '0.01' }}
            required
          />
          <Box>
            <Typography component="legend">Rating</Typography>
            <Rating name="rating" precision={0.1} />
          </Box>

          <Stack alignItems="center" sx={{ mt: 2 }}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              size="large"
            >
              Create
            </Button>
          </Stack>
        </Stack>
      </Styled.PaperForm>
    </Styled.Container>
  );
};

export default HouseFormPage;
