import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ApolloWrapper } from '../apollo';
import { Login } from '../screens';
import { ContextProvider } from '../context';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
`;

const App = () => {
  return (
    <ContextProvider>
      <ApolloWrapper>
        <GlobalStyles />
        <Login />
      </ApolloWrapper>
    </ContextProvider>
  );
};

export default App;
