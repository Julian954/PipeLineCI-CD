import React, { Component } from 'react';
import PropTypes from 'prop-types'; // Añadido para validar las props
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Dashboard from './pages/Dashboard/Dashboard';
import { getSession } from './utils';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    // console.log(getSession())
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/register'>
            <Auth />
          </Route>
          <Route path='/login'>
            <Auth />
          </Route>
          <PrivateRoute
            exact
            path='/'
            component={Dashboard}
          />
        </Switch>
      </Router>
    );
  }
}

/**
 * A component to protect routes.
 * Shows Auth page if the user is not authenticated
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
  const session = getSession();

  return (
    <Route
      {...rest}
      render={(props) =>
        session ? <Component {...props} /> : <Home {...props} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired, // Añadido para validar que `component` es un tipo de elemento React
};
