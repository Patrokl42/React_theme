import axios from 'axios';

axios.defaults.baseURL = 'http://5e590ba303a86a0014046bdc.mockapi.io/api';

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
    return axios.post('/auth/register', {
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

  updateContact({id, fullName, email, company, phoneNumber, birthday}) {
    console.log(id)
    return axios.put(`/contacts/${id}`, {
      fullName,
      email,
      company,
      phoneNumber,
      birthday
    })
  },

  removeContact(id) {
    return axios.delete(`/contacts/${id}`)
  }
};

export const Charts = {
  getChartById({id, fullName, email, company, phoneNumber, birthday}) {
    return axios.put(`/contacts/${id}`, {
      fullName,
      email,
      company,
      phoneNumber,
      birthday
    })
  }
};

export const Todos = {
  getTodos() {
    return axios.get(`/todo`)
  },

  updateTodo({id, title, description, isFavorite,  isComplete, labels}) {
    return axios.put(`/todo/${id}`, {
      title,
      description,
      isFavorite,
      isComplete,
      labels
    })
  },
};