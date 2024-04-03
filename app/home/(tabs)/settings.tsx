import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { Gyroscope } from "expo-sensors";
import { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite/next";
import { Text, Button } from "@gluestack-ui/themed";

export default function Settings() {
  const [database, setDatabase] = useState<SQLite.SQLiteDatabase | null>(null);

  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  Gyroscope.setUpdateInterval(1000);

  Gyroscope.addListener((gyroscopeData) => {
    setData(gyroscopeData);
  });

  useEffect(() => {
    const db = SQLite.openDatabaseSync("database");
    setDatabase(db);
    db.execSync(
      "create table if not exists positions (id integer primary key not null, x int, y int, z int);"
    );
  }, []);

  const addPosition = () => {
    database?.execSync(
      `insert into positions (x, y, z) values (${x},${y},${z});`
    );
  };

  const fetchPositions = () => {
    const positions = database?.getAllSync("select * from positions;");
    console.log(positions);
  };

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Text>x: {x}</Text>
      <Text>y: {y}</Text>
      <Text>z: {z}</Text>
      <Button mt={5} onPress={addPosition}>
        <Text color="white">Adicionar posição no banco</Text>
      </Button>
      <Button mt={5} onPress={fetchPositions}>
        <Text color="white">Buscar posições no banco</Text>
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

/*
<View flex={1} justifyContent='center' alignItems='center'>

*/
