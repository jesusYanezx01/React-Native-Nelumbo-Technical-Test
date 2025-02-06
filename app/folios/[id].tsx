import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import CustomBadge from "@/components/CustomBadge";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

export default function FolioDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView>
      <LinearGradient
        colors={["#5E0FDD", "#A036E4"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.mainContentContainer}>
          <View style={styles.badgeContainer}>
            <CustomBadge
              label="baja"
              styleView={{ backgroundColor: "#FF4D4D" }}
            />
            <CustomBadge
              label="En espera de solucion"
              styleView={{
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#4a01c4",
              }}
              styleText={{ color: "#4a01c4" }}
            />
          </View>
          <Text
            style={{
              fontSize: 24,
              marginBottom: 8,
              marginStart: 16,
              fontWeight: "bold",
              color: "white",
            }}
          >
            #{id} - Nombre del folio
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomBadge
              label="correctiva"
              styleView={{ backgroundColor: "#4a01c4", marginStart: 16 }}
            />
            <View style={styles.showMoreContainer}>
              <Text style={{ color: "white" }}>Ver más</Text>
              <MaterialIcons
                name="keyboard-double-arrow-right"
                size={24}
                color="white"
              />{" "}
            </View>
          </View>
        </View>
      </LinearGradient>

      <Text>15 Dias transcurridos</Text>

      <View>
        <Text>Descripcion</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, itaque
          ullam dolorum corporis at ab harum explicabo corrupti cumque quas esse
          quis facilis culpa velit tempora earum soluta. Cupiditate, odio.
        </Text>
      </View>

      <View>
        <Text>Evidencias</Text>
        <Text>Opciones avanzadas</Text>
        <Text>Informe de folio</Text>
        <Text>Comentarios</Text>
      </View>

      <View>
        <Text>Historial</Text>
        <Text>Pedir cotizacion</Text>
        <Text>Proveedor:</Text>

        <Text>Reasignar proveedor</Text>
        <Text>Pedir cotizacion</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContentContainer: {
    margin: 16,
  },
  badgeContainer: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 8,
    marginTop: 8,
    marginStart: 16,
  },
  showMoreContainer: {
    flexDirection: "row",
  },
});
