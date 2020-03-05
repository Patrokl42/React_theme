import axios from 'axios';

const _apiBase = 'http://api.openweathermap.org/data/2.5';
const _token = 'cb6f8d330ff96bb58dbea89ae939db99';

const getResourse = (url) => {
  return `${_apiBase}${url}&appid=${_token}`
};

export const getByCityName = (cityName) => {
  return axios.get(getResourse(`/forecast?q=${cityName}`));
};