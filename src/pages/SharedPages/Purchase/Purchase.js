import {
  Alert,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../Header/Header';

const Purchase = () => {
  const [bike, setBike] = useState({});

  const { id } = useParams();
  const history = useHistory();
  const { user, admin } = useAuth();

  useEffect(() => {
    axios
      .get(`https://guarded-sierra-90712.herokuapp.com/bikes/${id}`)
      .then((response) => setBike(response.data));
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const order_time = new Date().toDateString();
    const newOrder = {
      name: user.displayName,
      email: user.email,
      order_time,
      product_id: id,
      ...data,
    };
    if (admin) {
      alert("You're admin. you don't have to buy products");
    } else {
      axios
        .post('https://guarded-sierra-90712.herokuapp.com/orders', newOrder)
        .then(() => {
          history.push('/user/myorders');
        });
    }
  };

  return (
    <>
      {!admin && <Header />}
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
                  sx={{ color: 'primary.main' }}
                >
                  {bike.name}
                </Typography>
                <Typography variant="h5" sx={{ color: 'info.main' }}>
                  ${bike.price}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                image={bike.image}
                alt={bike.name}
                sx={{
                  maxHeight: 350,
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="form__container" sx={{ mx: 'auto', width: '90%' }}>
              <Typography variant="h5">Add Product</Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* name of the user */}
                <div className="input__box">
                  <input value={user.displayName} readOnly />
                </div>

                {/* email of the user */}
                <div className="input__box">
                  <input value={user.email} readOnly />
                </div>

                <div className="input__box">
                  <textarea
                    placeholder="Your address"
                    {...register('address', {
                      required: 'this field is required',
                      minLength: {
                        value: 3,
                        message: 'Please give more long address',
                      },
                    })}
                  />
                </div>

                {errors.address && (
                  <Alert severity="error" variant="outlined">
                    {errors.address.message}
                  </Alert>
                )}

                {/* rating of the food */}
                <div className="input__box">
                  <input
                    placeholder="Your Phone"
                    {...register('phone', {
                      required: 'this field is required',
                    })}
                  />
                </div>
                {errors.phone && (
                  <Alert severity="error" variant="outlined">
                    {errors.phone.message}
                  </Alert>
                )}

                <button type="submit" className="submit__btn">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Purchase
                </button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Purchase;
