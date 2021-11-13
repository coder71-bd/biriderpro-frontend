import { CircularProgress, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useBikes from '../../../hooks/useBikes';
import Bike from '../Bike/Bike';
import Header from '../Header/Header';

const Explore = () => {
  const { admin } = useAuth();
  const [bikes] = useBikes();

  if (bikes.length === 0) {
    return <CircularProgress />;
  }

  return (
    <Box>
      {!admin && <Header />}
      <Grid container spacing={3} sx={{ pt: 3 }}>
        {bikes.map((bike) => (
          <Grid key={bike._id} item xs={12} md={6} lg={4}>
            <Bike bike={bike} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Explore;
