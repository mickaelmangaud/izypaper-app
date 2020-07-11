import React, { createContext, useState } from 'react';

export const Context = createContext(null);

export const ContextProvider =  ({ children }) => {
  const [context, setContext] = useState({
    menuOpen: false,  
  });

  console.log('ContextProvider : ', context);
  
  return (
    <Context.Provider value={{context, setContext}}>
      {children}
    </Context.Provider>
  )
};