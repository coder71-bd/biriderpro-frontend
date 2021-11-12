import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from '@mui/material';
import React, { useState } from 'react';

const DeleteProduct = ({ id, handleDeleteProduct, deleteOrderButton }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* reject order button */}
      <div onClick={handleOpen}>{deleteOrderButton}</div>

      {/* reject order popup */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Alert severity="error">Do you want to delte this product?</Alert>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="success" onClick={handleClose}>
            No
          </Button>
          <div onClick={handleClose}>
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleDeleteProduct(id)}
              autoFocus
            >
              Yes
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteProduct;
