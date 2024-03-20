import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import {
  ButtonText,
  Image,
  Input,
  InputField,
  Button,
  ButtonIcon,
  Icon,
} from "@gluestack-ui/themed";
import { LogIn } from "lucide-react-native";
import { useAuth } from "../hooks/auth";

export default function Login() {
  const auth = useAuth();

  return (
    <View style={styles.container}>
      <Image
        size="md"
        alt="Imagem da tela de login"
        source={{
          uri: "LINK",
        }}
      />

      <Input variant="outline" size="lg" my={8} width="90%">
        <InputField
          placeholder="E-mail"
          onChangeText={(text) => auth.setUser({ ...auth.user, email: text })}
        />
      </Input>
      <Input variant="outline" size="lg" mb={8} width="90%">
        <InputField
          placeholder="Senha"
          onChangeText={(passw) =>
            auth.setUser({ ...auth.user, password: passw })
          }
        />
      </Input>
      <Button
        size="lg"
        variant="solid"
        action="primary"
        onPress={auth.handleLogin}
      >
        <ButtonText>Acessar o app </ButtonText>
        <ButtonIcon>
          <Icon as={LogIn} size={"md"} color="white" />
        </ButtonIcon>
      </Button>
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
