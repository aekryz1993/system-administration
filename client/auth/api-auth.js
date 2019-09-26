import axios from 'axios';
import http from 'http';

const httpAgent = new http.Agent({ keepAlive: true });

export const login = async (username, password) => await axios({
  method: 'post',
  baseURL: '/api/auth/login',
  httpAgent,
  withCredentials: true,
  params: {
    username: username,
    password: password
  }
});