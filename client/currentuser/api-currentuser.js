import axios from 'axios';

export const fetchCurrentUser = (credentials) => axios.get('/api/currentuser', {
  headers: {
    'content-Type': 'application/json',
    Authorization: 'Bearer ' + credentials
  }
});

export const updateCurrentUser = (credentials, body) => axios.put('/api/currentuser', {
  username: body.username,
  email: body.email,
}, {
  headers: {
    'content-Type': 'application/json',
    Authorization: 'Bearer ' + credentials
  }
});

export const logout = (credentials) => axios.get('/api/auth/logout', {
  headers: {
    'content-Type': 'application/json',
    Authorization: 'Bearer ' + credentials
  }
});
