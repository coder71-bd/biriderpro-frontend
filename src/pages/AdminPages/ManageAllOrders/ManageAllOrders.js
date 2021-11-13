import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import OrderTableRow from './OrderTableRow/OrderTableRow';

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get('https://guarded-sierra-90712.herokuapp.com/orders')
      .then((response) => setOrders(response.data));
  }, []);

  if (orders.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  const handleOrderShipping = (id) => {
    axios
      .put(`https://guarded-sierra-90712.herokuapp.com/order/${id}`)
      .then((response) => {
        if (response.data.modifiedCount === 1) {
          axios
            .get('https://guarded-sierra-90712.herokuapp.com/orders')
            .then((response) => setOrders(response.data));
        }
      });
  };

  const handleRejectOrder = (id) => {
    axios
      .delete(`https://guarded-sierra-90712.herokuapp.com/orders/${id}`)
      .then(() => {
        const filteredOrder = orders.filter((order) => order._id !== id);
        setOrders(filteredOrder);
      });
  };

  return (
    <Box sx={{ mt: 3, minHeight: 'calc(100vh - 220px)' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                Customer
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                OrderInfo
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                Status
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                Ship Order
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <OrderTableRow
                key={order._id}
                order={order}
                handleRejectOrder={handleRejectOrder}
                handleOrderShipping={handleOrderShipping}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageAllOrders;
