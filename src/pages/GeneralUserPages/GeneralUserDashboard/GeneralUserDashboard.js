import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import GeneralUserRoute from '../../AdminPages/AdminRoute/AdminRoute';
import AddReview from '../AddReview/AddReview';
import GeneralUserHeader from '../GeneralUserHeader/GeneralUserHeader';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';

const GeneralUserDashboard = () => {
  let { path } = useRouteMatch();
  const { user } = useAuth();
  console.log(user);

  return (
    <>
      <GeneralUserHeader />
      hello from
      <Switch>
        {/* <GeneralUserRoute path={path}>
          <Box className="center">
            <Typography variant="h5">
              Welcome {user.displayName}, explore your dashboard
            </Typography>
          </Box>
        </GeneralUserRoute> */}
        <GeneralUserRoute path={`${path}/pay`}>
          <Pay />
        </GeneralUserRoute>
        <GeneralUserRoute path={`${path}/myorders`}>
          <MyOrders />
        </GeneralUserRoute>
        <GeneralUserRoute path={`${path}/addreview`}>
          <AddReview />
        </GeneralUserRoute>
      </Switch>
    </>
  );
};

export default GeneralUserDashboard;
