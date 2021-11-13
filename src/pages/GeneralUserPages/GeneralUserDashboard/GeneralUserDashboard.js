import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AddReview from '../AddReview/AddReview';
import GeneralUserHeader from '../GeneralUserHeader/GeneralUserHeader';
import GeneralUserRoute from '../GeneralUserRoute/GeneralUserRoute';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';

const GeneralUserDashboard = () => {
  let { path } = useRouteMatch();
  const { user } = useAuth();
  console.log(user);

  return (
    <>
      <GeneralUserHeader />
      <Switch>
        <GeneralUserRoute path={`${path}/pay`}>
          <Pay />
        </GeneralUserRoute>
        <GeneralUserRoute path={`${path}/myorders`}>
          <MyOrders />
        </GeneralUserRoute>
        <GeneralUserRoute path={`${path}/addreview`}>
          <AddReview />
        </GeneralUserRoute>
        <GeneralUserRoute exact path={path}>
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
        </GeneralUserRoute>
      </Switch>
    </>
  );
};

export default GeneralUserDashboard;
