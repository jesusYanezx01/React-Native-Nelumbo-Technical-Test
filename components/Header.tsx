import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="store" color="white" size={24} />
      <Text style={styles.text}>Todas las tiendas</Text>
      <AntDesign name="right" size={24} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#4a01c4",
    paddingVertical: 10,
  },
  text: {
    color: "#ffffff",
    flex: 1,
    marginLeft: 16,
  },
});
