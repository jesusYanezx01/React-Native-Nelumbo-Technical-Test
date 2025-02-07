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
  const { login, token, loading, error } = useLogin();
  const { fetchListFolios, folios } = useFetchListFolios();

  useEffect(() => {
    if (!token) {
      login("y.cordoba@nelumbo.com.co", "Ana1234567");
    }
    fetchListFolios("6", "asc");
  }, [token]);

  return (
    <View style={styles.container}>
      <Header />
      <IconText />
      <FloatingButton />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && (
        <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
      )}

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
});
