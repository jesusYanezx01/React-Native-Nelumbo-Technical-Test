import { Tabs, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isReady) {
      router.replace("/folio");
    } else {
      setIsReady(true);
    }
  }, [isReady, router]);

  return (
    <Tabs
      initialRouteName="folio"
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerRight: () => (
          <View style={{ flexDirection: "row", marginRight: 10 }}>
            <TouchableOpacity onPress={() => alert("Icon 1 pressed")}>
              <FontAwesome
                name="user-circle-o"
                size={24}
                color="white"
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Icon 2 pressed")}>
              <Ionicons name="notifications" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ),
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Principal",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name={focused ? "checkcircle" : "checkcircleo"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="agenda"
        options={{
          title: "Agenda",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="calendar-alt" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          title: "Tienda",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="store" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="folio"
        options={{
          title: "Check+",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="bug" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
