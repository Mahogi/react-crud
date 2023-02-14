import { Box, Paper, styled } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const PaperWrapper = styled(Paper)(() => ({
  padding: '15px',
  backgroundColor: '#eeeeee',
  width: '320px',
  margin: '10px',
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',

  gap: theme.spacing(1),
  marginTop: theme.spacing(3),
  backgroundColor: '#eeeeee',
  justifyContent: 'space-between',

}));
