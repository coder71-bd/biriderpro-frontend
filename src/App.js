import { Box } from '@mui/system';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider/AuthProvider';
import AddProduct from './pages/AdminPages/AddProduct/AddProduct';
import AdminHeader from './pages/AdminPages/AdminHeader/AdminHeader';
import AdminRoute from './pages/AdminPages/AdminRoute/AdminRoute';
import MakeAdmin from './pages/AdminPages/MakeAdmin/MakeAdmin';
import ManageAllOrders from './pages/AdminPages/ManageAllOrders/ManageAllOrders';
import ManageAllProducts from './pages/AdminPages/ManageAllProducts/ManageAllProducts';
import AddReview from './pages/GeneralUserPages/AddReview/AddReview';
import GeneralUserDashboard from './pages/GeneralUserPages/GeneralUserDashboard/GeneralUserDashboard';
import GeneralUserRoute from './pages/GeneralUserPages/GeneralUserRoute/GeneralUserRoute';
import MyOrders from './pages/GeneralUserPages/MyOrders/MyOrders';
import Pay from './pages/GeneralUserPages/Pay/Pay';
import Explore from './pages/SharedPages/Explore/Explore';
import Footer from './pages/SharedPages/Footer/Footer';
import Home from './pages/SharedPages/Home/Home';
import Login from './pages/SharedPages/Login/Login';
import PrivateRoute from './pages/SharedPages/PrivateRoute/PrivateRoute';
import Purchase from './pages/SharedPages/Purchase/Purchase';
import Register from './pages/SharedPages/Register/Register';

function App() {
  return (
    <Box sx={{ fontFamily: 'Fira Sans' }}>
      <AuthProvider>
        <Router>
          <AdminHeader />
          <Routes>
            <Route path="explore" element={<Explore />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/purchase/:id"
              element={
                <PrivateRoute>
                  <Purchase />
                </PrivateRoute>
              }
            />
            <Route
              path="/addproduct"
              element={
                <AdminRoute>
                  <AddProduct />
                </AdminRoute>
              }
            />
            <Route
              path="/makeadmin"
              element={
                <AdminRoute>
                  <MakeAdmin />
                </AdminRoute>
              }
            />
            <Route
              path="/manageallorders"
              element={
                <AdminRoute>
                  <ManageAllOrders />
                </AdminRoute>
              }
            />
            <Route
              path="/manageallproducts"
              element={
                <AdminRoute>
                  <ManageAllProducts />
                </AdminRoute>
              }
            />
            <Route
              path="user"
              element={
                <GeneralUserRoute>
                  <GeneralUserDashboard />
                </GeneralUserRoute>
              }
            >
              <Route path="pay" element={<Pay />} />
              <Route path="myorders" element={<MyOrders />} />
              <Route path="addreview" element={<AddReview />} />
            </Route>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </Box>
  );
}

export default App;
