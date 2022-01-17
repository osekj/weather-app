import React from 'react';

import { IMG_URL } from '../../config';

// Styles
import { Wrapper, Content, Text, Image } from './General.styles';

const General = ({ cityName, countryCode, weather }) => {
    var getCountryNames = new Intl.DisplayNames(['en'], {type: 'region'});
    const country = getCountryNames.of(countryCode)
    console.log(`${IMG_URL}${weather[0].icon}.png`);
    return (
        <Wrapper>
            <Content>
                <Image src={`${IMG_URL}${weather[0].icon}.png`} alt='weather-icon'/>
                <Text>
                    <h1>{cityName}, </h1> <h3>{country}</h3>
                    {/* {
                        weather.map(function(item, i) {
                            return <p key={i}>{item.description}</p>
                        })
                    } */}
                </Text>            
            </Content>
        </Wrapper>
    )
}

export default General;