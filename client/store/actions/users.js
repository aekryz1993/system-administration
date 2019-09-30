export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCED = 'FETCH_USERS_SUCCED';
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

export const startFetchUsers = (page) => ({
  type: FETCH_USERS,
  payload: {
    page: page,
  }
});

export const succedFetch = (payload) => ({
  type: FETCH_USERS_SUCCED,
  payload: {
    users: payload.data.users,
    addUserPermission: payload.data.addUserPermission,
  }
});

export const failedFetch = (payload) => ({
  type: FETCH_USERS_FAILED,
  payload: {
    error: 'DOESN\'T AUTHORIZED',
  }
});

export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCED = 'ADD_USER_SUCCED';
export const ADD_USER_FAILED = 'ADD_USER_FAILED';
export const ADD_USER_FINISHED = 'ADD_USER_FINISHED';

export const startCreateUser = (payload) => ({
  type: ADD_USER,
  payload: payload
});

export const succedCreated = (payload) => ({
  type: ADD_USER_SUCCED,
  payload: {
    message: payload.data.message,
  }
});

export const failedCreated = (payload) => ({ 
  type: ADD_USER_FAILED,
  payload: {
    error: payload.message,
  }
});

export const createEnded = () => ({
  type: ADD_USER_FINISHED,
});