import { StatusBar } from "expo-status-bar"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { CameraView, useCameraPermissions } from 'expo-camera/next'

export default function Camera() {

  let camera: CameraView | null = null

  const [permission, requestPermission] = useCameraPermissions()

  const takePicture = async () => {
    if (permission) {
      const photo = await camera?.takePictureAsync()
      console.log(photo)
    }
  }

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text>Sem permissão</Text>
        <StatusBar style="auto" />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <CameraView style={{
          width: 300,
          height: 300
        }} facing="back"
        ref={(ref) => {camera = ref}}
        />
        <Pressable onPress={takePicture}>
          <Text>Tirar foto</Text>
        </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})