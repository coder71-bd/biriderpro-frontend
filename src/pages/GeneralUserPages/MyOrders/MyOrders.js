import { Alert, Grid, Snackbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
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
      <Box
        sx={{
          minHeight: 'calc(100vh - 220px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 3,
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5">You haven't Ordered any bike yet.</Typography>
        <NavLink to="/explore">
          <button className="submit__btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Order Now
          </button>
        </NavLink>
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
    <Box sx={{ minHeight: 'calc(100vh - 220px)', mt: 3 }}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Order successfully deleted
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
    </Box>
  );
};

export default MyOrders;
