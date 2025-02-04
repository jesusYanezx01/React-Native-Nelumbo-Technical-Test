import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="folios/[id]" options={{ title: "Detalle Folio" }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
