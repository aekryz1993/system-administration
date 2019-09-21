export const FETCH_CURRENTUSER = 'FETCH_CURRENTUSER';
export const FETCH_CURRENTUSER_SUCCED = 'FETCH_CURRENTUSER_SUCCED';
export const FETCH_CURRENTUSER_FAILED = 'FETCH_CURRENTUSER_FAILED';

export const startFetchCurrentUser = () => ({
  type: FETCH_CURRENTUSER,
});

export const succedFetch = (payload) => ({
  type: FETCH_CURRENTUSER_SUCCED,
  payload: {
    username: payload.data.username,
    email: payload.data.email,
    viewUsers: payload.data.permissions.viewUsers,
    addUser: payload.data.permissions.createUser,
  }
});

export const failedFetch = (payload) => ({
  type: FETCH_CURRENTUSER_FAILED,
  payload: {
    error: 'DOESN\'T AUTHORIZED',
  }
});

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_REQUEST_SUCCED = 'LOGOUT_REQUEST_SUCCED';
export const LOGOUT_REQUEST_FAILED = 'LOGOUT_REQUEST_FAILED';
export const LOGOUT_REQUEST_ENDED = 'LOGOUT_REQUEST_ENDED';

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const succedLogout = (payload) => ({
  type: LOGOUT_REQUEST_SUCCED,
  payload: {
    message: 'payload.data.username',
  }
});

export const failedLogout = (payload) => ({
  type: LOGOUT_REQUEST_FAILED,
  payload: {
    error: 'DOESN\'T AUTHORIZED',
  }
});

export const logoutFinished = () => ({
  type: LOGOUT_REQUEST_ENDED
});

export const UPDATE_CURRENTUSER = 'UPDATE_CURRENTUSER';
export const UPDATE_CURRENTUSER_SUCCED = 'UPDATE_CURRENTUSER_SUCCED';
export const UPDATE_CURRENTUSER_FAILED = 'UPDATE_CURRENTUSER_FAILED';
export const UPDATE_CURRENTUSER_ENDED = 'UPDATE_CURRENTUSER_ENDED';

export const startUpdateCurrentUser = (payload) => ({
  type: UPDATE_CURRENTUSER,
  payload: payload
});

export const succedUpdate = (payload) => ({
  type: UPDATE_CURRENTUSER_SUCCED,
  payload: {
    message: payload.data.message,
  }
});

export const failedUpdate = (payload) => ({
  type: UPDATE_CURRENTUSER_FAILED,
  payload: {
    error: payload.message,
  }
});

export const updateFinished = () => ({
  type: UPDATE_CURRENTUSER_ENDED
});