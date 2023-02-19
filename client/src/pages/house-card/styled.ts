import { Box, Paper, styled } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const PaperWrapper = styled(Paper)(() => ({
  position: 'relative',
  padding: '15px',
  backgroundColor: '#eeeeee',
  width: '320px',
  margin: '10px',
}));

export const AdminActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(10),
  right: theme.spacing(3),
  gap: '10px',
  zIndex: '100',
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',

  gap: theme.spacing(1),
  marginTop: theme.spacing(3),
  backgroundColor: '#eeeeee',
  justifyContent: 'space-between',

}));
