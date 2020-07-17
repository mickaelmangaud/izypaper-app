import React from 'react';
import { SideMenuWrapper } from './styled';
import { Context } from '../../../context';

export const SideMenu = () => {
  const { context } = React.useContext(Context);

  return (
    <SideMenuWrapper displayed={context.sideMenuOpen}>
      SideMnusdf
    </SideMenuWrapper>
  )
}
