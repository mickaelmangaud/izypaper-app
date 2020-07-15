import React, { useState } from 'react';

export const Input = ({ value, id }) => {
  const [inputValue, setInputValue] = useState(value);
  const handleInputChange = evt => setInputValue(evt.target.value);

  return (
    <div>
      <label htmlFor={id}>Information 1 :</label>
      <input 
        value={inputValue}
        onChange={handleInputChange} 
        id={id}
      />
    </div>
  )
};