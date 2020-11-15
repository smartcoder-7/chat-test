import React from 'react';
import './Button.style.css';

const Button = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>{children}</button>
  );
};

export default Button;
