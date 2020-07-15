import React from 'react';
import styled from 'styled-components';

const StyledScreenWrapper = styled.div`
  padding: 36px;
`;

export const ScreenWrapper = ({ children }) => {
  return (
    <StyledScreenWrapper>
      {children}
    </StyledScreenWrapper>
  )
}
