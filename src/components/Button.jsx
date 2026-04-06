import React from 'react';

const Button = ({ variant = 'primary', className = '', children, ...props }) => {
  return (
    <button className={`btn btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
