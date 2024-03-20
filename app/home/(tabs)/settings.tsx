import { StatusBar } from "expo-status-bar"
import { View, Text, StyleSheet } from "react-native"
import { Gyroscope } from 'expo-sensors'
import { useState } from "react"

export default function Settings() {
    const [{ x, y, z }, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
      })

    Gyroscope.setUpdateInterval(1000)

    Gyroscope.addListener((gyroscopeData) => {
        setData(gyroscopeData)
    })
          
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
            <Text>x: {x}</Text>
            <Text>y: {y}</Text>
            <Text>z: {z}</Text>
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