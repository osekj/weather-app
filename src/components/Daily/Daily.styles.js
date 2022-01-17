import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 20%;
    height: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 25px;
`;

export const Day = styled.div`
    color: var(--white);
    font-weight: bold;
`;

export const Image = styled.img`
    
    :hover {
        animation-name: drop;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    @keyframes drop {
    0% {
        position: relative;
        top: 0;
    }
    50% {
        position: relative;
        top: 0.25rem;
    }
    100% {
        position: relative;
        top: 0;
    }
    }
`;

export const Text = styled.div`

`;