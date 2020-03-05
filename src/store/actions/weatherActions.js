import { weatherApi } from '../../api';

export const getWeatherByCityName = (city) => {
  return async (dispatch) => {
    try {
      const res = await weatherApi.getByCityName(city);
      dispatch(cityWeather(res.data));
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }
};

const cityWeather = weather => ({
  type: 'FETCH_WEATHER_REQUEST',
  payload: weather
});