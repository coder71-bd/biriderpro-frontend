import { Alert, Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../Header/Header';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { processSignIn, setAuthError, authError } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    processSignIn(data.email, data.password, location, navigate);
  };

  const handleClose = () => {
    setAuthError('');
  };

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 220px)',
      }}
    >
      <Header />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 350px)',
          mt: 3,
        }}
      >
        <Box className="form__container">
          <Typography variant="h5" sx={{ mb: 3 }}>
            Login
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register('password', {
                  required: 'this field is required',
                  minLength: {
                    value: 6,
                    message: 'Your password should be at least 6 characters',
                  },
                })}
              />
            </div>
            {errors.password && (
              <Alert severity="error" variant="outlined">
                {errors.password.message}
              </Alert>
            )}

            {/* go to register page */}
            <Typography variant="subtitle2">
              <span style={{ paddingRight: 3 }}>Dont't have an account</span>
              <Link to="/register">create one</Link>
            </Typography>

            <button type="submit" className="submit__btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Login
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
      </Box>
    </Box>
  );
};

export default Login;
