import React, { useContext } from 'react';
import { SideMenuWrapper } from './styled';
import { Context } from '../../../context';

export const SideMenu = () => {
  const { state } = useContext(Context);

  return (
    <SideMenuWrapper displayed={state.sideMenuOpen}>
      
    </SideMenuWrapper>
  )
}
