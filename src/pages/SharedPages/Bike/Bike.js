import ControlPointIcon from '@mui/icons-material/ControlPoint';
import StarIcon from '@mui/icons-material/Star';
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from '@mui/material';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';

const Bikes = ({ bike }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/purchase/${bike._id}`);
  };
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
          sx={{ color: 'primary.main' }}
        >
          {bike.name}
        </Typography>

        <Rating
          value={3}
          readOnly
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />

        <Typography sx={{ typography: 'subtitle2', my: 2 }}>
          {bike.desc}
        </Typography>
        <Typography variant="h5" sx={{ color: 'info.main' }}>
          ${bike.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className="submit__btn"
          variant="contained"
          sx={{ backgroundColor: 'primary.main' }}
          onClick={handleClick}
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
