import React from 'react'
import { NavigationWrapper } from './styled';
import { Drawer } from './drawer';
import { Context } from '../../../context';
import styled from 'styled-components';

const BurgerWrapper = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
    .material-icons {
      color: ${({ open }) => open ? 'black' : 'white'};
      font-size: 32px;
      transition: all .1s ease;
      margin-left: 12px;
    }
`;

export const Navigation = () => {
  const { context, setContext } = React.useContext(Context);
  const toggleMenu = () => setContext({ ...context, menuOpen: !context.menuOpen });

  return (
    <NavigationWrapper>
      <Drawer open={context.menuOpen}/>
      <BurgerWrapper open={context.menuOpen} className="burger" style={{
        zIndex: '1000'
      }}>
        <span className="material-icons"  onClick={toggleMenu}>
          {!context.menuOpen ? 'menu' : 'menu_open'}
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
        <span className="material-icons icon">
          account_circle
        </span>
      </div>
    </NavigationWrapper>
  )
};
