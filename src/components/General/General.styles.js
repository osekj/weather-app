import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    grid-area: General;
`;

export const Content = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const Text = styled.div`
    padding: 0 15px;
    h1 {
        display: inline;
    }

    h3 {
        display: inline;
    }
`;

export const Image = styled.img`
    width: 30%;
    height: 40%;
    margin: 0 auto;
    animation-name: sun;
    animation-duration: 1s;
    animation-iteration-count: infinite;

    @keyframes sun {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }
`;