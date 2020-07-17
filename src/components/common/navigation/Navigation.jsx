import React from 'react'
import { NavigationWrapper, BurgerWrapper } from './styled';
import { Context } from '../../../context';

export const Navigation = () => {
  const { context, setContext } = React.useContext(Context);
  const displayNavBar = context.auth.isAuthenticated && window.location.pathname !== '/';

  const toggleDrawer = () => setContext({ ...context, drawerOpen: !context.drawerOpen });
  const handleClickBurger = () => setContext( context => ({ ...context, sideMenuOpen: !context.sideMenuOpen }));

  return (
    <NavigationWrapper displayed={displayNavBar}>
      <BurgerWrapper className="burger" onClick={handleClickBurger}>
        <span className="material-icons">
          {!context.sideMenuOpen ? 'menu' : 'menu_open'}
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
          {!context.drawerOpen ? 'account_circle' : 'close'}
        </span>
      </div>
    </NavigationWrapper>
  )
};
