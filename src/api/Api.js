import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3004';

export const Auth = {
   _token: null,

  setToken(token) {
     this._token = token;
     localStorage.setItem('__token', token);
  },

  isLoggedIn() {
    return !!this._token;
  },

  login(email, password) {
    return axios.get('/login', {
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

export const Contacts = {
  getContacts() {
    return axios.get('/contacts')
  },
  createContact(fullName, email, company, phoneNumber, birthday) {
    return axios.post('/contacts', {
      fullName,
      email,
      company,
      phoneNumber,
      birthday
    })
  },
};