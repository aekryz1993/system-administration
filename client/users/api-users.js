import axios from 'axios';

export const fetchListUsers = (page) => axios.get(`/api/currentuser/users/${page}`, {
  headers: {
    'content-Type': 'application/json'
  }
});

export const addUser = (body) => axios.post('/api/currentuser/users/add', {
  username: body.username,
  email: body.email,
  password: body.password,
  isActivate: body.isActivate,
  isVerified: body.isVerified,
  permissions: {
    viewUsers: body.viewUsers,
    createUser: body.createUser,
    updateUser: body.updateUser,
    deleteUser: body.deleteUser,
    viewGroups: body.viewGroups,
    createGroup: body.createGroup,
    updateGroup: body.updateGroup,
    deleteGroup: body.deleteGroup,
    isAdmin: body.isAdmin,
  }
}, {
  headers: {
    'content-Type': 'application/json'
  }
});