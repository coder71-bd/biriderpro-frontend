import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider/AuthProvider';
import AdminDashboard from './pages/AdminPages/AdminDashboard/AdminDashboard';
import GeneralUserDashboard from './pages/GeneralUserPages/GeneralUserDashboard/GeneralUserDashboard';
import Explore from './pages/SharedPages/Explore/Explore';
import Home from './pages/SharedPages/Home/Home';
import Login from './pages/SharedPages/Login/Login';
import Purchase from './pages/SharedPages/Purchase/Purchase';
import Register from './pages/SharedPages/Register/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
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
          <Route path="/purchase/:id">
            <Purchase />
          </Route>
          <Route path="/admin">
            <AdminDashboard />
          </Route>
          <Route path="/user">
            <GeneralUserDashboard />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="*">
            <NotFound />
          </Route> */}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
