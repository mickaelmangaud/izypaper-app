import React from 'react';
import { Context } from '../../../context';
import { StyledScreenWrapper } from './styled';

export const ScreenWrapper = ({ children }) => {
  const { setContext } = React.useContext(Context);

  const closeMenus = () => {
    setContext(context => ({ 
      ...context,
      sideMenuOpen: false,
      drawerOpen: false
    }));
  }
    
  return (
    <StyledScreenWrapper onClick={closeMenus}>
      {children}
    </StyledScreenWrapper>
  )
}
