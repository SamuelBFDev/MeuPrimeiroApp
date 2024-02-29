import React from "react";

interface StyledTextProps {
  text: string;
}

const StyledText: React.FC<StyledTextProps> = ({ text }) => {
  return <p>{text}</p>;
};

export default StyledText;
