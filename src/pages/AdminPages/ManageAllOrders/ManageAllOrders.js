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
import axios from 'axios';
import { useEffect, useState } from 'react';
import OrderTableRow from './OrderTableRow/OrderTableRow';

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get('https://guarded-sierra-90712.herokuapp.com/orders')
      .then((response) => {
        console.log(response.data);
        setOrders(response.data);
      });
  }, []);

  if (orders.length === 0) {
    return <CircularProgress />;
  }

  const handleOrderShipping = (id) => {
    console.log(id);
    // axios
    //   .put(`https://guarded-sierra-90712.herokuapp.com/order/${id}`)
    //   .then(() => {
    //     axios
    //       .get('https://guarded-sierra-90712.herokuapp.com/order')
    //       .then((response) => console.log(response.data));
    //   });
  };

  const handleRejectOrder = (id) => {
    console.log(id);
    // axios
    //   .delete(`https://guarded-sierra-90712.herokuapp.com/order/${id}`)
    //   .then(() => {
    //     const filteredOrder = orders.filter((order) => order._id !== id);
    //     setOrders(filteredOrder);
    //   });
  };

  return (
    <>
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
              <>
                <OrderTableRow
                  key={order._id}
                  order={order}
                  handleRejectOrder={handleRejectOrder}
                  handleOrderShipping={handleOrderShipping}
                />
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ManageAllOrders;
