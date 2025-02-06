import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

type Props = {
  label: string;
  styleView?: ViewStyle;
  styleText?: TextStyle;
};

export default function CustomBadge ({ label, styleView, styleText }: Props) {
  return (
    <View style={[styles.badge, styleView]}>
      <Text style={[styles.badgeText, styleText]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { borderRadius: 15, paddingVertical: 4, paddingHorizontal: 8 },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
