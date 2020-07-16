import React from 'react'
import { NavigationWrapper } from './styled';
import { Drawer } from './drawer';
import { Context } from '../../../context';

export const Navigation = () => {
  const { context, setContext } = React.useContext(Context);
  const toggleMenu = () => setContext({ ...context, menuOpen: !context.menuOpen });

  return (
    <NavigationWrapper>
      <Drawer open={context.menuOpen}/>
      <div className="burger">
        <span className="material-icons"  onClick={toggleMenu}>
          {!context.menuOpen ? 'menu' : 'menu_open'}
        </span>
      </div>
      <h1 className="app-title">Izypaper</h1>
      <div className="icons">
        <span className="material-icons icon">
          mail
        </span>
        <span className="material-icons icon">
          add_alert
        </span>
        <span className="material-icons icon">
          account_circle
        </span>
      </div>
    </NavigationWrapper>
  )
};
