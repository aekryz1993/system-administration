import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../auth/index';
import { CurrentUserContainer, UpdateCurrentUserContainer } from '../currentuser/index';
import { UsersContainer, CreateUserContainer } from '../users/index';
import user from './user';

const profil = (
  
  <Switch>
    <PrivateRoute exact path="/profile" component={CurrentUserContainer} />
    <PrivateRoute path="/update" component={UpdateCurrentUserContainer} />
    <PrivateRoute path="/users" component={UsersContainer} />
    <PrivateRoute path="/add" component={CreateUserContainer} />
    {user}
  </Switch> 
  
);

export default profil;