import React from 'react';
import styled from 'styled-components';
import { Context } from '../../../context';

const StyledScreenWrapper = styled.div`
  height: 100%;
  width:100vw;
  padding: 36px;
  margin-top: 64px;
  overflow-y: scroll;
`;

export const ScreenWrapper = ({ children }) => {
  const { context, setContext } = React.useContext(Context);
  const closeMenus = () => setContext({ ...context, sideMenuOpen: false, drawerOpen: false });

  return (
    <StyledScreenWrapper onClick={closeMenus}>
      {children}
    </StyledScreenWrapper>
  )
}
