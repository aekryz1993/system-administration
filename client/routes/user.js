import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../auth/index';
import { UserContainer, UpdateUserContainer, DeleteUserContainer } from '../user/index';
import NoMatch from '../components/NoMatch';

const user = (
  <>
    <Switch>
      <PrivateRoute exact path="/user/:id" component={UserContainer} />
      <PrivateRoute path="/updateuser/:id" component={UpdateUserContainer} />
      <PrivateRoute path="/deleteuser/:id" component={DeleteUserContainer} />
      <Route render={() => <NoMatch /> } />
    </Switch>
    
 </>
);

export default user;