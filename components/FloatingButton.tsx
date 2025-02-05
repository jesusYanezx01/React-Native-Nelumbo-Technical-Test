import { TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function FloatingButton() {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => console.log("Button Pressed")}
    >
      <AntDesign name="plus" size={24} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 74,
    height: 74,
    borderRadius: 40,
    backgroundColor: "#4a01c4",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    top: 24,
    transform: [{ translateX: -30 }],
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
