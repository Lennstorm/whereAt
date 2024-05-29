import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

function Button({ className, to, text, onClick }) {
  const handleClick = (event) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {text}
    </Link>
  );
}

export default Button;
