import { Grid, Stack, Typography } from '@mui/material';
import { cyan, purple } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import appstore from '../../../images/appstore.png';
import playstore from '../../../images/playstore.png';

const Footer = () => {
  return (
    <Grid container sx={{ backgroundColor: cyan['A100'], mt: 5 }}>
      <Grid
        item
        xs={5}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Typography variant="h5" sx={{ color: purple[500], pt: 3 }}>
          BIRIDERPRO
        </Typography>
      </Grid>
      <Grid item xs={7}>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ pt: 3 }}
        >
          <img src={playstore} alt="playstore" />
          <img src={appstore} alt="appstore" />
        </Stack>
      </Grid>
      <Box sx={{ width: '100%' }}>
        <Typography
          color="error.main"
          sx={{ textAlign: 'center', pt: 1, fontSize: 20 }}
        >
          &copy; All Rights reserved by BIRIDERPRO
        </Typography>
      </Box>
    </Grid>
  );
};

export default Footer;
