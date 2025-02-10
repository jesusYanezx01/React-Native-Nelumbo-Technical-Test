import CommentCard from "@/components/CommentCard";
import HeaderMainInformation from "@/components/HeaderMainInformation";
import { useFetchDetailFolio } from "@/hooks/useFetchDetailFolio";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const comments = [
  {
    id: "1",
    user: "Juan Perez",
    comment: "Comentario 1",
    date: "2021-10-01",
  },
  {
    id: "2",
    user: "Maria Gonzalez",
    comment: "Comentario 2",
    date: "2021-10-02",
  },
  {
    id: "3",
    user: "Carlos Lopez",
    comment: "Comentario 3",
    date: "2021-10-03",
  },
  {
    id: "4",
    user: "Ana Martinez",
    comment: "Comentario 4",
    date: "2021-10-04",
  },
  {
    id: "5",
    user: "Luis Fernandez",
    comment: "Comentario 5",
    date: "2021-10-05",
  },
  {
    id: "6",
    user: "Sofia Ramirez",
    comment: "Comentario 6",
    date: "2021-10-06",
  },
];

export default function comment() {
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
        <Text>Cargando comentarios...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>Error al cargar: {error}</Text>
      </View>
    );
  }

  if (!folio) {
    return (
      <View style={styles.center}>
        <Text>No se encontraron datos.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeaderMainInformation
        id={id}
        priority={folio?.priority?.name}
        status={folio?.status?.description}
        name={folio?.name}
        type={folio?.type}
      />

      <View style={styles.containerCommentCard}>
        {!loading && !error && (
          <FlatList
            data={comments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CommentCard
                user={item.user}
                comment={item.comment}
                date={item.date}
              />
            )}
            automaticallyAdjustKeyboardInsets={true}
          />
        )}
      </View>
      <KeyboardAvoidingView
        style={styles.containerSendComment}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.TextInputSendComment}
          placeholder="Comentario..."
        />
        <Pressable
          style={styles.buttonSendComment}
          onPress={() => alert("Icon 1 pressed")}
        >
          <Ionicons name="send" size={20} color="white" />
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerCommentCard: {
    flex: 1,
  },
  containerSendComment: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "8%",
    marginBottom: 16, 
  },
  buttonSendComment: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3a87d9",
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  TextInputSendComment: {
    flex: 1,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#9E9E9E",
    backgroundColor: "#FFF",
    padding: 10,
  },
});
