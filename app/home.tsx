import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import StyledImage from "../components/StyledImage";
import StyledText from "../components/StyledText";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text> Login successful! </Text>
        <StyledText text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, debitis voluptatibus similique obcaecati voluptatem dolorum delectus ea unde ex rerum? Sed neque illum cum voluptatum vitae! Iste asperiores sapiente distinctio?" />
        <Link href="/">Go back to index</Link>
      </View>
      <View style={styles.imageContainer}>
        <StyledImage
          src="https://img.icons8.com/ios/50/workstation.png"
          alt="Logo"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  imageContainer: {
    flex: 1,
    marginLeft: 10,
  },
});
