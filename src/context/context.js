import { createContext } from 'react';

export const defaultValue = {
    loaderDisplayed: false,
    sideMenuOpen: false,
    drawerOpen: false,
    auth: {
      isAuthenticated: false,
      user: null,
      error: null,
    },
  };
  
  export const Context = createContext(defaultValue);