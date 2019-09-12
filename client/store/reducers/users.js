import { FETCH_USERS_SUCCED, FETCH_USERS_FAILED, ADD_USER_SUCCED, ADD_USER_FAILED, ADD_USER_FINISHED } from '../actions/users';

export const usersReducer = (state = {users: []}, action) => {
  switch (action.type) {
  case FETCH_USERS_SUCCED:
    return {
      ...state,
      users: action.payload.users,
      addUserPermission: action.payload.addUserPermission,
    };
  case FETCH_USERS_FAILED:
    return {
      ...state,
      users: action.payload.error,
    };
  default:
    return state;
  }
};

export const createUserReducer = (state = {redirect: false}, action) => {
  switch (action.type) {
  case ADD_USER_SUCCED:
    return {
      ...state,
      message: action.payload.message,
      redirect: true
    };
  case ADD_USER_FAILED:
    return {
      ...state,
      message: action.payload.error,
      redirect: false
    };
  case ADD_USER_FINISHED:
    return {
      ...state,
      redirect: false,
    };
  default:
    return state;
  }
};
