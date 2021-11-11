import { CircularProgress, Grid } from '@mui/material';
import React from 'react';
import useBikes from '../../../../hooks/useBikes';
import Bike from '../../Bike/Bike';

const Bikes = () => {
  const [bikes] = useBikes();
  console.log(bikes);

  if (bikes.length === 0) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={3}>
      {bikes.splice(0, 6).map((bike) => (
        <Grid key={bike._id} item xs={12} md={6} lg={4}>
          <Bike bike={bike} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Bikes;
