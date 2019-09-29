import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import navBar from '../assets/stylesheets/components/navBar.css';

const Logout = ({
  redirect,
  logoutRequest,
  logoutFinished,
}) => {

  useEffect(() => {
    return () => {
      logoutFinished();
    };
  }, []);

  const cookies = new Cookies();

  const successfulLogout = () => {
    cookies.remove('auth_token');
    return (<Redirect to='/' />);
  };

  return (
    <div>
      <button className={navBar._logout_button} onClick={() => logoutRequest()}>LOG OUT</button>
      {redirect && successfulLogout()}
    </div>
  );
};

Logout.propTypes = {
  redirect: PropTypes.bool.isRequired,
  logoutRequest: PropTypes.func.isRequired,
  logoutFinished: PropTypes.func.isRequired,
};

export default Logout;