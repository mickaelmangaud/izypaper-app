import React from 'react';
import styled from 'styled-components';
import { background } from '../../../assets/images';

const StyledScreenWrapper = styled.div`
  height: 100%;
  width:100vw;
  padding: 36px;
  margin-top: 64px;
`;

export const ScreenWrapper = ({ children }) => {
  return (
    <StyledScreenWrapper>
      {children}
    </StyledScreenWrapper>
  )
}
