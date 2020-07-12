import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ApolloWrapper } from '../apollo';
import { Login } from '../screens';
import { ContextProvider } from '../context';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <ApolloWrapper>
          <GlobalStyles />
          <Login />
        </ApolloWrapper>
      </ContextProvider>
    </ThemeProvider>
  );
};

export default App;
