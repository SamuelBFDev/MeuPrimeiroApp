import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { router } from "expo-router";
import {
  Input,
  InputField,
  Text,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { IUserLogin } from "../interfaces/login";
import { useAuth } from "../hooks/auth";

export default function Login() {
  const auth = useAuth();

  return (
    <View style={styles.container}>
      <Text size="sm">Tela de login</Text>

      <Input variant="outline" size="md" mb={8}>
        <InputField
          placeholder="Digite o seu e-mail"
          onChangeText={(texto) => auth.setUser({ ...auth.user, email: texto })}
        />
      </Input>

      <Input variant="outline" size="md" mb={8}>
        <InputField
          type="password"
          onChangeText={(texto) =>
            auth.setUser({ ...auth.user, password: texto })
          }
          placeholder="Digite a sua senha"
        />
      </Input>

      <Button
        onPress={auth.handleLogin}
        size="lg"
        variant="solid"
        action="primary"
      >
        <ButtonText>
          Acessar o app <Entypo name="login" size={24} color="black" />
        </ButtonText>
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
  tinyLogo: {
    width: 100,
    height: 100,
  },
});

/*
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { router } from "expo-router";
import {
  Input,
  InputField,
  Text,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { IUserLogin } from "../interfaces/login";

export default function Login() {
  const [user, setUser] = useState<IUserLogin>({ email: "", password: "" });

  const handleLogin = () => {
    if (user.email == "admin" && user.password == "admin123") {
      router.push("home");
    } else {
      alert("Erro ao acessar!");
    }
  };

  return (
    <View style={styles.container}>
      <Text size="sm">Tela de login</Text>

      <Input variant="outline" size="md" mb={8}>
        <InputField
          placeholder="Digite o seu e-mail"
          onChangeText={(texto) => setUser({ ...user, email: texto })}
        />
      </Input>

      <Input variant="outline" size="md" mb={8}>
        <InputField
          type="password"
          onChangeText={(texto) => setUser({ ...user, password: texto })}
          placeholder="Digite a sua senha"
        />
      </Input>

      <Button onPress={handleLogin} size="lg" variant="solid" action="primary">
        <ButtonText>
          Acessar o app <Entypo name="login" size={24} color="black" />
        </ButtonText>
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
  tinyLogo: {
    width: 100,
    height: 100,
  },
});
*/

/*
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import StyledInput from "../components/StyledInput";
import StyledButton from "../components/StyledButton";
import { router } from "expo-router";
import {
  GluestackUIProvider,
  Card,
  Heading,
  Text,
  InputField,
  Input,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import DisplayAnImage from "../components/StyledImage";
import { IUserLogin } from "../interfaces/login";
import { useState } from 'react'

export default function Login() {
  
  const [user,setUser] = useState<IUserLogin>({email:'',password:''})

  const handleLogin = () => {
    if(user.email == 'admin' && user.password == 'admin123'){
      router.push('home')
    } else {
      alert('Erro ao acessar!')
    }
  }

  const handleLogin = () =>
    router.push("home");
  };

  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        <Card size="md" variant="elevated" m="$3">
          <Heading mb="$1" size="md">
            Quick Start
          </Heading>
          <Text size="sm">Start building your next project in minutes</Text>
        </Card>

        <Text size="sm"> Login screen</Text>

        <Input
          variant="outline"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField placeholder="Enter Text here" />
        </Input>

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
        <StyledButton
          title="Acessar o app"
          OnPress={handleLogin}
          color="blue"
        />
        <StatusBar style="auto" />
      </View>
    </GluestackUIProvider>
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
*/
