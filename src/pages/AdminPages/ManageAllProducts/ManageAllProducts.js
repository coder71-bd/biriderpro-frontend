import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductTableRow from './ProductTableRow/ProductTableRow';

const ManageAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://guarded-sierra-90712.herokuapp.com/bikes')
      .then((response) => setProducts(response.data));
  }, []);

  //if no products available
  if (products.length === 0) {
    return (
      <Box
        sx={{
          minHeight: 'calc(100vh - 220px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5">
          You have no product in your website. Add products in your website
        </Typography>
      </Box>
    );
  }

  const handleDeleteProduct = (id) => {
    axios
      .delete(`https://guarded-sierra-90712.herokuapp.com/bikes/${id}`)
      .then(() => {
        axios
          .delete(
            `https://guarded-sierra-90712.herokuapp.com/orders/deleteall/${id}`
          )
          .then((response) => console.log(response.data));

        const filteredOrder = products.filter((order) => order._id !== id);
        setProducts(filteredOrder);
      });
  };

  return (
    <Box sx={{ mt: 3, minHeight: 'calc(100vh - 220px)' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                Product name
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                image
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                price
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
            {products.map((product) => (
              <ProductTableRow
                key={product._id}
                product={product}
                handleDeleteProduct={handleDeleteProduct}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageAllProducts;
