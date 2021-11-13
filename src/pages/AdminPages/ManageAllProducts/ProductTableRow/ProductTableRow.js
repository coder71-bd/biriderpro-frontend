import { Avatar, TableCell, TableRow, Typography } from '@mui/material';
import DeleteProduct from './DeleteProduct/DeleteProduct';

const ProductTableRow = ({ product, handleDeleteProduct }) => {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="left">
        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
          {product.name}
        </Typography>
      </TableCell>

      <TableCell>
        <Avatar
          alt={product.name}
          src={product.image}
          sx={{ width: 100, height: 100 }}
        />
      </TableCell>

      <TableCell align="right">
        <div>${product.price}</div>
      </TableCell>

      <TableCell align="right">
        {/* popup for deleting an order */}
        <DeleteProduct
          id={product._id}
          handleDeleteProduct={handleDeleteProduct}
        />
      </TableCell>
    </TableRow>
  );
};

export default ProductTableRow;
