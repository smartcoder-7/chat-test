import React from 'react';

const InputField = ({ onChange, placeholder, value, name, className = '', ...props }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <input 
      className={`input-field ${className}`} 
      value={value} 
      onChange={handleChange} 
      placeholder={placeholder} 
      name={name}
      {...props} 
    />
  );
};

export default InputField;
