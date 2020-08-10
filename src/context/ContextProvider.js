import React, {  useReducer, useEffect } from 'react';
import { Context, defaultValue } from './context';
import { reducer } from './reducer';
import { axios } from '../utils';
import { 
  ADD_USER_TO_CONTEXT, AUTH_ERROR, DE_AUTHENTICATE, 
  SHOW_LOADER, HIDE_LOADER,
  TOGGLE_DRAWER, CLOSE_DRAWER,
  TOGGLE_SIDE_MENU, CLOSE_SIDE_MENU,
} from './actions';


export const ContextProvider =  ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem(process.env.REACT_APP_CONTEXT_NAME)) || defaultValue
  );

  useEffect(() => {
    localStorage.setItem(process.env.REACT_APP_CONTEXT_NAME, JSON.stringify(state));
  }, [state])
  
  useEffect(() => {
    async function addSessionUserToContext() {
      try {
        const { data } = await axios.get(`/auth/user`);
        addUserToContext(data);
      } catch (error) {
        authError(error.message);
      }
    }
    
    addSessionUserToContext();
  }, []);

  const addUserToContext = user => dispatch({ type: ADD_USER_TO_CONTEXT, payload: user });
  const authError = error => dispatch({ type: AUTH_ERROR, payload: error });
  const deAuthenticate = () => dispatch({ type: DE_AUTHENTICATE });
  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });
  const toggleDrawer = () => dispatch({ type: TOGGLE_DRAWER });
  const closeDrawer = () => dispatch({ type: CLOSE_DRAWER });
  const toggleSideMenu = () => dispatch({ type: TOGGLE_SIDE_MENU });
  const closeSideMenu = () => dispatch({ type: CLOSE_SIDE_MENU });

  return (
    <Context.Provider value={{
        state, 
        addUserToContext, authError, deAuthenticate,
        showLoader, hideLoader,
        toggleDrawer, closeDrawer,
        toggleSideMenu, closeSideMenu}}>
      {children}
    </Context.Provider>
  )
};