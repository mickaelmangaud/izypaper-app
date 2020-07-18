import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  width: 100%;
  
  button {
    width: 100%;
    height: 40px;
    border: none;
    background-color: #ccc;
    border-radius: 3px;
    padding: 8px 12px;
  }
`;

export const Button = ({ label, value }) => {
  return (
      <ButtonWrapper>
        <button value={value}>{label}</button>
      </ButtonWrapper>
  )
}