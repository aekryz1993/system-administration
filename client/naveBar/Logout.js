import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
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

  return (
    <div>
      <button className={navBar._logout_button} onClick={() => logoutRequest()}>LOG OUT</button>
      {redirect && <Redirect to='/' />}
    </div>
  );
};

Logout.propTypes = {
  redirect: PropTypes.bool.isRequired,
  logoutRequest: PropTypes.func.isRequired,
  logoutFinished: PropTypes.func.isRequired,
};

export default Logout;