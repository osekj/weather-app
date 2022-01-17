const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = process.env.REACT_APP_API_KEY;
const IMG_URL = 'http://openweathermap.org/img/w/'

const CURRENT_WEATHER_URL = `${API_URL}weather?q=`;
const FORECAST_URL = `${API_URL}onecall?`
export {
    API_URL,
    API_KEY,
    IMG_URL,
    CURRENT_WEATHER_URL,
    FORECAST_URL
};