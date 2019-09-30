import axios from 'axios';

export const fetchUser = (id) => axios.get(`/api/currentuser/guest/${id}`, {
  headers: {
    'content-Type': 'application/json'
  }
});

export const updateUser = (id, body) => axios.put(`/api/currentuser/guest/${id}`, {
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
    'content-Type': 'application/json'
  }
});

export const deleteUser = (id) => axios.delete(`/api/currentuser/guest/${id}`, {
  headers: {
    'content-Type': 'application/json'
  }
});