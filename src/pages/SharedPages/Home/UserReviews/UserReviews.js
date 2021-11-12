import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import {
  Avatar,
  CircularProgress,
  Container,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import Carousel from 'react-material-ui-carousel';
import useReviews from '../../../../hooks/useReviews';
const UserReviews = () => {
  const [reviews] = useReviews();

  if (reviews.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 3 }}>
      <Box>
        <Carousel IndicatorIcon={<HorizontalRuleIcon fontSize="large" />}>
          {reviews.map((review) => (
            <Box key={review._id} sx={{ boxShadow: 3 }}>
              <Stack spacing={2} alignItems="center">
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
            </Box>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};

export default UserReviews;
