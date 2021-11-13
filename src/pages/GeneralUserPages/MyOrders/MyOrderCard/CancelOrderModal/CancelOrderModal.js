import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from '@mui/material';
import { useState } from 'react';

const DeleteOrderModal = ({ id, handleCancelOrder, cancelOrderButton }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* cancel order button */}
      <div onClick={handleOpen}>{cancelOrderButton}</div>

      {/* cancel order popup */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Alert severity="error">Do you want to delete this order?</Alert>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="success"
            onClick={handleClose}
            sx={{ mr: 2 }}
          >
            No
          </Button>
          <div onClick={handleClose}>
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleCancelOrder(id)}
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

export default DeleteOrderModal;
