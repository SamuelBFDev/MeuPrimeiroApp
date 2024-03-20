import { Text } from "react-native";
import { Link } from "expo-router";
import { useAuth } from "../../../hooks/auth";
import { Button } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const auth = useAuth();
  const [list, setList] = useState<IPost[]>([]);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setList(json));
  }, []);

  return (
    <>
      <Text>Login ({auth.user.email}) com sucesso!</Text>
      {list.map((post) => (
        <Text key={post.id}>{post.title}</Text>
      ))}
      <Link href="/">Voltar ao login</Link>
      <Button onPress={auth.handleLogout}>
        <Text>Sair do sistema</Text>
      </Button>
    </>
  );
}

/*import { Link } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { View, Text, StyleSheet } from "react-native"
import { useAuth } from "../../../hooks/auth"
import { useEffect, useState } from "react"
import { Divider } from "@gluestack-ui/themed"

interface IPost {
    userId: number
    id: number
    title: string
    body: string
}

export default function Home() {
    const auth = useAuth()
    const [list, setList] = useState<IPost[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setList(json))
    }, [])

    return (
        <View style={styles.container}>
            <Text>Olá {auth.user.email}</Text>
            <Link href='/'>Voltar ao login</Link>
            <Divider />
            <Text>Lista de posts</Text>
            {list.map((item, index) => (
                <Text key={index}>{item.title}</Text>
            ))}
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})
*/
