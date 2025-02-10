import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import CustomBadge from "./CustomBadge";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = Readonly<{
  id: string | string[];
  priority: string | null;
  status: string | null;
  name: string | null;
  type: string;
}>;

export default function HeaderMainInformation({
  id,
  priority,
  status,
  name,
  type,
}: Props) {
  return (
    <LinearGradient
      colors={["#5E0FDD", "#A036E4"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.mainContentContainer}>
        <View style={styles.badgeContainer}>
          <CustomBadge
            label={priority ?? "N/A"}
            styleView={{ backgroundColor: "#FF4D4D" }}
          />
          <CustomBadge
            label={status ?? "N/A"}
            styleView={{
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "#4a01c4",
            }}
            styleText={{ color: "#4a01c4" }}
          />
        </View>
        <Text style={styles.title}>
          #{id} - {name ?? "N/A"}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <CustomBadge
            label={type ?? "N/A"}
            styleView={{ backgroundColor: "#4a01c4" }}
          />
          <View style={styles.showMoreContainer}>
            <Text style={{ color: "white" }}>Ver más</Text>
            <MaterialIcons
              name="keyboard-double-arrow-right"
              size={24}
              color="white"
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContentContainer: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  badgeContainer: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 8,
    marginTop: 8,
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
    fontWeight: "bold",
    color: "white",
  },
  showMoreContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
