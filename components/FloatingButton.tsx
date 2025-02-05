import { Pressable, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function FloatingButton() {
  return (
    <Pressable
      style={styles.button}
      onPress={() => console.log("Button Pressed")}
    >
      <AntDesign name="plus" size={28} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: "50%",
    left: "50%",
    top: "8%",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#4a01c4",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    transform: [{ translateX: -30 }],
  },
});
