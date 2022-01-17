import { useState, useEffect } from 'react';
import API from '../API';

export const useWeatherFetch = cityName => {
    const [state, setState] = useState({});
    const [forecast, setForecast] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleSearch = async () => {
            try {
                setError(false);
                setLoading(true);
                const weather = cityName ? await API.getCurrentWeather(cityName) : {};
                const forecast_ = cityName ? await API.getForecast(weather.coord.lon, weather.coord.lat) : {};
                setState(weather);
                setForecast(forecast_.daily);
            } catch(error) {
                console.log(error);
                setError(true);
            }
            setLoading(false);
        }

        handleSearch();
    }, [cityName])

    return { state, forecast, error, loading };
}