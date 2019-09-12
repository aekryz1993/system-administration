import axios from 'axios';

export const fetchListUsers = (credentials) => axios.get('/api/currentuser/users', {
  headers: {
    'content-Type': 'application/json',
    Authorization: 'Bearer ' + credentials
  }
});

export const addUser = (credentials, body) => axios.post('/api/currentuser/users/add', {
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
    'content-Type': 'application/json',
    Authorization: 'Bearer ' + credentials
  }
});