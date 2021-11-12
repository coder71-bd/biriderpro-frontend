import { Grid } from '@material-ui/core';
import { Box, Button, Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import React from 'react';
import { NavLink } from 'react-router-dom';
import banner from '../../../../images/banner.jpg';

const Banner = () => {
  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <Box
          sx={{
            backgroundColor: lightBlue[100],
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" color="primary.main" sx={{ mt: 1 }}>
            Welcome to BIRIDERPRO
          </Typography>
          <Typography variant="subtitle2" sx={{ mt: 1 }}>
            Buy your favourite bikes with us
          </Typography>

          <NavLink to="/explore">
            <Button variant="contained" sx={{ my: 2 }}>
              Order Now
            </Button>
          </NavLink>
        </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        <img src={banner} alt="banner" width="100%" />
      </Grid>
    </Grid>
  );
};

export default Banner;
