import React from 'react';

import { IMG_URL } from '../../config';

// Styles
import { Wrapper, Content } from './Details.styles';

const Details = ({ main, wind }) => {
    return (
        <Wrapper>
            <Content>
                <h1>{Math.round(main.temp)} &#8451;</h1>
                <p>Humidity: {main.humidity}%</p>
                <p>Wind: {Math.round(wind.speed * 3600 / 1000)} km/h</p>
            </Content>
        </Wrapper>
    )
}

export default Details;