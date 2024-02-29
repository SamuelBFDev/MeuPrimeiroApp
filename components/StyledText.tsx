import React from "react";
import { Text } from "react-native";

interface StyledTextProps {
  text: string;
}

const StyledText: React.FC<StyledTextProps> = ({ text }) => {
  return <Text>{text}</Text>;
};

export default StyledText;
