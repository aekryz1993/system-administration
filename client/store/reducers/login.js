import { LOGIN_SUCCEED, LOGIN_FAILED, LOGIN_REQUEST_ENDED  } from '../actions/login';

const loginReducer = (state = {redirect: false}, action) => {
  switch (action.type) {
  case LOGIN_SUCCEED:
    return {
      ...state,
      message: action.payload.message,
      redirect: true,
    };
  case LOGIN_FAILED:
    return {
      ...state,
      message: action.payload.error,
      redirect: false,
    };
  case LOGIN_REQUEST_ENDED: 
    return {
      redirect: false,
    };
  default:
    return state;
  }
};

export default loginReducer;