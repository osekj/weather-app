import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
`;

export const Content = styled.div`
    position: relative;
    height: 55px;
    max-width: var(--maxWidth);
    width: 100%;
    margin: 0 auto;
    border: 1px solid white;
    border-radius: 5px;
    overflow: hidden;

    img {
        position: absolute;
        left: 15px;
        top: 12px;
        width: 30px;
    }

    input {
        font-size: var(--fontBig);
        position: absolute;
        left: 0%;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 65%;
        background: transparent;
        height: 40px;
        color: var(--white);

        :focus {
            outline: none;
        }

        @media screen and (max-width: 720px) {
            font-size: var(--fontMed);
        }
    }

    button {
        position: absolute;
        right: 0%;
        height: 100%;
        outline: none;
        border: none;
        background: transparent;
        color: var(--white);
        border-left: 1px solid white;
        font-size: var(--fontMed);
        width: 30%;
        cursor: pointer;
    }
`;