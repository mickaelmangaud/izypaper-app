import React from 'react';
import styled from 'styled-components'

const SooWrapper = styled.div`
    margin: 0;
    padding: 0;
    background-color: #048b9a;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Ubuntu", sans-serif;
    font-size: 120px;
    color: white;

    @media (max-width: 760px) {
        font-size: 14vw;
    }
`;

export const Soon = () => {
    return (
        <SooWrapper>
            Bientôt
        </SooWrapper>
    )
}