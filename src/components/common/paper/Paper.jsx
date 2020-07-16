import React from 'react';
import styled from 'styled-components';

const PaperWrapper = styled.div`
  background-color: white;
  box-shadow: rgba(60,60,60,0.2) 0px 0px 3px 0px;
  padding: 36px;
`;

export const Paper = ({ children }) => {
  return (
    <PaperWrapper>
      {children}
    </PaperWrapper>
  )
}
