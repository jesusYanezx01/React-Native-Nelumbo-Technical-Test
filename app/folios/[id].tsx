import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useFetchDetailFolio } from "@/hooks/useFetchDetailFolio";
import { useEffect } from "react";
import HeaderMainInformation from "@/components/HeaderMainInformation";
import OptionItem from "@/components/OptionsList";

export default function FolioDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
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
      <HeaderMainInformation
        id={id}
        priority={folio?.priority?.name}
        status={folio?.status?.description}
        name={folio?.name}
        type={folio?.type}
      />

      <View style={{ backgroundColor: "#ec6666" }}>
        <Text style={styles.daysPassedText}>15 Días transcurridos</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={{ fontWeight: "bold", marginBottom: 8 }}>Descripción</Text>
        <Text>{folio?.description ?? "Sin descripción"}</Text>
      </View>

      <View style={styles.optionsListContainer}>
        <View>
          <OptionItem
            title="Evidencias"
            iconName="attach"
            colorIcon="#5511c8"
          />
          <OptionItem
            title="Opciones avanzadas"
            iconName="arrow-forward"
            colorIcon="black"
          />
          <OptionItem
            title="Informe de folio"
            iconName="eye-outline"
            colorIcon="black"
          />
          <OptionItem
            title="Comentarios"
            iconName="arrow-forward"
            showBadge
            colorIcon="black"
            onPress={() => router.push(`/folios/${id}/comment`)}
          />
        </View>
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
