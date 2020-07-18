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
  }

  input {
    width: 100%;
    height: 42px;
    border: ${({ theme, error }) => error ? '2px solid red' : 'none'};
    background-color: #eee;
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