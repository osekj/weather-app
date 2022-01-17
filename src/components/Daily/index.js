import React from 'react'

import { IMG_URL } from '../../config';

// Styles
import { Wrapper, Content, Day, Image, Text } from './Daily.styles';

const Daily = ({ weather }) => {
    const weekDay = new Date(weather.dt * 1000).toLocaleString("en-us", {
        weekday: "short"
    }).toUpperCase();

    console.log(weather);
    return (
        <Wrapper>
            <Content>
                <Day>{weekDay}</Day>
                <Image src={`${IMG_URL}${weather.weather[0].icon}.png`} alt='weather-icon'/>
                <Text>
                    <h3>{Math.round(weather.temp.day)}&deg;</h3>
                </Text>
            </Content>
        </Wrapper>
    )
}

export default Daily;