import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 50px auto;
    width: 100%;
    height: 300px;
`;

export const Content = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-areas: "General Daily"
                            "Weekly Weekly";
    grid-template-rows: 60% 40%;
    grid-template-columns: 60% 40%;
`;