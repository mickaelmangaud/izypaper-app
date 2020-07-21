import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  label {
    align-self: flex-start;
    font-size: 14px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-family: 'Lato', sans-serif;
    cursor: pointer;
  }

  input {
    width: 100%;
    height: 42px;
    background-color: ${({ error }) => error ? 'rgba(255,0,0,.3)' : '#eee'};
    border: none;
    border-radius: 5px;
    padding: 8px 12px;
    
    &:focus, &::active {
      background-color: red;
    }
  }
`;

export const Input = ({ label, type, value, onChange, className, name, error }) => {
  return (
    <InputWrapper className={className} error={error}>
      <label htmlFor={label}>{label}</label>
      <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange} 
        id={label}
      />
    </InputWrapper>
  )
};