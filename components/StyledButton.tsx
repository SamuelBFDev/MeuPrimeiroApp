import { Button } from "react-native";

interface StyledButtonProps {
  title: string;
  OnPress: () => void;
  color?: string;
}

export default function StyledButton({
  title,
  OnPress,
  color,
}: StyledButtonProps) {
  return <Button title={title} onPress={OnPress} color={color} />;
}
