import React from 'react';

const Dropdown = ({ options, onChange, value, name, ...props }) => {
  return (
    <select 
      className="dropdown" 
      value={value} 
      onChange={onChange}
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
