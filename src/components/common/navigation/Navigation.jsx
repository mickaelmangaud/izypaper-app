import React, { useContext } from 'react'
import { NavigationWrapper, BurgerWrapper } from './styled';
import { Context } from '../../../context';

export const Navigation = () => {
  const { state, toggleDrawer, toggleSideMenu } = useContext(Context);
  const displayNavBar = state.auth.isAuthenticated && window.location.pathname !== '/' && window.location.pathname !== '/inscription';

  return (
    <NavigationWrapper displayed={displayNavBar}>

      <BurgerWrapper
        className="burger"
        onClick={toggleSideMenu}>
        <span className="material-icons">menu</span>
      </BurgerWrapper>
      
      <h1 className="app-title">Izypaper</h1>
      
      <div className="icons">
        <span className="material-icons icon">mail</span>
        <span className="material-icons icon">add_alert</span>
        <span className="material-icons icon"  onClick={toggleDrawer}>account_circle</span>
      </div>
    </NavigationWrapper>
  )
};
