import { Box, styled } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const BoxWrapper = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: 1,
  padding: 2,
  justifyItems: 'center',
  margin: 'auto',
  maxWidth: theme.breakpoints.values.xl,
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));
