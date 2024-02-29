import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StyledInput from "../components/StyledInput";
import StyledButton from "../components/StyledButton";
import { router } from "expo-router";

export default function Login() {
  const handleLogin = () => {
    router.push("/home");
  };

  return (
    <View style={styles.container}>
      <Text>Tela de login</Text>
      <StyledInput
        onChangeText={(texto) => console.log("Email:", texto)}
        placeholder="Digite o seu email: "
      />
      <StyledInput
        onChangeText={(texto) => console.log("Senha", texto)}
        placeholder="Digite a sua senha: "
      />
      <StyledButton
        title="Acessar o app"
        OnPress={() => console.log("Entrar")}
        color="blue"
      />
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
});
