import { Typography } from '@material-ui/core';
import { Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(user.email);
    console.log(data);
  };

  return (
    <div className="form__container">
      <Typography variant="h5">Make Admin</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* new admin email */}
        <div className="input__box">
          <input
            placeholder="New Admin Email"
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

        <button type="submit" className="submit__btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;
