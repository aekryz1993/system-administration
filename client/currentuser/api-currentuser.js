import axios from 'axios';
import http from 'http';

const httpAgent = new http.Agent({ keepAlive: true });

export const fetchCurrentUser = async () => await axios({
  method: 'get',
  baseURL: '/api/currentuser',
  withCredentials: true,
  httpAgent
});

export const updateCurrentUser = (body) => axios.put('/api/currentuser', {
  username: body.username,
  email: body.email,
}, {
  headers: {
    'content-Type': 'application/json',
  }
});

export const logout = () => axios.get('/api/auth/logout', {
  headers: {
    'content-Type': 'application/json',
  }
});
