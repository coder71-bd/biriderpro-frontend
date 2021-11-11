import ControlPointIcon from '@mui/icons-material/ControlPoint';
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Card from '@mui/material/Card';

const Bikes = ({ bike }) => {
  return (
    <Card sx={{ maxWidth: 375, mx: 'auto' }}>
      <CardMedia
        component="img"
        height="240"
        image={bike.image}
        alt={bike.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: 'info.main' }}
        >
          {bike.name}
        </Typography>

        <Typography sx={{ typography: 'subtitle2', mb: 3 }}>
          {bike.desc}
        </Typography>
        <Typography variant="h5" sx={{ color: 'error.main' }}>
          ${bike.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className="submit__btn"
          variant="contained"
          sx={{ backgroundColor: 'info.main' }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Typography
            variant="h6"
            sx={{ px: 3, display: 'flex', alignItems: 'center' }}
          >
            <ControlPointIcon sx={{ mr: 2 }} />
            Purchase
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Bikes;
