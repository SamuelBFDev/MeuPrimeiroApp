import React from "react";

interface StyledImageProps {
  src: string;
  alt: string;
  className?: string;
}

const StyledImage: React.FC<StyledImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default StyledImage;
