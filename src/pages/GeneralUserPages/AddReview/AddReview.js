import { Typography } from '@material-ui/core';
import { Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, email: user.email };
    console.log(newData);
    // axios
    //   .post('https://guarded-sierra-90712.herokuapp.com/reviews', data)
    //   .then((response) => {
    //     alert('review successfully added');
    //   });
  };

  return (
    <div className="form__container">
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

        {/* rating of the food */}
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
    </div>
  );
};

export default AddReview;
