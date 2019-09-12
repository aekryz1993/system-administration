import { FETCH_CURRENTUSER_SUCCED, FETCH_CURRENTUSER_FAILED, LOGOUT_REQUEST_ENDED, LOGOUT_REQUEST_FAILED, LOGOUT_REQUEST_SUCCED, UPDATE_CURRENTUSER_SUCCED, UPDATE_CURRENTUSER_FAILED, UPDATE_CURRENTUSER_ENDED } from '../actions/currentuser';


export const currentuserReducer = (state = {}, action) => {
  switch (action.type) {
  case FETCH_CURRENTUSER_SUCCED:
    return {
      ...state,
      username: action.payload.username,
      email: action.payload.email,
      viewUsers: action.payload.viewUsers,
      addUser: action.payload.addUser,
    };
  case FETCH_CURRENTUSER_FAILED:
    return {
      ...state,
      username: action.payload.error,
    };
  default:
    return state;
  }
};

export const logoutReducer = (state = {redirect: false}, action) => {
  switch (action.type) {
  case LOGOUT_REQUEST_SUCCED:
    return {
      ...state,
      message: action.payload.message,
      redirect: true,
    };
  case LOGOUT_REQUEST_FAILED:
    return {
      ...state,
      message: action.payload.error,
      redirect: false,
    };
  case LOGOUT_REQUEST_ENDED:
    return {
      ...state,
      redirect: false,
    };
  default:
    return state;
  }
};

export const updateCurrentUserReducer = (state = {redirect: false}, action) => {
  switch (action.type) {
  case UPDATE_CURRENTUSER_SUCCED:
    return {
      ...state,
      message: action.payload.message,
      redirect: true
    };
  case UPDATE_CURRENTUSER_FAILED:
    return {
      ...state,
      message: action.payload.error,
      redirect: false
    };
  case UPDATE_CURRENTUSER_ENDED:
    return {
      ...state,
      redirect: false
    };
  default:
    return state;
  }
};