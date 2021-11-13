import { Alert, Snackbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useState } from 'react';
// import axios from 'axios';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post('https://guarded-sierra-90712.herokuapp.com/bikes', data)
      .then(() => {
        setOpen(true);
      });
  };

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 220px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 3,
        flexDirection: 'column',
      }}
    >
      <Snackbar
        sx={{ mt: 7 }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          product successfully added
        </Alert>
      </Snackbar>
      <Box className="form__container">
        <Typography variant="h5">Add Product</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name of the product */}
          <div className="input__box">
            <input
              placeholder="product name"
              {...register('name', {
                required: 'this field is required',
                minLength: {
                  value: 3,
                  message: 'product name should be bigger than 3 characters',
                },
                maxLength: {
                  value: 15,
                  message: 'Product name should be within 15 characters',
                },
              })}
            />
          </div>
          {errors.name && (
            <Alert severity="error" variant="outlined">
              {errors.name.message}
            </Alert>
          )}

          <div className="input__box">
            <textarea
              placeholder="about the Product"
              {...register('desc', {
                required: 'this field is required',
                minLength: {
                  value: 3,
                  message: 'at least add something about the product',
                },
                maxLength: {
                  value: 50,
                  message: "don't add too much info about the product.",
                },
              })}
            />
          </div>

          {errors.desc && (
            <Alert severity="error" variant="outlined">
              {errors.desc.message}
            </Alert>
          )}

          {/* price of the product */}
          <div className="input__box">
            <input
              type="number"
              placeholder="product price"
              {...register('price', {
                required: 'this field is required',
                min: {
                  value: 1000,
                  message: 'price should be between 1000 to 50000',
                },
                max: {
                  value: 50000,
                  message: 'rating should be between 1000 to 50000',
                },
              })}
            />
          </div>
          {errors.price && (
            <Alert severity="error" variant="outlined">
              {errors.price.message}
            </Alert>
          )}

          {/* image url of the product */}
          <div className="input__box">
            <input
              placeholder="Image url"
              {...register('image', {
                required: 'this field is required',
                pattern: {
                  value: /(https?:)?\/\/?[^'"<>]+?\.(jpg|jpeg|gif|png)/,
                  message: 'sorry! this is not an image url',
                },
              })}
            />
          </div>
          {errors.image && (
            <Alert severity="error" variant="outlined">
              {errors.image.message}
            </Alert>
          )}

          <button type="submit" className="submit__btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </Box>
    </Box>
  );
};

export default AddProduct;
