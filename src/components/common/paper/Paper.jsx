import React from 'react';
import { PaperWrapper } from './styled';
import { useSpring } from 'react-spring';

export const Paper = ({ children }) => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  return (
    <PaperWrapper style={props}>
      {children}
    </PaperWrapper>
  )
}
