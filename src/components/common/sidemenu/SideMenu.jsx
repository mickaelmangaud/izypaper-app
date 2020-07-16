import React from 'react';
import styled from 'styled-components';
import { Context } from '../../../context';

const SideMenuWrapper = styled.div`
  position: absolute;
  background-color: white;
  height: 100vh;
  width: 250px;
  left: ${({ displayed }) => displayed ? '0' : '-250px'};
  top: 0;
  box-shadow: rgba(0,0,0,0.2) 0px 0px 5px 1px;
  transition: all .2s ease;
`;

export const SideMenu = () => {
  const { context } = React.useContext(Context);

  return (
    <SideMenuWrapper displayed={context.sideMenuOpen}>
      SideMnusdf
    </SideMenuWrapper>
  )
}
