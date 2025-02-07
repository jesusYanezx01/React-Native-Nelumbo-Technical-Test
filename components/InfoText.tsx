import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

type Props = {
  label: string;
  value: string | null | undefined;
  style?: TextStyle;
};

export default function InfoText({ label, value, style }: Props) {
  return (
    <Text style={[styles.infoText, style]}>
      <Text style={styles.bold}>{label}:</Text> {value}
    </Text>
  );
}

const styles = StyleSheet.create({
  infoText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 3,
  },
  bold: {
    fontWeight: "bold",
  },
});
