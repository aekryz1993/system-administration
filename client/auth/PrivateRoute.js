import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth-helper';
import NavbarContainer from '../naveBar/navbarContainer';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.isAuthenticated() ? (
      <>
      <NavbarContainer />
      <Component {...props}/>
      </>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

export default PrivateRoute;
