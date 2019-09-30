import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Pagination from 'react-js-pagination';
// require('bootstrap/less/bootstrap.less');
import usersStyle from '../assets/stylesheets/components/users.css';

// const useForceUpdate = () => useState()[1];

const Users = ({
  users,
  fetchUsers,
  addUserPermission,
  pathname,
}) => {

  const [activePage, setActivePage] = useState({activePage: 1});
  // const forceUpdate = useForceUpdate();

  useEffect(() => {
    fetchUsers(activePage.activePage);
    // forceUpdate();
  }, [activePage.activePage]);

  // console.log('rendering');
  function handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    setActivePage({activePage: pageNumber});
    // forceUpdate();
    fetchUsers(activePage.activePage);
    // fetchUsers(activePage);
  }

  return (
    <div className={usersStyle._users_container}> 
      <div className={usersStyle._left_column_item}>
        <div className={usersStyle._title_users_item}><span>Select user</span></div>
        <table className={usersStyle._users_table}>
          <thead>
            <tr>
              <th className={usersStyle._users_th}>username</th>
              <th className={usersStyle._users_th}>email</th>
              <th className={usersStyle._users_th_active}>active</th>
            </tr>
          </thead>
          <tbody className={usersStyle._users_tbody}>
            {
              users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td className={usersStyle.users_td}><Link className={usersStyle._users_anchor_username} to={`/user/${user._id}`}>{user.username}</Link></td>
                    <td className={usersStyle.users_td}><div className={usersStyle._users_style_email}>{user.email}</div></td>
                    <td className={usersStyle.users_td_active}><div className={usersStyle._users_style_active}>{user.isActivate ? <FontAwesomeIcon icon={faCheckCircle} size="xs" color="#1B5E20" /> : <FontAwesomeIcon icon={faTimesCircle} size="xs" color="#d50000" />}</div></td>
                  </tr>
                ); 
              })
            } 
          </tbody>
        </table>
      </div>
            
      <div className={usersStyle._right_column_item}>
        <div className={usersStyle._users_add}>
          {addUserPermission && <Link className={usersStyle._users_anchor_add} to={{pathname:'/add', state: {from: pathname}}}>ADD USER <FontAwesomeIcon icon={faPlus} /></Link>}
        </div><br/>
      </div>

      <div>
        <Pagination
          activePage={activePage.activePage}
          itemsCountPerPage={4}
          totalItemsCount={20}
          forcePage={activePage.activePage}
          onChange={handlePageChange}
        />
      </div>
      { /*
          location.state.message ? <h4>{location.state.message}</h4> : ''
        */}
    </div> 
  );
};

// class Users extends React.Component {
//   state = {
//     activePage: 1
//   }
// }

Users.propTypes = {
  users: PropTypes.array,
  pathname: PropTypes.string,
  addUserPermission: PropTypes.bool,
  fetchUsers: PropTypes.func.isRequired
};

export default Users;