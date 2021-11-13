import { Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';

const Pay = () => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 220px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 3,
        flexDirection: 'column',
      }}
    >
      <img
        src="https://paycove.io/images/undraw_make_it_rain.svg"
        alt="profile"
        height="380"
        sx={{ mb: 3 }}
      />
      <Typography variant="h5">payment options coming soon</Typography>
    </Box>
  );
};

export default Pay;
