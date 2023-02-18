import { Box, styled } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const ImageBoxWrapper = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '10px',
  padding: '15px',
  backgroundColor: '#eeeeee',
  width: '100%',
  height: '100%',
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gridArea: '1, 1, 1, 2',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: '1fr',
  },
}));

export const SingleHouseImg = styled('img')(() => ({
  width: '100%',
  margin: 'auto',
}));
