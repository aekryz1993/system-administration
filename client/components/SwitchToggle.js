import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import addUserStyle from '../assets/stylesheets/components/addUser.css';

const SwitchToggle = ({label, permissionName, status, setIsActivate }) => (
  <tr>
    <td className={addUserStyle._td_label_switch_toggle}><label>{label}</label></td>
    <td className={addUserStyle._td_switch_toggle}>
      <label className={addUserStyle._label_check} htmlFor={permissionName}>
        {(status && setIsActivate) ?
          <Field name={permissionName} id={permissionName} component="input" type="checkbox" checked={status} onChange={e => setIsActivate(e.target.checked)}/> : 
          <Field name={permissionName} id={permissionName} component="input" type="checkbox" />
        }
        <span className={`${addUserStyle._slider} ${addUserStyle._round}`}></span>   
      </label>
    </td>
  </tr>
);

SwitchToggle.propTypes = {
  label: PropTypes.string.isRequired,
  permissionName: PropTypes.string.isRequired,
  status: PropTypes.bool,
  setIsActivate: PropTypes.func,
};

export default SwitchToggle;