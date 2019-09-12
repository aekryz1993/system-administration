import React from 'react';
import LoginContainer from './auth/loginContainer';
import { Route, Switch } from 'react-router-dom';
import profile from './routes/profile';

const App = () => {
  return (    
    <Switch>
      <Route exact path="/" component={LoginContainer} />
      {profile}
    </Switch>
  );
};

export default App;