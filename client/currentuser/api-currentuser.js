import axios from 'axios';

export const fetchCurrentUser = async () => await axios({
  method: 'get',
  baseURL: '/api/currentuser',
  withCredentials: true,
});

export const updateCurrentUser = async (body) => await axios.put('/api/currentuser', {
  username: body.username,
  email: body.email,
}, {
  headers: {
    'content-Type': 'application/json',
  }
});

export const logout = async () => await axios.get('/api/currentuser/logout', {
  headers: {
    'content-Type': 'application/json',
  }
});