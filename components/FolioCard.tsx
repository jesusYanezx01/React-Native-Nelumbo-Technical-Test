import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import InfoText from "./InfoText";

type Props = {
  item: {
    id: string;
    name: string;
    type: string;
    area: { name: string };
    createTime: string;
    priority: { name: string };
    status: { description: string };
    department: { name: string; userManage: { firstName: string } };
    createdByUser: { firstName: string };
    userAttendingId: number;
  };
  onPress: () => void;
};

export default function FolioCard({ item, onPress }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.folioId}># {item.id}</Text>
        <View style={[styles.badge, { backgroundColor: "#4a01c4" }]}>
          <Text style={styles.badgeText}>{item.type}</Text>
        </View>
      </View>

      <Text style={styles.title}>{item.name}</Text>

      <View style={styles.badgeContainer}>
        <View style={[styles.badge, { backgroundColor: "#FF4D4D" }]}>
          <Text style={styles.badgeText}> {item.priority.name} </Text>
        </View>
        <View
          style={[
            styles.badge,
            { backgroundColor: "#fff", borderWidth: 1, borderColor: "#4a01c4" },
          ]}
        >
          <Text style={[styles.badgeText, { color: "#4a01c4" }]}>
            {" "}
            {item.status.description}{" "}
          </Text>
        </View>
      </View>

      <InfoText label="Solicitada el" value={item.createTime} />
      <InfoText label="Área" value={item.area.name} style={{ marginTop: 16 }} />
      <InfoText label="Departamento" value={item.department.name} />
      <InfoText label="Unidad" value="Sample 123" />
      <InfoText
        label="Creador"
        value={item.createdByUser.firstName}
        style={{ marginTop: 16 }}
      />
      <InfoText
        label="Proveedor"
        value={item.department.userManage.firstName}
      />
      <InfoText label="Solucionador" value={item.userAttendingId.toString()} />

      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Ver detalle</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 16,
    marginHorizontal: "16%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  folioId: {
    fontSize: 14,
    color: "#6D6D6D",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  badgeContainer: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 8,
  },
  badge: {
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#4a01c4",
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
