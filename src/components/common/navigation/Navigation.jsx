import React from 'react'
import { NavigationWrapper } from './styled';
import { Context } from '../../../context';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const BurgerWrapper = styled.div`
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  
    .material-icons {
      color: white;
      padding: 12px;
      overflow: visible;
      font-size: 1.5rem;
      text-align: center;
      transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-radius: 50%;
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
`;

export const Navigation = () => {
  const location = useLocation();
  const displayNavBar = location.pathname !== '/login';
  const { context, setContext } = React.useContext(Context);
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
