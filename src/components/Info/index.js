import React from 'react';

// Components
import General from '../General';
import Details from '../Details';
import Weekly from '../Weekly';
import Spinner from '../Spinner';

// Hooks
import { useWeatherFetch } from '../../hooks/useWeatherFetch';

// Styles
import { Wrapper, Content } from './Info.styles';

const Info = ( { cityName }) => {
    const { state: weather, forecast: forecast, error, loading } = useWeatherFetch(cityName);
    return (
        <Wrapper>
            {loading && <Spinner />}
            {
                Object.keys(weather).length != 0 && forecast !== undefined && !loading &&
                (<Content>
                    <General countryCode={weather.sys.country} cityName={weather.name} weather={weather.weather}/>
                    <Details main={weather.main} wind={weather.wind}/>
                    <Weekly forecast={forecast}/>
                 </Content>)
            }
        </Wrapper>
    )
}

export default Info;