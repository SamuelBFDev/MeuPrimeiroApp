import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import DisplayAnImage from "../components/StyledImage";
import StyledText from "../components/StyledText";

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
      <View style={styles.imageContainer}></View>
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
