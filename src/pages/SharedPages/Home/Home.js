import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Banner from './Banner/Banner';
import Bikes from './Bikes/Bikes';
import UserReviews from './UserReviews/UserReviews';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Bikes />
      <UserReviews />
      <Footer />
    </>
  );
};

export default Home;
