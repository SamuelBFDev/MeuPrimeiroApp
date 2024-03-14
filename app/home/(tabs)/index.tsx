import { View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import DisplayAnImage from "../../../components/StyledImage";
import StyledText from "../../../components/StyledText";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import {
  Input,
  InputField,
  Text,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { Entypo } from "@expo/vector-icons";
import { useAuth } from "../../../hooks/auth";
import { useEffect, useState } from "react";

export default function Home() {
  const auth = useAuth();

  const [list, setList] = useState([{ id: 1, title: "teste" }]);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <DisplayAnImage />
        <StyledText text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, debitis voluptatibus similique obcaecati voluptatem dolorum delectus ea unde ex rerum? Sed neque illum cum voluptatum vitae! Iste asperiores sapiente distinctio?" />
      </View>
      <View style={styles.itemContainer}>
        <DisplayAnImage />
        <StyledText text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, debitis voluptatibus similique obcaecati voluptatem dolorum delectus ea unde ex rerum? Sed neque illum cum voluptatum vitae! Iste asperiores sapiente distinctio?" />
      </View>
      <View style={styles.itemContainer}>
        <DisplayAnImage />
        <StyledText text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, debitis voluptatibus similique obcaecati voluptatem dolorum delectus ea unde ex rerum? Sed neque illum cum voluptatum vitae! Iste asperiores sapiente distinctio?" />
      </View>
      <Text>Login ({auth.user.email}) com sucesso!</Text>
      <Link href="/">Voltar ao login</Link>
      <Button onPress={auth.handleLogout}>Sair do sistema</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // textContainer: {
  //   flex: 1,
  //   marginRight: 10,
  // },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 1,
    marginLeft: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

/*import { View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import DisplayAnImage from "../../../components/StyledImage";
import StyledText from "../../../components/StyledText";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import {
  Input,
  InputField,
  Text,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { Entypo } from "@expo/vector-icons";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <DisplayAnImage />
        <StyledText text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, debitis voluptatibus similique obcaecati voluptatem dolorum delectus ea unde ex rerum? Sed neque illum cum voluptatum vitae! Iste asperiores sapiente distinctio?" />
      </View>
      <View style={styles.itemContainer}>
        <DisplayAnImage />
        <StyledText text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, debitis voluptatibus similique obcaecati voluptatem dolorum delectus ea unde ex rerum? Sed neque illum cum voluptatum vitae! Iste asperiores sapiente distinctio?" />
      </View>
      <View style={styles.itemContainer}>
        <DisplayAnImage />
        <StyledText text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, debitis voluptatibus similique obcaecati voluptatem dolorum delectus ea unde ex rerum? Sed neque illum cum voluptatum vitae! Iste asperiores sapiente distinctio?" />
      </View>
      <View style={styles.imageContainer}></View>
      <Text>Login com sucesso!</Text>
      <Link href="/">Voltar ao login</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // textContainer: {
  //   flex: 1,
  //   marginRight: 10,
  // },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 1,
    marginLeft: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
*/
