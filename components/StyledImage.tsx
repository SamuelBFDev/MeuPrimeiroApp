import React from "react";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => {
  return (
    <>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "MeuPrimeiroApp/assets/icons8-react-200.png",
        }}
      />
      <Image
        style={styles.logo}
        source={require("../assets/icons8-react-200.png")}
      />
    </>
  );
};

export default DisplayAnImage;
