import { CircularProgress, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useBikes from '../../../../hooks/useBikes';
import Bike from '../../Bike/Bike';

const Bikes = () => {
  const [bikes] = useBikes();

  if (bikes.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {bikes
        .splice(0, 6)
        .reverse()
        .map((bike) => (
          <Grid key={bike._id} item xs={12} md={6} lg={4}>
            <Bike bike={bike} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Bikes;
