import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  const { id } = useParams();
  const [bike, setBike] = useState({});
  useEffect(() => {
    axios
      .get(`https://guarded-sierra-90712.herokuapp.com/bikes/${id}`)
      .then((response) => setBike(response.data));
  }, [id]);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyCcontent: 'center',
        alignItems: 'center',
        my: 3,
      }}
      style={{ minHeight: 'calc(100vh - 270px)' }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: '95%', mx: 'auto' }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: 'info.main' }}
              >
                {bike.name}
              </Typography>
              <Typography variant="h5" sx={{ color: 'error.main' }}>
                ${bike.price}
              </Typography>
            </CardContent>
            <CardMedia component="img" image={bike.image} alt={bike.name} />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} sx={{ backgroundColor: 'blue' }}></Grid>
      </Grid>
    </Box>
  );
};

export default Purchase;
