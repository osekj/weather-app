import React from 'react';

// Images
import logoIMG from '../../images/logo.svg'

// Styles
import { Wrapper, Content, LogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={logoIMG} alt='logo' />
            <h1>WeatherApp</h1>
        </Content>
    </Wrapper>
);

export default Header;