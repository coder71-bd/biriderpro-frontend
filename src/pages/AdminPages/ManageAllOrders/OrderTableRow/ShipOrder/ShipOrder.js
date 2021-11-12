import DoneIcon from '@mui/icons-material/Done';
import {
  Alert,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
} from '@mui/material';
import { useState } from 'react';

const ShipOrder = ({ id, handleOrderShipping }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //for icon in chip
  const handleDelete = () => {};
  const handleClick = () => {};

  return (
    <>
      {/* order shipping button */}
      <div onClick={handleOpen}>
        <Chip
          label="ship now"
          color="info"
          variant="outlined"
          onDelete={handleDelete}
          onClick={handleClick}
          deleteIcon={<DoneIcon />}
        />
      </div>

      {/* order shipping popup */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Alert severity="info">Do you want to ship the order?</Alert>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="success" onClick={handleClose}>
            No
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleOrderShipping(id)}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ShipOrder;
