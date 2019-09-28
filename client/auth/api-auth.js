import axios from 'axios';

export const login = async (username, password) => await axios({
  method: 'post',
  baseURL: '/api/auth/login',
  withCredentials: true,
  params: {
    username: username,
    password: password
  }
});