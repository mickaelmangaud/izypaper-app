import React from 'react';
import { SideMenuWrapper } from './styled';
import { Context } from '../../../context';

export const SideMenu = () => {
  const { state } = React.useContext(Context);

  return (
    <SideMenuWrapper displayed={state.sideMenuOpen}>
      SideMnusdf
    </SideMenuWrapper>
  )
}
