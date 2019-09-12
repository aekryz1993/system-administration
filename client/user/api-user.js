import axios from 'axios';

export const fetchUser = (credentials, id) => axios.get(`/api/currentuser/users/${id}`, {
  headers: {
    'content-Type': 'application/json',
    Authorization: 'Bearer ' + credentials
  }
});

export const updateUser = (credentials, id, body) => axios.put(`/api/currentuser/users/${id}`, {
  username: body.payload.username,
  email: body.payload.email,
  password: body.payload.password,
  isActivate: body.payload.isActivate,
  isVerified: body.payload.isVerified,
  permissions: {
    viewUsers: body.payload.viewUsers,
    createUser: body.payload.createUser,
    updateUser: body.payload.updateUser,
    deleteUser: body.payload.deleteUser,
    viewGroups: body.payload.viewGroups,
    createGroup: body.payload.createGroup,
    updateGroup: body.payload.updateGroup,
    deleteGroup: body.payload.deleteGroup,
    isAdmin: body.payload.isAdmin,
  }
}, {
  headers: {
    'content-Type': 'application/json',
    Authorization: 'Bearer ' + credentials
  }
});

export const deleteUser = (credentials, id) => axios.delete(`/api/currentuser/users/${id}`, {
  headers: {
    'content-Type': 'application/json',
    Authorization: 'Bearer ' + credentials
  }
});