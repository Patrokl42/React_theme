import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getWeatherByCityName} from "../../store/actions/weatherActions";

import {
  cloudAndSunIcon,
  windIcon,
  cloudsIcon,
  barometer,
  humidity
} from "../../components/Icons/Icons";

import s from './Weather.module.scss';

const Weather = () => {
  const weather = useSelector(state => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherByCityName('Ivano-Frankivsk'));
  }, []);

  console.log(weather);

  return (
    <div className={s.weather}>
      <div className={s.main_content}>
        <div className={s.weather_input}>
          <input type='text'/>
        </div>
        <div className={s.content_center}>
          <div className={s.weather_icon}>
            {cloudAndSunIcon}
          </div>
          <div className={s.weather_main_params}>
            <span className={s.weather_title}>{weather.cityWeather.list[0].weather[0].main}</span>
            <span className={s.weather_description}>{weather.cityWeather.list[0].weather[0].description}</span>
            <span className={s.weather_temp}>{(weather.cityWeather.list[0].main.temp - 273.15).toFixed(2)} C°</span>
          </div>
          <div className={s.weather_info}>
            <div className={s.weather_info_col}>
              <div className={s.col_icon}>
                {windIcon}
              </div>
              <div>
                <span className={s.weather_info_title}>Wind Speed</span>
                <span className={s.weather_info_value}>{weather.cityWeather.list[0].wind.speed}</span>
              </div>
            </div>
            <div className={s.weather_info_col}>
              <div className={s.col_icon}>
                {cloudsIcon}
              </div>
              <div>
                <span className={s.weather_info_title}>Cloudiness</span>
                <span className={s.weather_info_value}>{weather.cityWeather.list[0].clouds.all}%</span>
              </div>
            </div>
            <div className={s.weather_info_col}>
              <div className={s.col_icon}>
                {barometer}
              </div>
              <div>
                <span className={s.weather_info_title}>Pressure</span>
                <span className={s.weather_info_value}>{weather.cityWeather.list[0].main.pressure} hPa</span>
              </div>
            </div>
            <div className={s.weather_info_col}>
              <div className={s.col_icon}>
                {humidity}
              </div>
              <div>
                <span className={s.weather_info_title}>Humidity</span>
                <span className={s.weather_info_value}>{weather.cityWeather.list[0].main.humidity}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.weather_nav}>
        <div className={s.city_info}>
          <span className={s.city_name}>{weather.cityWeather.city.name}</span>
          <span className={s.country}>{weather.cityWeather.city.country}</span>
        </div>
      </div>
    </div>
  )
};

export default Weather;