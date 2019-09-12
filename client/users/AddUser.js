import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import addUserStyle from '../assets/stylesheets/components/addUser.css';
import SwitchToggle from '../components/SwitchToggle';
import UserInformation from '../components/UserInformation';
import { permissionsName, userInfos} from '../helpers';

const AddUser = ({
  message,
  redirect,
  onSubmit,
  handleSubmit,
  createUserEnded,
  from,
}) => {

  const [isActivate, setIsActivate] = useState({isActivate: true});

  useEffect(() => {
    return () => {
      createUserEnded();
    };
  }, []);

  return (
    <div className={addUserStyle._addUser_container}>

      <form className={addUserStyle._grid_container} onSubmit={handleSubmit(onSubmit)}>
        <div> 
          {userInfos.map((userinfo, index) => (
            <UserInformation 
              key={index}
              name={userinfo.name}
              label={userinfo.label}
              placeholder={userinfo.placeholder}
              type={userinfo.type} />
          ))}
          <SwitchToggle 
            label='Activate status'
            permissionName='isActivate'
            status={isActivate.isActivate}
            setIsActivate={setIsActivate} />
        </div>

        <div className={addUserStyle._grid_second_item}>
          <div className={addUserStyle._permissions_title_item}>Permissions</div>
          <div className={addUserStyle._permissions_check_item}>
            {permissionsName.map((permissionName, index) => (
              <SwitchToggle 
                key={index}
                label={permissionName.label}
                permissionName={permissionName.name} />
            ))}
          </div>
        </div>

        <div className={addUserStyle._grid_third_item}>
          <div className={addUserStyle._cancel_botton}>
            <Link className={addUserStyle._anchor_cancel_botton} to={from} >Cancel</Link>
          </div>
          <button className={addUserStyle._submit_botton} type="submit" >Create</button>
          {
            redirect ? <Redirect to={{pathname: '/users', state: { message: message }}} /> : <div>{message}</div>
          }
        </div>
      </form>
    </div>
  );
};

AddUser.propTypes = {
  message: PropTypes.string,
  from: PropTypes.string,
  redirect: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  createUserEnded: PropTypes.func.isRequired
};

export default AddUser;