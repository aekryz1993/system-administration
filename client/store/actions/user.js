export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCED = 'FETCH_USER_SUCCED';
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

export const startFetchUser = (uderId, user) => ({
  type: FETCH_USER,
  payload: {
    id: uderId,
    user: user
  }
});

export const succedFetch = (payload) => ({
  type: FETCH_USER_SUCCED,
  payload: {
    user: payload.user,
    updatePermission: payload.updateUser,
    deletePermission: payload.deleteUser,
    id: payload.user._id,
    path: `/user/${payload.user._id}`,
  }
});

export const failedFetch = (payload) => ({
  type: FETCH_USER_FAILED,
  payload: {
    error: 'DOESN\'T AUTHORIZED',
  }
});

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCED = 'UPDATE_USER_SUCCED';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';
export const UPDATE_USER_FINISHED = 'UPDATE_USER_FINISHED';

export const startUpdateUser = (userId, payload) => ({
  type: UPDATE_USER,
  payload: {
    id: userId,
    payload: payload
  }
});

export const succedUpdate = (payload) => ({
  type: UPDATE_USER_SUCCED,
  payload: {
    message: payload.data.message,
    // path: `/updateuser/${payload.data.userId}`,
  }
});

export const failedUpdate = (payload) => ({
  type: UPDATE_USER_FAILED,
  payload: {
    error: payload.message,
    path: '',
  }
});

export const updateFinished = () => ({
  type: UPDATE_USER_FINISHED
});

export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCED = 'DELETE_USER_SUCCED';
export const DELETE_USER_FAILED = 'DELETE_USER_FAILED';
export const DELETE_USER_FINISHED = 'DELETE_USER_FINISHED';

export const startDeleteUser = (userId) => ({
  type: DELETE_USER,
  payload: {
    id: userId
  }
});

export const succedDelete = (payload) => ({
  type: DELETE_USER_SUCCED,
  payload: {
    message: payload.data.message,
    // path: `/user/${payload.data.message}`,
  }
});

export const failedDelete = (payload) => ({
  type: DELETE_USER_FAILED,
  payload: {
    error: 'DOESN\'T AUTHORIZED',
    path: '',
  }
});

export const deleteFinished = () => ({
  type: DELETE_USER_FINISHED
});