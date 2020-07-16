import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ApolloWrapper } from '../apollo';
import { ContextProvider } from '../context';
import { theme } from '../utils';
import { Router } from './Router';
import { Navigation, Drawer, SideMenu } from '../components';
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
          <BrowserRouter history={history}>
            <SideMenu />  
            <Navigation />
            <Drawer />
            <Router />
          </BrowserRouter>
        </ApolloWrapper>
      </ContextProvider>
    </ThemeProvider>
  );
};
