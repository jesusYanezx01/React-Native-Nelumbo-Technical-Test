import { Tabs, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

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
    <Tabs initialRouteName="folio">
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
          title: "Folio",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="bug" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
