import { Typography } from '@material-ui/core';
import { Alert } from '@mui/material';
// import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const AddProduct = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // axios
    //   .post('https://guarded-sierra-90712.herokuapp.com/bikes', data)
    //   .then((response) => {
    //     history.push('/explore');
    //     console.log(response.data);
    //   });
  };

  return (
    <div className="form__container">
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
                value: 25,
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
    </div>
  );
};

export default AddProduct;
