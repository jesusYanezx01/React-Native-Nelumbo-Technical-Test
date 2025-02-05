import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Header from "@/components/Header";
import IconText from "@/components/IconText";

const folios = [
  { id: "1", title: "Folio 1" },
  { id: "2", title: "Folio 2" },
  { id: "3", title: "Folio 3" },
  { id: "4", title: "Folio 1" },
  { id: "5", title: "Folio 2" },
  { id: "6", title: "Folio 3" },
  { id: "7", title: "Folio 1" },
  { id: "8", title: "Folio 2" },
  { id: "9", title: "Folio 3" },
  { id: "10", title: "Folio 1" },
  { id: "11", title: "Folio 2" },
  { id: "12", title: "Folio 3" },
];

export default function FoliosScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header />
      <IconText />
      <View style={styles.listContainer}>
        <FlatList
          data={folios}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => router.push(`/folios/${item.id}`)}
              style={({ pressed }) => ({
                backgroundColor: pressed ? "#ddd" : "transparent",
                padding: 20,
              })}
            >
              <Text style={{ fontSize: 20 }}>{item.title}</Text>
            </Pressable>
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
});
