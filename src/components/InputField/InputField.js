import React from 'react';
import cn from 'classnames';

const InputField = ({ 
  onChange, 
  placeholder, 
  value, 
  name, 
  className = '', 
  icon, 
  inputClassName, 
  ...props 
}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <span className={cn('input-field', className)}>
      <i className={`fas ${icon}`} />
      <input 
        className={cn('inner-input', inputClassName)}
        value={value} 
        onChange={handleChange} 
        placeholder={placeholder} 
        name={name}
        {...props} 
      />
    </span>
  );
};

export default InputField;
