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
import ProductTableRow from './ProductTableRow/ProductTableRow';

const ManageAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://guarded-sierra-90712.herokuapp.com/bikes')
      .then((response) => setProducts(response.data));
  }, []);

  if (products.length === 0) {
    return <CircularProgress />;
  }

  const handleDeleteProduct = (id) => {
    axios
      .delete(`https://guarded-sierra-90712.herokuapp.com/bikes/${id}`)
      .then(() => {
        const filteredOrder = products.filter((order) => order._id !== id);
        setProducts(filteredOrder);
      });
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                align="right"
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                Product name
              </TableCell>
              <TableCell
                align="right"
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
              <>
                <ProductTableRow
                  key={product._id}
                  product={product}
                  handleDeleteProduct={handleDeleteProduct}
                />
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ManageAllProducts;
