import { View, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Header from "@/components/Header";
import IconText from "@/components/IconText";
import FloatingButton from "@/components/FloatingButton";
import FolioCard from "@/components/FolioCard";

const folios = [
  {
    id: "1",
    name: "Folio 1",
    description: "esto es una descripcion",
    type: "correctivo",
    area: { name: "despacho" },
    createTime: "05/02/2025",
    department: {
      name: "N. Santander",
      userManage: {
        id: 123,
        firstName: "Jesus",
        lastName: "Yañez",
      },
    },
    priority: { name: "importante" },
    store: { name: "nelumbo" },
    status: { description: "esto es una descripcion" },
    createdByUser: {
      id: 123,
      firstName: "Jesus",
      lastName: "Yañez",
    },
    reportFolioUserAssign: [
      {
        id: 123,
        firstName: "Jesus",
        lastName: "Yañez",
      },
    ],
    userAttendingId: 12345678,
  },
  {
    id: "2",
    name: "Folio 2",
    description: "esto es otra descripcion",
    type: "preventivo",
    area: { name: "almacén" },
    createTime: "06/02/2025",
    department: {
      name: "Cundinamarca",
      userManage: {
        id: 124,
        firstName: "Carlos",
        lastName: "Pérez",
      },
    },
    priority: { name: "baja" },
    store: { name: "tecnología" },
    status: { description: "pendiente" },
    createdByUser: {
      id: 124,
      firstName: "Carlos",
      lastName: "Pérez",
    },
    reportFolioUserAssign: [
      {
        id: 124,
        firstName: "Carlos",
        lastName: "Pérez",
      },
    ],
    userAttendingId: 87654321,
  },
  {
    id: "3",
    name: "Folio 3",
    description: "mantenimiento de equipo",
    type: "correctivo",
    area: { name: "soporte" },
    createTime: "07/02/2025",
    department: {
      name: "Atlántico",
      userManage: {
        id: 125,
        firstName: "Ana",
        lastName: "Gómez",
      },
    },
    priority: { name: "media" },
    store: { name: "servicios" },
    status: { description: "en progreso" },
    createdByUser: {
      id: 125,
      firstName: "Ana",
      lastName: "Gómez",
    },
    reportFolioUserAssign: [
      {
        id: 125,
        firstName: "Ana",
        lastName: "Gómez",
      },
    ],
    userAttendingId: 23456789,
  },
  {
    id: "4",
    name: "Folio 4",
    description: "reemplazo de piezas",
    type: "preventivo",
    area: { name: "mantenimiento" },
    createTime: "08/02/2025",
    department: {
      name: "Valle del Cauca",
      userManage: {
        id: 126,
        firstName: "Luis",
        lastName: "Martínez",
      },
    },
    priority: { name: "alta" },
    store: { name: "automotriz" },
    status: { description: "finalizado" },
    createdByUser: {
      id: 126,
      firstName: "Luis",
      lastName: "Martínez",
    },
    reportFolioUserAssign: [
      {
        id: 126,
        firstName: "Luis",
        lastName: "Martínez",
      },
    ],
    userAttendingId: 34567890,
  },
  {
    id: "5",
    name: "Folio 5",
    description: "inspección de seguridad",
    type: "correctivo",
    area: { name: "seguridad" },
    createTime: "09/02/2025",
    department: {
      name: "Bogotá",
      userManage: {
        id: 127,
        firstName: "Patricia",
        lastName: "López",
      },
    },
    priority: { name: "importante" },
    store: { name: "oficinas" },
    status: { description: "pendiente" },
    createdByUser: {
      id: 127,
      firstName: "Patricia",
      lastName: "López",
    },
    reportFolioUserAssign: [
      {
        id: 127,
        firstName: "Patricia",
        lastName: "López",
      },
    ],
    userAttendingId: 45678901,
  },
  {
    id: "6",
    name: "Folio 6",
    description: "actualización de software",
    type: "preventivo",
    area: { name: "tecnología" },
    createTime: "10/02/2025",
    department: {
      name: "Antioquia",
      userManage: {
        id: 128,
        firstName: "Eduardo",
        lastName: "Ramírez",
      },
    },
    priority: { name: "baja" },
    store: { name: "informática" },
    status: { description: "en progreso" },
    createdByUser: {
      id: 128,
      firstName: "Eduardo",
      lastName: "Ramírez",
    },
    reportFolioUserAssign: [
      {
        id: 128,
        firstName: "Eduardo",
        lastName: "Ramírez",
      },
    ],
    userAttendingId: 56789012,
  },
];

export default function FoliosScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header />
      <IconText />
      <FlatList
        data={folios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FolioCard
            item={item}
            onPress={() => router.push(`/folios/${item.id}`)}
          />
        )}
      />
      <FloatingButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
