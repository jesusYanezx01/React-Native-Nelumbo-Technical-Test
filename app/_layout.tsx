import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack } from "expo-router";
import { Pressable, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerRight: () => (
          <View style={{ flexDirection: "row", marginRight: 10 }}>
            <Pressable onPress={() => console.log("Icon 1 pressed")}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="white"
                style={{ marginRight: 15 }}
              />
            </Pressable>
          </View>
        ),
        headerShadowVisible: false,
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="folios/[id]" options={{ title: "" }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
