import { createGlobalStyle } from 'styled-components';
import backgroundImg from './images/clouds.jpg';

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightBlue: #add8e6;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    html {
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        background-image: linear-gradient( rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45) ), url(${backgroundImg});
        background-size: cover;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--white);
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }
    }

    
`;