import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavbarContainer from '../naveBar/navbarContainer';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('auth') ? (
      <>
      <NavbarContainer />
      <Component {...props}/>
      </>
    ) : (
      <Redirect to={{
        pathname: '/',
      }}/>
    )
  )}/>
);
// ) : (
{/*<Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>*/}
// )
 

export default PrivateRoute;
