import { Typography } from '@material-ui/core';
import { Alert, Snackbar } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, name: user.displayName, email: user.email };

    axios
      .post('https://guarded-sierra-90712.herokuapp.com/reviews', newData)
      .then(() => {
        setOpen(true);
        reset();
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 250px)',
        mt: 3,
      }}
    >
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Thanks for giving us a review
        </Alert>
      </Snackbar>
      <Box className="form__container">
        <Typography variant="h5">Add Review</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name of the user */}
          <div className="input__box">
            <input value={user.displayName} readOnly />
          </div>

          <div className="input__box">
            <textarea
              placeholder="Share your thoughts"
              {...register('message', {
                required: 'this field is required',
                minLength: {
                  value: 3,
                  message: 'at least write something about our service',
                },
                maxLength: {
                  value: 30,
                  message: 'Please share your thoughts within 30 words',
                },
              })}
            />
          </div>

          {errors.desc && (
            <Alert severity="error" variant="outlined">
              {errors.message.message}
            </Alert>
          )}

          {/* rating of the user */}
          <div className="input__box">
            <input
              type="number"
              placeholder="Give rating between 0 to 5"
              {...register('rating', {
                required: 'this field is required',
                min: {
                  value: 0,
                  message: 'Give rating between 0 to 5',
                },
                max: {
                  value: 5,
                  message: 'Gvie rating between 0 to 5',
                },
              })}
            />
          </div>
          {errors.rating && (
            <Alert severity="error" variant="outlined">
              {errors.rating.message}
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

export default AddReview;
