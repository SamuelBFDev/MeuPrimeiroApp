import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StyledInput from "../components/StyledInput";
import StyledButton from "../components/StyledButton";
import { router } from "expo-router";
import DisplayAnImage from "../components/StyledImage";

export default function Login() {
  const handleLogin = () => {
    router.push("/home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <DisplayAnImage />
      </View>
      <Text>Tela de login</Text>
      <StyledInput
        onChangeText={(texto) => console.log("Email:", texto)}
        placeholder="Digite o seu email: "
      />
      <StyledInput
        onChangeText={(texto) => console.log("Senha", texto)}
        placeholder="Digite a sua senha: "
      />
      <StyledButton title="Acessar o app" OnPress={handleLogin} color="blue" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 75,
    height: 75,
    borderRadius: 50,
    borderWidth: 0,
    borderColor: "black",
    marginVertical: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    alignSelf: "auto",
    backgroundColor: "white",
    },
});
