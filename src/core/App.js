import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ApolloWrapper } from '../apollo';
import { ContextProvider } from '../context';
import { theme } from '../utils';
import { Router } from './Router';
import { Navigation } from '../components';
import { BrowserRouter } from 'react-router-dom';
import { history } from '../core';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    user-select: none;
    outline: none;
    font-family: 'Ubuntu', sans-serif;
  }
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <ApolloWrapper>
          <GlobalStyles />
          <BrowserRouter history={history}>
            <Navigation />
            <Router />
          </BrowserRouter>
        </ApolloWrapper>
      </ContextProvider>
    </ThemeProvider>
  );
};
