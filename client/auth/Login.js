import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import login from '../assets/stylesheets/components/login.css';

const Login = ({ message, redirect, onSubmit, handleSubmit, loginRequestEnded }) => {

  useEffect(() => {
    return () => {
      loginRequestEnded();
    };
  }, []);

  const cookies = new Cookies();

  return (
    <>
    {!cookies.get('auth_token') ? (
      <div className={login._login_container}>
        <form className={login._login_form_item} onSubmit={handleSubmit(onSubmit)}>
          <div className={login._title_style}>System administration</div>
          <div className={login._login_input}>
            <Field className={login._input_style} name="username" component="input" placeholder="username or email" type="text" required/>
          </div>
          <div className={login._login_input}>
            <Field className={login._input_style} name="password" component="input" placeholder="Password" type="password" required/>
          </div>
          <input className={login._login_button} type="submit" value="Log in" />
          {
            redirect ? <Redirect to='/profile' /> : <div>{message}</div>
          }
        </form>
      </div>
    ) : (
      <Redirect to='/profile' />
    )}
    </>
  );
};

Login.propTypes = {
  message: PropTypes.string,
  redirect: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loginRequestEnded: PropTypes.func.isRequired
};

export default Login;