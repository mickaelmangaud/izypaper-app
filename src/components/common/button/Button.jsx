import React from 'react';
import { ButtonWrapper } from './styled';

export const Button = ({ label, className, onClick }) => {
  return (
      <ButtonWrapper>
        <button className={className} onClick={onClick}>
          {label}
        </button>
      </ButtonWrapper>
  )
}