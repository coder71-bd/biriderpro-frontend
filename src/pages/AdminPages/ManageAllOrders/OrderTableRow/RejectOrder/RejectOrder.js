import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
} from '@mui/material';
import { useState } from 'react';

const RejectOrder = ({ id, handleRejectOrder }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* reject order button */}
      <div onClick={handleOpen}>
        <IconButton>
          <DeleteForeverIcon color="error" fontSize="large" />
        </IconButton>
      </div>
      {/* reject order popup */}
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
            sx={{ mr: 2 }}
            variant="outlined"
            color="success"
            onClick={handleClose}
          >
            No
          </Button>
          <div onClick={handleClose}>
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleRejectOrder(id)}
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

export default RejectOrder;
