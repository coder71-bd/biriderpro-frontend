import { Button, Typography } from '@material-ui/core';
import { Alert, Grid, Snackbar } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrderCard from './MyOrderCard/MyOrderCard';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(
        `https://guarded-sierra-90712.herokuapp.com/orders/?email=${user.email}`
      )
      .then((response) => setMyOrders(response.data));
  }, [user.email]);

  // no bike ordered by user
  if (myOrders.length === 0) {
    return (
      <Box>
        <Typography variant="h5">You haven't Ordered any bike yet.</Typography>
        <Button variant="contained" className="submit__btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Order Now
        </Button>
      </Box>
    );
  }

  const handleCancelOrder = (id) => {
    axios
      .delete(`https://guarded-sierra-90712.herokuapp.com/orders/${id}`)
      .then(() => {
        const filteredOrders = myOrders.filter((order) => order._id !== id);
        setMyOrders(filteredOrders);
        setOpen(true);
      });
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Successfully cancel the order
        </Alert>
      </Snackbar>
      <Grid container spacing={3}>
        {myOrders.map((myOrder) => (
          <MyOrderCard
            key={myOrder._id}
            myOrder={myOrder}
            handleCancelOrder={handleCancelOrder}
          />
        ))}
      </Grid>
    </>
  );
};

export default MyOrders;
