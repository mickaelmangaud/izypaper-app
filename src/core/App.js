import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloWrapper } from '../apollo';
import { ContextProvider } from '../context';
import { theme, GlobalStyles } from '../utils';
import { AppRouter } from './Router';
import { Navigation, Drawer, SideMenu, Loader } from '../components';
import { BrowserRouter as Router } from 'react-router-dom';
import { history } from '../core';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <ApolloWrapper>
          <GlobalStyles />
          <Router>
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
