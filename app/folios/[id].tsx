import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import CustomBadge from "@/components/CustomBadge";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import OptionsList from "@/components/OptionsList";
import { useFetchDetailFolio } from "@/hooks/useFetchDetailFolio";
import { useEffect } from "react";

export default function FolioDetailScreen() {
  const { id } = useLocalSearchParams();
  const { fetchDetailFolio, folio, loading, error } = useFetchDetailFolio();

  useEffect(() => {
    if (id) {
      fetchDetailFolio(id);
    }
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#5E0FDD" />
        <Text>Cargando folio...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>Error al cargar el folio: {error}</Text>
      </View>
    );
  }

  if (!folio) {
    return (
      <View style={styles.center}>
        <Text>No se encontraron datos para el folio.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <LinearGradient
        colors={["#5E0FDD", "#A036E4"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.mainContentContainer}>
          <View style={styles.badgeContainer}>
            <CustomBadge
              label={folio?.priority?.name ?? "N/A"}
              styleView={{ backgroundColor: "#FF4D4D" }}
            />
            <CustomBadge
              label={folio?.status?.description ?? "N/A"}
              styleView={{
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#4a01c4",
              }}
              styleText={{ color: "#4a01c4" }}
            />
          </View>
          <Text style={styles.title}>
            #{id} - {folio?.name ?? "N/A"}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomBadge
              label={folio?.type ?? "N/A"}
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

      <View style={{ backgroundColor: "#ec6666" }}>
        <Text style={styles.daysPassedText}>15 Días transcurridos</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={{ fontWeight: "bold", marginBottom: 8 }}>Descripción</Text>
        <Text>{folio?.description ?? "Sin descripción"}</Text>
      </View>

      <View style={styles.optionsListContainer}>
        <OptionsList />
      </View>

      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>Historial</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Pedir cotización</Text>
          <Text style={{ color: "#b7b7b7" }}>
            Proveedor:
            {folio?.department?.userManage?.firstName ?? "Desconocido"}
          </Text>

          <Pressable
            onPress={() => console.log("hola")}
            style={styles.buttonPrimary}
          >
            <Text style={styles.buttonTextPrimary}>Reasignar proveedor</Text>
          </Pressable>
          <Pressable
            onPress={() => console.log("hola")}
            style={styles.buttonSecondary}
          >
            <Text style={styles.buttonTextSecondary}>Pedir cotización</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContentContainer: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
    fontWeight: "bold",
    color: "white",
  },
  descriptionContainer: {
    marginHorizontal: 24,
    marginTop: 16,
  },
  optionsListContainer: {
    marginHorizontal: 24,
    marginTop: 16,
  },
  historyContainer: {
    marginHorizontal: 24,
    marginTop: 8,
  },
  badgeContainer: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 8,
    marginTop: 8,
  },
  showMoreContainer: {
    flexDirection: "row",
    gap: 8,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginTop: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardTitle: {
    color: "#3a87d9",
    fontSize: 20,
    fontWeight: "bold",
  },
  historyTitle: {
    fontWeight: "bold",
    marginBottom: 8,
    borderBottomColor: "#e4e4e4",
    borderBottomWidth: 1,
  },
  daysPassedText: {
    color: "white",
    fontSize: 20,
    paddingHorizontal: 24,
    paddingVertical: 8,
    fontWeight: "bold",
  },
  buttonPrimary: {
    marginTop: 8,
    alignItems: "center",
    borderColor: "#3a87d9",
    borderWidth: 1,
    padding: 16,
    borderRadius: 4,
  },
  buttonSecondary: {
    backgroundColor: "#3a87d9",
    marginTop: 8,
    alignItems: "center",
    padding: 16,
    borderRadius: 4,
  },
  buttonTextPrimary: {
    color: "#3a87d9",
    fontSize: 16,
  },
  buttonTextSecondary: {
    color: "#fff",
    fontSize: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
