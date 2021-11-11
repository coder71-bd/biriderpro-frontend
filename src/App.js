import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from '../../lastbootcamp/lastbootcamp/src/components/Register/Register';
import Home from './pages/SharedPages/Home/Home';
import Login from './pages/SharedPages/Login/Login';
import NotFound from './pages/SharedPages/NotFound/NotFound';
import Purchase from './pages/SharedPages/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Menubar></Menubar> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
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
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
