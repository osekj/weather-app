import {
    API_URL,
    API_KEY,
    CURRENT_WEATHER_URL,
    FORECAST_URL
} from './config';

const apiSettings = {
    getCurrentWeather: async cityName => {
        const endpoint = `${CURRENT_WEATHER_URL}${cityName}&appid=${API_KEY}&units=metric`;
        return await (await fetch(endpoint)).json();
    },
    
    getForecast: async (lon,lat) => {
        const endpoint = `${FORECAST_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        return await (await fetch(endpoint)).json();
    }
};

export default apiSettings;