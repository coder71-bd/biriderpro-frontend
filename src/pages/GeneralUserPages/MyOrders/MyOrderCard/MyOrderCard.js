import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CancelOrderModal from './CancelOrderModal/CancelOrderModal';

const MyOrderCard = ({ myOrder, handleCancelOrder }) => {
  const [bike, setBike] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://guarded-sierra-90712.herokuapp.com/bikes/${myOrder.product_id}`
      )
      .then((response) => setBike(response.data));
  }, [myOrder.product_id]);

  const cancelOrderButton = (
    <IconButton>
      <DeleteForeverSharpIcon color="error" fontSize="large" />
    </IconButton>
  );

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ maxWidth: 450, mx: 'auto' }}>
        <CardHeader
          action={
            <CancelOrderModal
              id={myOrder._id}
              handleCancelOrder={handleCancelOrder}
              cancelOrderButton={cancelOrderButton}
            />
          }
          subheader={`will be shipped on ${myOrder.order_time}`}
        />

        <CardMedia
          component="img"
          height="194"
          image={bike.image}
          alt={bike.name}
        />
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" color="primary">
            ${bike.price}
          </Typography>

          <Typography variant="subtitle2">{bike.name}</Typography>

          {myOrder.status === 'pending' ? (
            <Chip label={myOrder.status} color="warning" variant="outlined" />
          ) : (
            <Chip label={myOrder.status} color="success" variant="outlined" />
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};
export default MyOrderCard;
