import React from 'react';
import { ButtonWrapper } from './styled';

export const Button = ({ label, className }) => {
  return (
      <ButtonWrapper>
        <button className={className}>
          {label}
        </button>
      </ButtonWrapper>
  )
}