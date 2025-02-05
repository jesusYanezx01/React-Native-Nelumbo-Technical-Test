import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function IconText() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>Filtrar por</Text>
        <FontAwesome5 name="filter" size={16} color="black" />
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Ordenar por</Text>
        <MaterialCommunityIcons name="sort-ascending" size={16} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#e4e4e4",
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginBottom: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
