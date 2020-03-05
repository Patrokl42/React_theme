const initState = {
  cityWeather: {}
};

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_REQUEST':
      return {
        ...state,
        cityWeather: action.payload
      };

    default:
      return state;
  }
};

export default weatherReducer;