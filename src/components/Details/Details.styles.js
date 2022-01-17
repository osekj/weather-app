import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    grid-area: Daily;
`;

export const Content = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    text-align: right;

    h1 {
        margin: 0;
    }
`;