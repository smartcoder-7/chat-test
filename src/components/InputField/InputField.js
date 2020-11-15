import React from 'react';
import './InputField.style.css';

const InputField = ({ onChange, placeholder,  value, ...props }) => {
  return (
    <input 
      className="input-field" 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
      {...props} 
    />
  );
};

export default InputField;
