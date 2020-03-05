import axios from 'axios';

const _apiBase = 'http://5e590ba303a86a0014046bdc.mockapi.io/api';

const getResourse = (url) => {
  return `${_apiBase}${url}`
};

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
    return axios.get(getResourse('/login'), {
      email,
      password
    })
  },

  register(email, password, fullName) {
    return axios.post(getResourse('/auth/register'), {
      email,
      password,
      fullName
    })
  },
};

export const Contacts = {
  getContacts() {
    return axios.get(getResourse('/contacts'))
  },

  createContact(fullName, email, company, phoneNumber, birthday) {
    return axios.post(getResourse('/contacts'), {
      fullName,
      email,
      company,
      phoneNumber,
      birthday
    })
  },

  updateContact({id, fullName, email, company, phoneNumber, birthday}) {
    console.log(id)
    return axios.put(getResourse(`/contacts/${id}`), {
      fullName,
      email,
      company,
      phoneNumber,
      birthday
    })
  },

  removeContact(id) {
    return axios.delete(getResourse(`/contacts/${id}`))
  }
};

export const Charts = {
  getChartById({id, fullName, email, company, phoneNumber, birthday}) {
    return axios.put(getResourse(`/contacts/${id}`), {
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
    return axios.get(getResourse(`/todo`))
  },

  updateTodo({id, title, description, isFavorite,  isComplete, labels}) {
    return axios.put(getResourse(`/todo/${id}`), {
      title,
      description,
      isFavorite,
      isComplete,
      labels
    })
  },

  removeTodo(id) {
    return axios.delete(getResourse(`/todo/${id}`))
  },

  createTodo({ title, description, isFavorite,  isComplete, labels }) {
    return axios.post(getResourse('/todo/'), {
      title,
      description,
      isFavorite,
      isComplete,
      labels
    })
  }
};