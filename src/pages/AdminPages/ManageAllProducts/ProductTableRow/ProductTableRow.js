import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import {
  Avatar,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DeleteProduct from './DeleteProduct/DeleteProduct';

const ProductTableRow = ({ product, handleDeleteProduct }) => {
  const [bike, setBike] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://guarded-sierra-90712.herokuapp.com/bikes/${product.product_id}`
      )
      .then((response) => setBike(response.data));
  }, [product.product_id]);

  //for done icon in chip
  const handleDelete = () => {};

  const deleteOrderButton = () => (
    <IconButton>
      <DeleteForeverSharpIcon color="error" fontSize="large" />
    </IconButton>
  );

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>
        <Typography
          variant="h6"
          sx={{ color: 'info.main', fontWeight: 'bold' }}
        >
          ${bike.name}
        </Typography>
      </TableCell>

      <TableCell>
        <Avatar
          alt={bike.name}
          src={bike.image}
          sx={{ width: 56, height: 56 }}
        />
      </TableCell>

      <TableCell align="right">
        <div>{product.price}</div>
      </TableCell>

      <TableCell align="right">
        {/* popup for deleting an order */}
        <DeleteProduct
          id={product._id}
          handleDeleteProduct={handleDeleteProduct}
          deleteOrderButton={deleteOrderButton}
        />
      </TableCell>
    </TableRow>
  );
};

export default ProductTableRow;
