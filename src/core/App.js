import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloWrapper } from '../apollo';
import { ContextProvider } from '../context';
import { theme, GlobalStyles } from '../utils';
import { AppRouter } from './Router';
import { Navigation, Drawer, SideMenu, Loader } from '../components';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <ApolloWrapper>
          <GlobalStyles />
          <BrowserRouter>
            <Loader />
            <SideMenu />  
            <Navigation />
            <Drawer />
            <AppRouter />
          </BrowserRouter>
        </ApolloWrapper>
      </ContextProvider>
    </ThemeProvider>
  );
};
