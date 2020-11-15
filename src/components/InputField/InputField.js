import React from 'react';

const InputField = ({ onChange, placeholder, value, name, className = '', ...props }) => {
  return (
    <input 
      className={`input-field ${className}`} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
      name={name}
      {...props} 
    />
  );
};

export default InputField;
