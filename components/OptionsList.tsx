import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = Readonly<{
  title: string;
  iconName: keyof typeof Ionicons.glyphMap;
  colorIcon: string;
  showBadge?: boolean;
  onPress?: () => void;
}>;

export default function OptionItem({
  title,
  iconName,
  colorIcon,
  showBadge,
  onPress,
}: Props) {
  return (
    <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <Text style={styles.optionText}>{title}</Text>
        {showBadge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        )}
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={24} color={colorIcon} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    marginRight: 5,
  },
  badgeText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});
