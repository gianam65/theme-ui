import React from 'react';

const CustomLogo = ({ src, alt, width, height, className }) => {
    const combinedClassName = className ? `custom-image ${className}` : 'cs-logo';
  return (
    <img 
      src={src} 
      alt={alt} 
      className={combinedClassName} 
      style={{ width: width, height: height }} 
    />
  );
};

export default CustomLogo;