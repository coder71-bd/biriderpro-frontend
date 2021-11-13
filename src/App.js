import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider/AuthProvider';
import AddProduct from './pages/AdminPages/AddProduct/AddProduct';
import AdminHeader from './pages/AdminPages/AdminHeader/AdminHeader';
import MakeAdmin from './pages/AdminPages/MakeAdmin/MakeAdmin';
import ManageAllOrders from './pages/AdminPages/ManageAllOrders/ManageAllOrders';
import ManageAllProducts from './pages/AdminPages/ManageAllProducts/ManageAllProducts';
import GeneralUserDashboard from './pages/GeneralUserPages/GeneralUserDashboard/GeneralUserDashboard';
import Explore from './pages/SharedPages/Explore/Explore';
import Footer from './pages/SharedPages/Footer/Footer';
import Home from './pages/SharedPages/Home/Home';
import Login from './pages/SharedPages/Login/Login';
import PrivateRoute from './pages/SharedPages/PrivateRoute/PrivateRoute';
import Purchase from './pages/SharedPages/Purchase/Purchase';
import Register from './pages/SharedPages/Register/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <AdminHeader />
        <Switch>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/purchase/:id">
            <Purchase />
          </PrivateRoute>
          <PrivateRoute path="/addproduct">
            <AddProduct />
          </PrivateRoute>
          <PrivateRoute path="/makeadmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/manageallorders">
            <ManageAllOrders />
          </PrivateRoute>
          <PrivateRoute path="/manageallproducts">
            <ManageAllProducts />
          </PrivateRoute>
          <PrivateRoute path="/user">
            <GeneralUserDashboard />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
