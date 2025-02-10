import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = Readonly<{
  user: string;
  comment: string;
  date: string;
}>;

export default function CommentCard({ user, comment, date }: Props) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.textUser}>{user}</Text>
      </View>
      <View style={styles.containerComment}>
        <Text>{comment}</Text>
      </View>
      <View style={styles.containerDate}>
        <Text style={styles.textDate}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: "8%",
    backgroundColor: "#FFF",
    padding: 8,
    borderRadius: 8,
    marginVertical: 8,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  containerDate: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 4,
  },
  containerComment: {
    marginTop: 4,
  },
  textDate: {
    color: "#5396de",
  },
  textUser: {
    color: "#9E9E9E",
  },
});
