import React, { createContext, useReducer, useEffect } from 'react';
import { reducer } from './reducer';
import { axios } from '../utils';

import { 
  ADD_USER_TO_CONTEXT, 
  AUTH_ERROR, 
  DE_AUTHENTICATE, 
  SHOW_LOADER, 
  HIDE_LOADER,
  TOGGLE_DRAWER,
  CLOSE_DRAWER,
  TOGGLE_SIDE_MENU,
  CLOSE_SIDE_MENU,
} from './actions';

const defaultValue = {
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

export const ContextProvider =  ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem(process.env.REACT_APP_CONTEXT_NAME)) || defaultValue
  );

  /* Actions */
  const addUserToConText = user => dispatch({ type: ADD_USER_TO_CONTEXT, payload: user });
  const deAuthenticate = () => dispatch({ type: DE_AUTHENTICATE });
  const authError = error => dispatch({ type: AUTH_ERROR, payload: error });
  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });
  const toggleDrawer = () => dispatch({ type: TOGGLE_DRAWER });
  const closeDrawer = () => dispatch({ type: CLOSE_DRAWER });
  const toggleSideMenu = () => dispatch({ type: TOGGLE_SIDE_MENU });
  const closeSideMenu = () => dispatch({ type: CLOSE_SIDE_MENU });
  
  /* Saves state in localStorage on updates */
  useEffect(() => {
    localStorage.setItem(process.env.REACT_APP_CONTEXT_NAME, JSON.stringify(state));
  }, [state])
  
  /* Add expression-session user to context if is logged in */
  useEffect(() => {
    const addSessionUserToContext = async () => {
      try {
        const response = await axios.get(`/auth/user`);
        addUserToConText(response.data.user);
      } catch (error) {
        authError(error.message);
      }
    }

    addSessionUserToContext();
  }, []);

  return (
    <Context.Provider value={{
        state, dispatch,
        deAuthenticate,
        authError,
        addUserToConText,
        showLoader,
        hideLoader,
        toggleDrawer,
        closeDrawer,
        toggleSideMenu,
        closeSideMenu
      }}>
      {children}
    </Context.Provider>
  )
};