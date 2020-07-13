import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ApolloWrapper } from '../apollo';
import { ContextProvider } from '../context';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils';
import { Router } from './Router';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <ApolloWrapper>
          <GlobalStyles />
          <Router />
        </ApolloWrapper>
      </ContextProvider>
    </ThemeProvider>
  );
};
