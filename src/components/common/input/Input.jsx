import React from 'react';
import { InputWrapper } from './styled';

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