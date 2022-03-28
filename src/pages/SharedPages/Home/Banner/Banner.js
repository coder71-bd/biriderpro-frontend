import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import banner from '../../../../images/banner/banner.jpg';

const Banner = () => {
  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h4"
            color="text.header"
            sx={{
              mt: 1,
              fontSize: { xs: 22, md: 32 },
            }}
          >
            Welcome To BIRIDERPRO
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            Buy your favourite bikes with us
          </Typography>

          <NavLink to="/explore" style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ my: 2, color: 'white', px: 4 }}>
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
