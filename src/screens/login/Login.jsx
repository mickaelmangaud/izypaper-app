import React from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  .infos {
    flex: 1;
    background-color: ${({theme}) => theme.colors.primary};
  }

  .form {
    flex: 1;
  }
`;

export const Login = () => {
  return (
    <LoginWrapper>
      <div className="infos"></div>
      <div className="form"></div>
    </LoginWrapper>
  )
};