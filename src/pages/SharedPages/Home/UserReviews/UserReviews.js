import { Paper } from '@material-ui/core';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import {
  Avatar,
  CircularProgress,
  Container,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import useReviews from '../../../../hooks/useReviews';
const UserReviews = () => {
  const [reviews] = useReviews();

  if (reviews.length === 0) {
    return <CircularProgress />;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 3 }}>
      <Typography variant="h5">Happy Customers Says</Typography>
      <Paper elevation={10}>
        <Carousel
          IndicatorIcon={<HorizontalRuleIcon fontSize="large" sx={{ mt: 4 }} />}
        >
          {reviews.map((review) => (
            <Stack key={review._id} spacing={2} alignItems="center">
              <Avatar
                alt={review.name}
                src={review.image}
                sx={{ width: 72, height: 72 }}
              />
              <h2>{review.name}</h2>
              <Rating name="read-only" value={review.rating} readOnly />
              <Typography
                variant="subtitle2"
                sx={{ mb: 3, textAlign: 'center', maxWidth: 400 }}
              >
                {review.message}
              </Typography>
            </Stack>
          ))}
        </Carousel>
      </Paper>
    </Container>
  );
};

export default UserReviews;
