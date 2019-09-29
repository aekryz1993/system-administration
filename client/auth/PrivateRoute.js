import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Cookies } from 'react-cookie';
// import { instanceOf } from 'prop-types';
import NavbarContainer from '../naveBar/navbarContainer';

const cookies = new Cookies();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    cookies.get('auth_token') ? (
      <>
      <NavbarContainer />
      <Component {...props}/>
      </>
    ) : (
      <Redirect to={{
        pathname: '/',
        // state: { from: location }
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

// PrivateRoute.propTypes = {
//   cookies: instanceOf(newCookies()).isRequired
// };

export default PrivateRoute;
