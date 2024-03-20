import { Slot } from "expo-router"
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { AuthProvider } from "../hooks/auth"

export default function Layout() {
    return (
        <GluestackUIProvider config={config}>
            <AuthProvider>
                <Slot />
            </AuthProvider>
        </GluestackUIProvider>
    )
}