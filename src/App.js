import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider/AuthProvider';
import AdminHome from './pages/AdminPages/AdminHome/AdminHome';
import GeneralUserHome from './pages/GeneralUserPages/GeneralUserHome/GeneralUserHome';
import Explore from './pages/SharedPages/Explore/Explore';
import Home from './pages/SharedPages/Home/Home';
import Login from './pages/SharedPages/Login/Login';
import NotFound from './pages/SharedPages/NotFound/NotFound';
import Purchase from './pages/SharedPages/Purchase/Purchase';
import Register from './pages/SharedPages/Register/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/explore">
            <Explore />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/purchase">
            <Purchase />
          </Route>
          <Route exact path="/admin">
            <AdminHome />
          </Route>
          <Route exact path="/user">
            <GeneralUserHome />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
