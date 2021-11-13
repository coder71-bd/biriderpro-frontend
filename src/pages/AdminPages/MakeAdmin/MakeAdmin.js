import { Typography } from '@material-ui/core';
import { Alert, Snackbar } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
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
    const makeAdminData = {
      requester: user.email,
      ...data,
    };
    axios
      .put(
        'https://guarded-sierra-90712.herokuapp.com/users/admin',
        makeAdminData
      )
      .then((response) => {
        if (response.data.modifiedCount === 0) {
          alert(
            'The admin allready exist or make sure the user exist in database.'
          );
        } else {
          setOpen(true);
          reset();
        }
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
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          new Admin successfully made
        </Alert>
      </Snackbar>
      <Box className="form__container">
        <Typography variant="h5">Make Admin</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* new admin email */}
          <div className="input__box">
            <input
              placeholder="New Admin Email"
              {...register('newAdminEmail', {
                required: 'this is a required field',
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Please provide correct email address.',
                },
              })}
            />
          </div>
          {errors.newAdminEmail && (
            <Alert severity="error" variant="outlined">
              {errors.newAdminEmail.message}
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

export default MakeAdmin;
