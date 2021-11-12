import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { Avatar, Chip, TableCell, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import RejectOrder from './RejectOrder/RejectOrder';
import ShipOrder from './ShipOrder/ShipOrder';

const OrderTableRow = ({ order, handleOrderShipping, handleRejectOrder }) => {
  const [bike, setBike] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://guarded-sierra-90712.herokuapp.com/bikes/${order.product_id}`
      )
      .then((response) => setBike(response.data));
  }, [order.product_id]);

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>
        <Avatar
          alt={bike.name}
          src={bike.image}
          sx={{ width: 56, height: 56 }}
        />
        <Typography
          variant="h6"
          sx={{ color: 'info.main', fontWeight: 'bold' }}
        >
          ${bike.price}
        </Typography>
      </TableCell>

      <TableCell align="right">
        <div>{order.name}</div>
        <div>{order.email}</div>
      </TableCell>

      <TableCell align="right">
        {order.status === 'pending' ? (
          <Chip label={order.status} color="warning" variant="outlined" />
        ) : (
          <Chip label="shipped" color="success" variant="outlined" />
        )}
      </TableCell>

      {/* popup for shipping an order */}
      <TableCell align="right">
        {order.status === 'pending' ? (
          <ShipOrder id={order._id} handleOrderShipping={handleOrderShipping} />
        ) : (
          <CheckCircleOutlineOutlinedIcon color="success" fontSize="large" />
        )}
      </TableCell>

      <TableCell align="right">
        {/* popup for deleting an order */}
        <RejectOrder id={order._id} handleRejectOrder={handleRejectOrder} />
      </TableCell>
    </TableRow>
  );
};

export default OrderTableRow;
