import { Box, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Header from '../Header/Header';
import Banner from './Banner/Banner';
import Bikes from './Bikes/Bikes';
import FAQ from './FAQ/FAQ';
import UserReviews from './UserReviews/UserReviews';

const Home = () => {
  const { admin } = useAuth();
  return (
    <>
      {!admin && <Header />}
      <Banner />
      {/* bikes */}
      <Typography
        variant="h5"
        style={{ textAlign: 'center', margin: '20px 0' }}
      >
        Fetaured Bikes
      </Typography>
      <Bikes />

      {/* user reviews */}
      <Typography
        variant="h5"
        style={{ textAlign: 'center', margin: '20px 0' }}
      >
        Happy Customers Says
      </Typography>
      <UserReviews />

      {/* faqs */}

      <Typography
        variant="h5"
        style={{ textAlign: 'center', margin: '20px 0' }}
      >
        Frequently Asked Questions
      </Typography>
      <Box sx={{ maxWidth: '80%', mx: 'auto' }}>
        <FAQ />
      </Box>
    </>
  );
};

export default Home;
