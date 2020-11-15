import React from 'react';
import './Dropdown.style.css';

const Dropdown = ({ options, onChange, value }) => {
  return (
    <select className="dropdown" value={value} onChange={onChange}>
      {options.map((option, index) => 
        <option key={index} value={option.value}>{option.label}</option>,
      )}
    </select>
  );
};

export default Dropdown;
