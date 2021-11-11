import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminRoute from '../AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const AdminHome = () => {
  let { path } = useRouteMatch();
  return (
    <>
      <AdminHeader />
      <Switch>
        <AdminRoute exact path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
      </Switch>
      <div>this is admin home page</div>
    </>
  );
};

export default AdminHome;
