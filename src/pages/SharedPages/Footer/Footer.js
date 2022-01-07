import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { cyan, deepOrange, purple, red } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import appstore from '../../../images/appstore.png';
import playstore from '../../../images/playstore.png';

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: red[500],
          p: 3,
        }}
      >
        <Grid container spacing={4} sx={{ color: '#fff' }}>
          <Grid item xs={12} sm={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="contained" color="info" sx={{ p: 2 }}>
                <MailOutlineIcon />
              </Button>
              <TextField
                type="text"
                placeholder="Your Email Address"
                sx={{
                  borderRadius: 'none',
                  width: '80%',
                  border: `2px solid ${cyan[300]}`,
                  outline: 0,
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box>
              <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 600 }}>
                Latest news and update
              </Typography>
              <Box
                variant="subtitle1"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <MailOutlineIcon />
                <Typography sx={{ ml: 1 }}>
                  Subscribe Our News later , Get In Touch With Us.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container sx={{ backgroundColor: deepOrange[200] }}>
        <Grid
          item
          xs={5}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
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
      </Grid>
    </Box>
  );
};

export default Footer;
