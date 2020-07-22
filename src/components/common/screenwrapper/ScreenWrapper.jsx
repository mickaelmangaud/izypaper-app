import React, { useContext } from 'react';
import { Context } from '../../../context';
import { StyledScreenWrapper } from './styled';
import { CLOSE_DRAWER, CLOSE_SIDE_MENU } from '../../../context/actions';

export const ScreenWrapper = ({ children }) => {
  const { dispatch } = useContext(Context);

  const closeMenus = () => {
    dispatch({ type: CLOSE_SIDE_MENU });
    dispatch({ type: CLOSE_DRAWER });
  }
    
  return (
    <StyledScreenWrapper onClick={closeMenus}>
      {children}
    </StyledScreenWrapper>
  )
}
