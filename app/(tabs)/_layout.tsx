import { Tabs, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

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
      <Tabs.Screen name="index" options={{ title: 'Principal' }} />
      <Tabs.Screen name="agenda" options={{ title: 'Agenda' }} />
      <Tabs.Screen name="store" options={{ title: 'Tienda' }} />
      <Tabs.Screen name="folio" options={{ title: 'Folio' }} />
    </Tabs>
  );
}
