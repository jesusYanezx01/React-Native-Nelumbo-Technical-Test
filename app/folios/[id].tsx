import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function FolioDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        Detalle del Folio {id}
      </Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>
        Aquí van los detalles del folio {id}.
      </Text>
    </View>
  );
}
