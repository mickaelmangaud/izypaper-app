import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const Context = createContext(null);

export const ContextProvider =  ({ children }) => {
  const [context, setContext] = useState({
    menuOpen: false,
    auth: {
      isAuthenticated: false,
      user: null,
      error: null,
    },
  });

  useEffect(() => {
    const addSessionUserToContext = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/auth/user`, { withCredentials: true });
        setContext( context =>
          ({ ...context, auth: { error: null, user: response.data.user, isAuthenticated: true } })
        )
      } catch (error) {
        setContext(
          context => 
            ({ ...context, auth: { error: error.message, user: null, isAuthenticated: false } })
        )
      }
    }

    addSessionUserToContext();
  }, []);

  console.log('ContextProvider : ', context);
  return (
    <Context.Provider value={{context, setContext}}>
      {children}
    </Context.Provider>
  )
};