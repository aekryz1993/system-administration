export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCEED = 'LOGIN_SUCCEED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_REQUEST_ENDED = 'LOGIN_REQUEST_ENDED';

export const loginRequest = (username, password) => ({
  type: LOGIN_REQUEST,
  payload: {
    username: username,
    password: password,
  }
}); 

export const loginSucced = (response) => ({
  type: LOGIN_SUCCEED,
  payload: {
    message: response.data.message,
    error: null
  }
});

export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  payload: {
    message: null,
    isAuth: null,
    error: error.response.data.message, 
  }
});

export const loginRequestEnded = () => ({
  type: LOGIN_REQUEST_ENDED,
});
