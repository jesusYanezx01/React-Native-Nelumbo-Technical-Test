import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import InfoText from "./InfoText";
import CustomBadge from "./CustomBadge";
import { formatDate } from "@/utils/formatDate";
import { FolioResponse } from "@/data/data/response/FolioResponse";

type Props = Readonly<{
  item: FolioResponse;
  onPress: () => void;
}>;

export default function FolioCard({ item, onPress }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.folioId}># {item.id}</Text>
        <CustomBadge
          label={item.type}
          styleView={{ backgroundColor: "#4a01c4" }}
        />
      </View>

      <Text style={styles.title}>{item?.name ?? "N/A"}</Text>

      <View style={styles.badgeContainer}>
        <CustomBadge
          label={item?.priority?.name ?? "N/A"}
          styleView={{ backgroundColor: "#FF4D4D" }}
        />
        <CustomBadge
          label={item.status.description}
          styleView={{
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#4a01c4",
          }}
          styleText={{ color: "#4a01c4" }}
        />
      </View>

      <InfoText label="Solicitada el" value={formatDate(item.createTime)} />
      <InfoText label="Área" value={item.area?.name ?? "N/A"} style={{ marginTop: 16 }} />
      <InfoText label="Departamento" value={item.department?.name ?? "N/A"} />
      <InfoText label="Unidad" value="Sample 123" />
      <InfoText
        label="Creador"
        value={item.createdByUser?.firstName ?? "N/A"}
        style={{ marginTop: 16 }}
      />
      <InfoText
        label="Proveedor"
        value={item.department.userManage?.firstName ?? "N/A"}
      />
      <InfoText label="Solucionador" value={item.userAttendingId?.toString() ?? "N/A"} />

      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Ver detalle</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: "12%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 15,
    marginBottom: 16,
    elevation: 6,
    shadowColor: "#000",
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
