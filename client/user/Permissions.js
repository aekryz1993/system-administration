import React from 'react';
import PropTypes from 'prop-types';
import userStyles from '../assets/stylesheets/components/user.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Permissions = ({ user }) => (
  <div>
    <table className={userStyles._table_permissions}>
      <tbody>
        <tr className={userStyles._tr_permissions}>
          <td className={userStyles._td_title_permissions}>View users</td>
          <td className={userStyles._td_permissions}>{user.permission.viewUsers ? <FontAwesomeIcon icon={faCheckCircle}  color="#1B5E20" />: <FontAwesomeIcon icon={faTimesCircle}  color="#d50000" />}</td>
        </tr>
        <tr className={userStyles._tr_permissions}>
          <td className={userStyles._td_title_permissions}>Create users</td>
          <td className={userStyles._td_permissions}>{user.permission.createUser ? <FontAwesomeIcon icon={faCheckCircle}  color="#1B5E20" />: <FontAwesomeIcon icon={faTimesCircle}  color="#d50000" />}</td>
        </tr>
        <tr className={userStyles._tr_permissions}>
          <td className={userStyles._td_title_permissions}>Edit users</td>
          <td className={userStyles._td_permissions}>{user.permission.updateUser ? <FontAwesomeIcon icon={faCheckCircle}  color="#1B5E20" />: <FontAwesomeIcon icon={faTimesCircle}  color="#d50000" />}</td>
        </tr>
        <tr className={userStyles._tr_permissions}>
          <td className={userStyles._td_title_permissions}>Delete users</td>
          <td className={userStyles._td_permissions}>{user.permission.deleteUser ? <FontAwesomeIcon icon={faCheckCircle}  color="#1B5E20" />: <FontAwesomeIcon icon={faTimesCircle}  color="#d50000" />}</td>
        </tr>
        <tr className={userStyles._tr_permissions}>
          <td className={userStyles._td_title_permissions}>View groups</td>
          <td className={userStyles._td_permissions}>{user.permission.viewGroups ? <FontAwesomeIcon icon={faCheckCircle}  color="#1B5E20" />: <FontAwesomeIcon icon={faTimesCircle}  color="#d50000" />}</td>
        </tr>
        <tr className={userStyles._tr_permissions}>
          <td className={userStyles._td_title_permissions}>Create groups</td>
          <td className={userStyles._td_permissions}>{user.permission.createGroup ? <FontAwesomeIcon icon={faCheckCircle}  color="#1B5E20" />: <FontAwesomeIcon icon={faTimesCircle}  color="#d50000" />}</td>
        </tr>
        <tr className={userStyles._tr_permissions}>
          <td className={userStyles._td_title_permissions}>Edit groups</td>
          <td className={userStyles._td_permissions}>{user.permission.updateGroup ? <FontAwesomeIcon icon={faCheckCircle}  color="#1B5E20" />: <FontAwesomeIcon icon={faTimesCircle}  color="#d50000" />}</td>
        </tr>
        <tr className={userStyles._tr_permissions}>
          <td className={userStyles._td_title_permissions}>Delete groups</td>
          <td className={userStyles._td_permissions}>{user.permission.deleteGroup ? <FontAwesomeIcon icon={faCheckCircle}  color="#1B5E20" />: <FontAwesomeIcon icon={faTimesCircle}  color="#d50000" />}</td>
        </tr>
        <tr className={userStyles._tr_permissions}>
          <td className={userStyles._td_title_permissions}>Is admin</td>
          <td className={userStyles._td_permissions}>{user.permission.isAdmin ? <FontAwesomeIcon icon={faCheckCircle}  color="#1B5E20" />: <FontAwesomeIcon icon={faTimesCircle} color="#d50000" />}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

Permissions.propTypes = {
  user: PropTypes.object,
};

export default Permissions;