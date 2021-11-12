import { Grid } from '@material-ui/core';
import React from 'react';
import appstore from '../../../images/appstore.png';
import playstore from '../../../images/playstore.png';

const Footer = () => {
  return (
    <Grid container>
      <img src={playstore} alt="playstore" />
      <img src={appstore} alt="appstore" />
    </Grid>
  );
};

export default Footer;
