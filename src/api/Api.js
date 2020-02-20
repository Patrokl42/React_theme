import axios from 'axios';

export const Auth = {
   _token: null,

  setToken(token) {
     this._token = token;
     window.localStorage('__token', token);
  },

  isLoggedIn() {
    return !!this._token;
  },

  login(email, password) {
    return axios.post('/api/auth/login', {
      email,
      password
    })
  },

  register(email, password, fullName) {
    return axios.post('/api/auth/register', {
      email,
      password,
      fullName
    })
  },
};
