import { FETCH_USER_SUCCED, FETCH_USER_FAILED, UPDATE_USER_SUCCED, UPDATE_USER_FAILED, UPDATE_USER_FINISHED, DELETE_USER_FINISHED, DELETE_USER_FAILED, DELETE_USER_SUCCED } from '../actions/user';

export const userReducer = (state = {user: {}}, action) => {
  switch (action.type) {
  case FETCH_USER_SUCCED:
    return {
      ...state,
      user: action.payload.user,
      updatePermission: action.payload.updatePermission,
      deletePermission: action.payload.deletePermission,
    };
  case FETCH_USER_FAILED:
    return {
      ...state,
      user: action.payload.error,
    };
  default:
    return state;
  }
};

export const updateUserReducer = (state = {redirect: false}, action) => {
  switch (action.type) {
  case UPDATE_USER_SUCCED:
    return {
      ...state,
      message: action.payload.message,
      redirect: true
    };
  case UPDATE_USER_FAILED:
    return {
      ...state,
      message: action.payload.error,
      redirect: false
    };
  case UPDATE_USER_FINISHED: 
    return {
      ...state,
      redirect: false
    };
  default:
    return state;
  }
};

export const deleteUserReducer = (state = {redirect: false}, action) => {
  switch (action.type) {
  case DELETE_USER_SUCCED:
    return {
      ...state,
      message: action.payload.message,
      redirect: true
    };
  case DELETE_USER_FAILED:
    return {
      ...state,
      message: action.payload.error,
      redirect: false
    };
  case DELETE_USER_FINISHED: 
    return {
      ...state,
      redirect: false
    };
  default:
    return state;
  }
};