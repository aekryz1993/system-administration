import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import addUserStyle from '../assets/stylesheets/components/addUser.css';

const UserInformation = ({name, label, placeholder, type, value }) => (
  <div className={addUserStyle._row_}>
    <label className={addUserStyle._add_user_label} htmlFor={name}>{label}: </label>
    {value ?
      <Field className={addUserStyle._add_user_input} name={name} component="input" placeholder={placeholder} type={type} value={value}/> : 
      <Field className={addUserStyle._add_user_input} name={name} component="input" placeholder={placeholder} type={type}/>
    }
  </div>
);

UserInformation.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default UserInformation;