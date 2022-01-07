import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import {
  Avatar,
  CircularProgress,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import Carousel from 'react-material-ui-carousel';
import reviewImg from '../../../../../src/images/review/review.jpg';
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
    <Container>
      <Grid
        container
        sx={{ justifyContent: 'space-evenly', alignItems: 'center', my: 3 }}
      >
        <Grid item xs={12} md={6}>
          <img src={reviewImg} alt="reviews" style={{ width: '100%' }} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            mt: { xs: 3, md: 0 },
            border: '1px solid #d50000',
            borderRadius: 5,
            p: 2,
          }}
        >
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
                  <Rating
                    name="read-only"
                    value={parseInt(review.rating)}
                    readOnly
                  />
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserReviews;
