import React, { useContext } from 'react';
import { SideMenuWrapper } from './styled';
import { Context } from '../../../context';

export const SideMenu = () => {
  const { state, closeSideMenu } = useContext(Context);

  return (
    <SideMenuWrapper displayed={state.sideMenuOpen}>
      <span class="material-icons close" onClick={closeSideMenu}>menu_open</span>
    </SideMenuWrapper>
  )
}
