import React from 'react';

const Dropdown = ({ options, onChange, value, name, ...props }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <select 
      className="dropdown" 
      value={value} 
      onChange={handleChange}
      name={name}
      {...props}
    >
      {options.map((option, index) => 
        <option key={index} value={option.value}>{option.label}</option>,
      )}
    </select>
  );
};

export default Dropdown;
