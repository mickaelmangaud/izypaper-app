import React, { useContext } from 'react'
import { NavigationWrapper, BurgerWrapper } from './styled';
import { Context } from '../../../context';
import { TOGGLE_DRAWER, TOGGLE_SIDE_MENU } from '../../../context/actions';

export const Navigation = () => {
  const { state, dispatch } = useContext(Context);
  const displayNavBar = state.auth.isAuthenticated || window.location.pathname !== '/';

  const toggleDrawer = () => dispatch({ type: TOGGLE_DRAWER });
  const handleClickBurger = () => dispatch({ type: TOGGLE_SIDE_MENU });

  return (
    <NavigationWrapper displayed={displayNavBar}>
      <BurgerWrapper className="burger" onClick={handleClickBurger}>
        <span className="material-icons">
          {!state.sideMenuOpen ? 'menu' : 'menu_open'}
        </span>
      </BurgerWrapper>
      <h1 className="app-title">Izypaper</h1>
      <div className="icons">
        <span className="material-icons icon">
          mail
        </span>
        <span className="material-icons icon">
          add_alert
        </span>
        <span className="material-icons icon"  onClick={toggleDrawer}>
          {!state.drawerOpen ? 'account_circle' : 'close'}
        </span>
      </div>
    </NavigationWrapper>
  )
};
