import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import UserData from '../components/UserData';
import { Link, NavLink, Route, BrowserRouter as Router } from 'react-router-dom';
import userStyle from '../assets/stylesheets/components/user.css';
import Permissions from './Permissions';

const Users = ({
  user,
  pathname,
  // deletePermission,
  updatePermission,
  fetchUser,
}) => {

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className={userStyle._user_container} >
      <div className={userStyle._user_grid_container}>
        <div className={userStyle._user_grid_first_item}>
          <div className={userStyle._use_username_profile}><span>{user.username}</span></div>
          <div className={userStyle._user_update_button}>
            { updatePermission && 
              <Link className={userStyle._user_anchor_update}
                to={{
                  pathname: `/updateuser/${user._id}`, 
                  state: {initialValues: user}
                }} >
                  Update
              </Link> }
          </div>
        </div>

        <div className={userStyle._user_grid_second_item}>
          <Router>
            <nav className={userStyle._user_nav}>
              <ul className={userStyle._user_ul}>
                <li className={userStyle._user_li}>
                  <NavLink className={userStyle._user_li_anchor} exact to={`${pathname}`} activeClassName={userStyle._user_li_active} >Information</NavLink>
                </li>
                <li className={userStyle._user_li}>
                  <NavLink className={userStyle._user_li_anchor} to={`${pathname}/permissions`} activeClassName={userStyle._user_li_active}>Permissions</NavLink>
                </li>
              </ul>
            </nav>
            <div>
              <Route exact path={`${pathname}`} render={() => <UserData user={user} />}  />
              <Route path={`${pathname}/permissions`} render={() => <Permissions user={user} />}  />
            </div>
          </Router>
        </div>

        {/*{deletePermission &&
          <Link 
          to={{
            pathname: `/deleteuser/${user._id}`, 
            state: {initialValues: user}
          }} >
            DELETE
        </Link>   }
          <br/><br/>
        <Link to='/users' > USERS </Link>  */} 
      </div>
    </div>
  );
};

Users.propTypes = {
  user: PropTypes.object,
  pathname: PropTypes.string,
  updatePermission: PropTypes.bool,
  deletePermission: PropTypes.bool,
  fetchUser: PropTypes.func.isRequired,
};

export default Users;