import { Tabs } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <GluestackUIProvider config={config}>
      <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Configurações",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="cog" size={28} color={color} />
            ),
          }}
        />
      </Tabs>
    </GluestackUIProvider>
  );
}
