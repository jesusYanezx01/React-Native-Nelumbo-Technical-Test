import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Text,
} from "react-native";
import { useRouter } from "expo-router";
import Header from "@/components/Header";
import IconText from "@/components/IconText";
import FloatingButton from "@/components/FloatingButton";
import FolioCard from "@/components/FolioCard";
import { useEffect } from "react";
import { useLogin } from "@/hooks/useLogin";
import { useFetchListFolios } from "@/hooks/useFetchListFolios";

export default function FoliosScreen() {
  const router = useRouter();
  const { login, logout, token, loading, error } = useLogin();
  const { fetchListFolios, folios } = useFetchListFolios();

  useEffect(() => {
    logout();
  }, []);

  useEffect(() => {
    if (!token) {
      login("y.cordoba+10@nelumbo.com.co", "Ana1234567");
    }
    fetchListFolios("6", "DESC");
  }, [token]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#5E0FDD" />
        <Text>Cargando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>Error al cargar el folio: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <IconText />
      <FloatingButton />

      {!loading && !error && token && (
        <FlatList
          data={folios}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FolioCard
              item={item}
              onPress={() => router.push(`/folios/${item.id}`)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
