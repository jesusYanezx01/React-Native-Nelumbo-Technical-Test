import { View, Text, FlatList, Pressable } from "react-native";
import { useRouter } from "expo-router";

const folios = [
  { id: "1", title: "Folio 1" },
  { id: "2", title: "Folio 2" },
  { id: "3", title: "Folio 3" },
];

export default function FoliosScreen() {
  const router = useRouter();

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Lista de Folios
      </Text>
      <FlatList
        data={folios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/folios/${item.id}`)}
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#ddd" : "transparent",
              padding: 10,
            })}
          >
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
