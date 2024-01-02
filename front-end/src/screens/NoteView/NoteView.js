import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const NoteView = ({ route, navigation }) => {
  const { note } = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.backButton}
            source={{
              uri: "https://cdn4.iconfinder.com/data/icons/remixicon-system/24/arrow-go-back-fill-64.png",
            }}
          />
        </TouchableOpacity>
        <Text style={styles.textHeader}>By</Text>
      </View>

      {/* Note Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.noteContent}>{note.content}</Text>
        <Text style={styles.date}>{note.noteDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
  },
  backButton: {
    width: 24,
    height: 24,
  },
  textHeader: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  noteContent: {
    fontSize: 16,
    marginBottom: 12,
  },
  date: {
    fontSize: 12,
    color: "#D3D3D3",
  },
});

export default NoteView;
