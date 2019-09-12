import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import UserInformation from '../components/UserInformation';
import SwitchToggle from '../components/SwitchToggle';
import addUserStyle from '../assets/stylesheets/components/addUser.css';

const UpdateUser = ({ message, userId, permissions, initialValues, redirect, onSubmit, handleSubmit, updateFinished }) => {

  const [isActivate, setIsActivate] = useState({isActivate: initialValues.isActivate});
  const [viewUsers, setViewUsers] = useState({viewUsers: permissions.viewUsers});
  const [createUser, setCreateUser] = useState({createUser: permissions.createUser});
  const [updateUser, setUpdateUser] = useState({updateUser: permissions.updateUser});
  const [deleteUser, setDeleteUser] = useState({deleteUser: permissions.deleteUser});
  const [viewGroups, setViewGroups] = useState({viewGroups: permissions.viewGroups});
  const [createGroup, setCreateGroup] = useState({createGroup: permissions.createGroup});
  const [updateGroup, setUpdateGroup] = useState({updateGroup: permissions.updateGroup});
  const [deleteGroup, setDeleteGroup] = useState({deleteGroup: permissions.deleteGroup});
  const [isAdmin, setIsAdmin] = useState({isAdmin: permissions.isAdmin});

  useEffect(() => {
    return () => {
      updateFinished();
    };
  }, []);
  
  return(
    <div className={addUserStyle._addUser_container}>
      <form className={addUserStyle._grid_container} onSubmit={handleSubmit(onSubmit(userId))}>
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

          <SwitchToggle 
            label='Activate status'
            permissionName='isActivate'
            status={isActivate.isActivate}
            setIsActivate={setIsActivate} />
        </div>

        <div className={addUserStyle._grid_second_item}>
          <div className={addUserStyle._permissions_title_item}>Permissions</div>
          <div className={addUserStyle._permissions_check_item}>
            <SwitchToggle 
              label='View users'
              permissionName='viewUsers'
              status={viewUsers.viewUsers}
              setIsActivate={setViewUsers} />
            <SwitchToggle 
              label='Add users'
              permissionName='createUser'
              status={createUser.createUser}
              setIsActivate={setCreateUser} />
            <SwitchToggle 
              label='Edit users'
              permissionName='updateUser'
              status={updateUser.updateUser}
              setIsActivate={setUpdateUser} />
            <SwitchToggle 
              label='Delete users'
              permissionName='deleteUser'
              status={deleteUser.deleteUser}
              setIsActivate={setDeleteUser} />
            <SwitchToggle 
              label='View groups'
              permissionName='viewGroups'
              status={viewGroups.viewGroups}
              setIsActivate={setViewGroups} />
            <SwitchToggle 
              label='Add groups'
              permissionName='createGroup'
              status={createGroup.createGroup}
              setIsActivate={setCreateGroup} />
            <SwitchToggle 
              label='Edit groups'
              permissionName='updateGroup'
              status={updateGroup.updateGroup}
              setIsActivate={setUpdateGroup} />
            <SwitchToggle 
              label='Delete groups'
              permissionName='deleteGroup'
              status={deleteGroup.deleteGroup}
              setIsActivate={setDeleteGroup} />
            <SwitchToggle 
              label='Admin'
              permissionName='isAdmin'
              status={isAdmin.isAdmin}
              setIsActivate={setIsAdmin} />
          </div>
        </div>

        <div className={addUserStyle._grid_third_item}>
          <div className={addUserStyle._cancel_botton}>
            <Link className={addUserStyle._anchor_cancel_botton} to={`/user/${userId}`} >Cancel</Link>
          </div>
          <button className={addUserStyle._submit_botton} type="submit" >Update</button>
    
          {redirect ? 
            <Redirect to={`/user/${userId}`}/> : <div></div>
          }
        </div>
    
      </form>
    </div>
  );
};

UpdateUser.propTypes = {
  message: PropTypes.string,
  redirect: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  initialValues: PropTypes.object,
  permissions: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  updateFinished: PropTypes.func.isRequired
};

export default UpdateUser;