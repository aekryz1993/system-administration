import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import navBar from '../assets/stylesheets/components/navBar.css';

const NavBar = ({
  username,
  email,
  redirect,
  fetchCurrentUser,
  logoutRequest,
  logoutFinished,
  pathname,
}) => {


  useEffect(() => {
    fetchCurrentUser();
  }, []);

  // useEffect(() => {
  //   return () => {
  //     fetchCurrentUser();
  //   };
  // });
  // useEffect(() => {
  //   fetchCurrentUser();
  // });

  return (  
    <div className={navBar._navbar_container}>  
      <div className={navBar._title_item}>System administration</div>
      <div className={navBar._username_item}>
        welcome, <b><Link className={navBar._anchor_username_user} to='/profile'>{username}</Link>.</b>
      </div>

      <div className={navBar._update_item}>
        <Link className={navBar._anchor} to={{
          pathname: '/update',
          state: {initialValues: {username, email}, from: pathname}
        }} > 
            UPDATE
        </Link> 
      </div>

      <div className={navBar._logout_item}>
        <Logout 
          redirect={redirect} 
          logoutRequest={logoutRequest} 
          logoutFinished={logoutFinished} />
      </div>      
    </div>
  );
};

NavBar.propTypes = {
  username: PropTypes.string,
  pathname: PropTypes.string,
  email: PropTypes.string,
  redirect: PropTypes.bool.isRequired,
  fetchCurrentUser: PropTypes.func.isRequired,
  logoutRequest: PropTypes.func.isRequired,
  logoutFinished: PropTypes.func.isRequired,
};

export default NavBar;