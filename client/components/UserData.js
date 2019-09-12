import React from 'react';
import PropTypes from 'prop-types';
import userStyles from '../assets/stylesheets/components/user.css'; 
import dateFormat from 'dateformat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const UserData = ({ user }) => (
  <div>
    <table className={userStyles._table}>
      <tbody>
        <tr className={userStyles._tr}>
          <td className={userStyles._td_title}>Username</td>
          <td className={userStyles._td}>{user.username}</td>
        </tr>
        <tr className={userStyles._tr}>
          <td className={userStyles._td_title}>Email</td>
          <td className={userStyles._td}>{user.email}</td>
        </tr>
        <tr className={userStyles._tr}>
          <td className={userStyles._td_title}>Status</td>
          <td className={userStyles._td}>{user.isActivate ? <span>Active  <FontAwesomeIcon icon={faCheckCircle} size="lg" color="#1B5E20" /></span>: <span>deactivate <FontAwesomeIcon icon={faTimesCircle} size="lg" color="#d50000" /></span>}</td>
        </tr>
        <tr className={userStyles._tr}>
          <td className={userStyles._td_title}>Created date</td>
          <td className={userStyles._td}>{dateFormat(user.createdAt)}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

UserData.propTypes = {
  user: PropTypes.object,
};

export default UserData;