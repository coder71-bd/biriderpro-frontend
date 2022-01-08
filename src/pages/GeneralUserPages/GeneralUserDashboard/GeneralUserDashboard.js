import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import GeneralUserHeader from '../GeneralUserHeader/GeneralUserHeader';

const GeneralUserDashboard = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();

  return (
    <>
      <GeneralUserHeader />
      {(pathname === '/user' || pathname === '/user/') && (
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
            src={
              user.photoURL
                ? user.photoURL
                : 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
            }
            alt="profile"
            height="380"
            sx={{ mb: 3 }}
          />
          <Typography variant="h5">
            Welcome {user.displayName}, explore your dashboard
          </Typography>
        </Box>
      )}
      <Outlet />
    </>
  );
};

export default GeneralUserDashboard;
