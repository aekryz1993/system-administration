import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import addUserStyle from '../assets/stylesheets/components/addUser.css';
import UserInformation from '../components/UserInformation';

const UpdateCurrentUser = ({
  message,
  initialValues,
  redirect,
  onSubmit,
  handleSubmit,
  updateFinished,
  from
}) => {

  useEffect(() => {
    return () => {
      updateFinished();
      // console.log('initialValues')
      // console.log(initialValues)
    };
  }, []);
  
  return(
    <div className={addUserStyle._addUser_container}>
      <form className={addUserStyle._grid_container} onSubmit={handleSubmit(onSubmit())}>
        <div>
          <UserInformation 
            name="username"
            label="Username"
            placeholder="Username"
            type="text"
            value={initialValues.username} />
          <UserInformation 
            name="email"
            label="Email"
            placeholder="Email"
            type="text"
            value={initialValues.email} />
        </div>

        <div className={addUserStyle._grid_third_item}>
          <div className={addUserStyle._cancel_botton}>
            <Link className={addUserStyle._anchor_cancel_botton} to={((from === '/users') || (from === '/profile')) ? from : '/profile'} >Cancel</Link>
          </div>
          <button className={addUserStyle._submit_botton} type="submit" >Update</button>
          {redirect ? 
            <Redirect to='/profile' /> : <div>{message}</div>
          }
        </div>
      </form>
    </div>
  );
};

UpdateCurrentUser.propTypes = {
  message: PropTypes.string,
  from: PropTypes.string,
  redirect: PropTypes.bool.isRequired,
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  updateFinished: PropTypes.func.isRequired
};

export default UpdateCurrentUser;