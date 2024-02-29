import { TextInput, StyleSheet } from "react-native";

// StyledInputProps is a type that defines the properties of the StyledInput component.
interface StyledInputProps {
  // The placeholder attribute is used to specify a short hint that describes the expected value of the input field.
  placeholder: string;
  // The value attribute is used to specify the value of the input field.
  // The onChangeText attribute is used to specify a function that is called when the value of the input field changes.
  onChangeText: (text: string) => void;
}

export default function StyledInput({
  placeholder,
  onChangeText,
}: StyledInputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
