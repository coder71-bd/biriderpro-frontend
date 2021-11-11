import { Alert, Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../Header/Header';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { processSignUp, setAuthError, authError } = useAuth();

  const history = useHistory();

  const onSubmit = (data) => {
    if (data.password1 !== data.password2) {
      alert("your password didn't match");
      return;
    }

    processSignUp(data.email, data.password1, data.name, history);
  };

  const handleClose = () => {
    setAuthError('');
  };

  return (
    <>
      <Header />
      <Box className="form__container">
        <Typography variant="h5" sx={{ mb: 3 }}>
          Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name of the user */}
          <div className="input__box">
            <input
              placeholder="name"
              {...register('name', {
                required: 'this is a required field',
                minLength: {
                  value: 3,
                  message: 'Your name should be at least 3 characters',
                },
                maxLength: {
                  value: 20,
                  message: 'Your name should be within 20 characters',
                },
              })}
            />
          </div>
          {errors.name && (
            <Alert severity="error" variant="outlined">
              {errors.name.message}
            </Alert>
          )}

          {/* email of the user */}
          <div className="input__box">
            <input
              placeholder="Email"
              {...register('email', {
                required: 'this is a required field',
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Please provide correct email address.',
                },
              })}
            />
          </div>
          {errors.email && (
            <Alert severity="error" variant="outlined">
              {errors.email.message}
            </Alert>
          )}

          {/* password of the user */}
          <div className="input__box">
            <input
              type="password"
              placeholder="password"
              {...register('password1', {
                required: 'this field is required',
                minLength: {
                  value: 6,
                  message: 'Your password should be at least 6 characters',
                },
              })}
            />
          </div>
          {errors.password1 && (
            <Alert severity="error" variant="outlined">
              {errors.password1.message}
            </Alert>
          )}

          {/* password retype box */}
          <div className="input__box">
            <input
              type="password"
              placeholder="retype your password"
              {...register('password2', {
                required: 'this field is required',
                minLength: {
                  value: 6,
                  message: 'Your password should be at least 6 characters',
                },
              })}
            />
          </div>
          {errors.password2 && (
            <Alert severity="error" variant="outlined">
              {errors.password2.message}
            </Alert>
          )}

          {/* go to login page */}
          <Typography variant="subtitle2">
            <span style={{ paddingRight: 3 }}>Already Registerd?</span>
            <Link to="/login">Login here</Link>
          </Typography>

          <button type="submit" className="submit__btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Register
          </button>

          {/* show the firebase error */}
          {authError && (
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: '100%', mt: 3 }}
            >
              {authError}
            </Alert>
          )}
        </form>
      </Box>
    </>
  );
};

export default Register;
