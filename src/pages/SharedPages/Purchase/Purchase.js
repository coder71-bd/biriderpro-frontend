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
  const { user } = useAuth();

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
    const order_time = new Date().toLocaleDateString();
    const newOrder = { ...data, order_time, product_id: id };
    console.log(newOrder);
    // axios
    //   .post('https://guarded-sierra-90712.herokuapp.com/orders', data)
    //   .then((response) => {
    //     history.push('/myorders');
    //     console.log(response.data);
    //     alert('review successfully added');
    //   });
  };

  return (
    <>
      <Header />
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
          <Grid item xs={12} md={6} sx={{ backgroundColor: 'blue' }}>
            <div className="form__container">
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

                {errors.desc && (
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
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Purchase;
