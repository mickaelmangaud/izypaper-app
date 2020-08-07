import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloWrapper } from '../apollo';
import { ContextProvider } from '../context';
import { theme, GlobalStyles } from '../utils';
import { AppRouter } from './Router';
import { Navigation, Drawer, SideMenu, Loader } from '../components';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <ApolloWrapper>
          <GlobalStyles />
          <Loader />
          <SideMenu />  
          <Navigation />
          <Drawer />
          <AppRouter />
        </ApolloWrapper>
      </ContextProvider>
    </ThemeProvider>
  );
};
