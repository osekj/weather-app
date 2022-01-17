import React from 'react';

// Components
import Daily from '../Daily';

// Styles
import { Wrapper, Content } from './Weekly.styles';

const Weekly = ( { forecast } ) => {
    const slicedForecast = forecast.slice(1, 6);
    return (
        <Wrapper>
            <Content>
                {
                    slicedForecast.map(function(day, i) {
                        return <Daily key={i} weather={day} />
                    })
                }
            </Content>
        </Wrapper>
    )
}

export default Weekly;