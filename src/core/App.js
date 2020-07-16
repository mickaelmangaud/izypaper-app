import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ApolloWrapper } from '../apollo';
import { ContextProvider } from '../context';
import { theme } from '../utils';
import { AppRouter } from './Router';
import { Navigation, Drawer, SideMenu, Loader } from '../components';
import { BrowserRouter as Router } from 'react-router-dom';
import { history } from '../core';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    user-select: none;
    outline: none;
    font-family: 'Ubuntu', sans-serif;
    color: rgba(0,0,0, .85);
  }

  body, #root {
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: #eee;
  }
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <ApolloWrapper>
          <GlobalStyles />
          <Router history={history}>
            <Loader />
            <SideMenu />  
            <Navigation />
            <Drawer />
            <AppRouter />
          </Router>
        </ApolloWrapper>
      </ContextProvider>
    </ThemeProvider>
  );
};
