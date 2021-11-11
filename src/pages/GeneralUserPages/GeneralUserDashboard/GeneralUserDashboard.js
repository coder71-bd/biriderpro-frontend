import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import AdminRoute from '../../AdminPages/AdminRoute/AdminRoute';
import AddReview from '../AddReview/AddReview';
import GeneralUserHeader from '../GeneralUserHeader/GeneralUserHeader';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';

const GeneralUserDashboard = () => {
  let { path } = useRouteMatch();

  return (
    <>
      <GeneralUserHeader />
      <Switch>
        <AdminRoute exact path={path}>
          <div>this is user homepage</div>
        </AdminRoute>
        <AdminRoute path={`${path}/pay`}>
          <Pay />
        </AdminRoute>
        <AdminRoute path={`${path}/myorders`}>
          <MyOrders />
        </AdminRoute>
        <AdminRoute path={`${path}/addreview`}>
          <AddReview />
        </AdminRoute>
      </Switch>
    </>
  );
};

export default GeneralUserDashboard;
