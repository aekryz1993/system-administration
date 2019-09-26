import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { sessionReducer } from 'redux-react-session';
import loginReducer from './login';
import { LOGIN_REQUEST } from '../actions/login';
import { currentuserReducer, logoutReducer, updateCurrentUserReducer } from './currentuser';
import { usersReducer, createUserReducer } from './users';
import { userReducer, updateUserReducer, deleteUserReducer } from './user';
import { ADD_USER } from '../actions/users';
import { UPDATE_USER } from '../actions/user';

const rootReducer = (history) => combineReducers({
  loginReducer: loginReducer,
  currentuserReducer: currentuserReducer,
  usersReducer: usersReducer,
  userReducer: userReducer,
  createUserReducer: createUserReducer,
  updateUserReducer: updateUserReducer,
  deleteUserReducer: deleteUserReducer,
  logoutReducer: logoutReducer,
  updateCurrentUserReducer: updateCurrentUserReducer,

  router: connectRouter(history),
  
  form: formReducer.plugin({
    login: (state, action) => {
      switch (action.type) {
      case LOGIN_REQUEST:
        return undefined;
      default:
        return state;
      }
    },
    users: (state, action) => {
      switch (action.type) {
      case ADD_USER:
        return undefined;
      default:
        return state;
      }
    },
    updateuser: (state, action) => {
      switch (action.type) {
      case UPDATE_USER:
        return undefined;
      default:
        return state;
      }
    },
    updatecurrentuser: (state, action) => {
      switch (action.type) {
      case UPDATE_USER:
        return undefined;
      default:
        return state;
      }
    },
  }),
  
  session: sessionReducer,
});

export default rootReducer;