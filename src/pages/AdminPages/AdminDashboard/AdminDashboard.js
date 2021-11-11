import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminRoute from '../AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';

const AdminDashboard = () => {
  let { path } = useRouteMatch();
  console.log(path);
  return (
    <>
      <AdminHeader />
      <Switch>
        <AdminRoute exact path={path}>
          <div>this is homepage</div>
        </AdminRoute>
        <AdminRoute path={`${path}/makeadmin`}>
          <MakeAdmin />
        </AdminRoute>
        <AdminRoute path={`${path}/addproduct`}>
          <AddProduct />
        </AdminRoute>
        <AdminRoute path={`${path}/manageallorders`}>
          <ManageAllOrders />
        </AdminRoute>
        <AdminRoute path={`${path}/manageallproducts`}>
          <ManageAllProducts />
        </AdminRoute>
      </Switch>
    </>
  );
};

export default AdminDashboard;
