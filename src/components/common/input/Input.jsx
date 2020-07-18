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
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }

  input {
    width: 100%;
    height: 40px;
    border: none;
    background-color: #ccc;
    border-radius: 3px;
    padding: 8px 12px;

    &:focus {
      background-color: #ccc;
    }
  }
`;

export const Input = ({ label, type, value, onChange, className, name }) => {
  return (
    <InputWrapper className={className}>
      <label htmlFor={label}>{label}</label>
      <input 
        type={type}
        placeholder={label}
        name={name}
        value={value}
        onChange={onChange} 
        id={label}
      />
    </InputWrapper>
  )
};