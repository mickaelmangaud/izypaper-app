import React, { createContext, useReducer, useEffect } from 'react';
import { ADD_USER_TO_CONTEXT, AUTH_ERROR } from './actions';
import { reducer } from './reducer';
import axios from 'axios';

export const Context = createContext(null);

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

export const ContextProvider =  ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem(process.env.REACT_APP_CONTEXT_NAME)) || defaultValue
  );
  
  /* Enable context persistence on window reload */
  useEffect(() => {
    localStorage.setItem(process.env.REACT_APP_CONTEXT_NAME, JSON.stringify(state));
  }, [state])
  
  /* Add expression-session user to context if user is logged in */
  useEffect(() => {
    const addSessionUserToContext = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/auth/user`, { withCredentials: true });
        dispatch({ type: ADD_USER_TO_CONTEXT, payload: response.data.user });
      } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: error.message });
      }
    }

    addSessionUserToContext();
  }, []);

  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  )
};