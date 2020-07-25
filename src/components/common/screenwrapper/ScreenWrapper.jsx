import React, { useContext } from 'react';
import { Context } from '../../../context';
import { StyledScreenWrapper } from './styled';

export const ScreenWrapper = ({ children }) => {
  const { closeDrawer, closeSideMenu } = useContext(Context);

  const closeMenus = () => {
    closeDrawer();
    closeSideMenu();
  }
    
  return (
    <StyledScreenWrapper onClick={closeMenus}>
      {children}
    </StyledScreenWrapper>
  )
}
