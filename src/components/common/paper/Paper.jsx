import React from 'react';
import { PaperWrapper } from './styled';

export const Paper = ({ children }) => {

  return (
    <PaperWrapper>
      {children}
    </PaperWrapper>
  )
}
