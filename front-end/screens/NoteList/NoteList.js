import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const NoteList = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.textHeader}>GHI CHÚ</Text>
      </View>
      <View style={styles.noteContainer}>
        <Text style={styles.noteTitle}>Tên ghi chú</Text>
        <Text style={styles.noteContent}>Nội dung ghi chú</Text>
        <Text style={styles.noteDate}>Ngày tháng ghi chú</Text>
        <View style={styles.line}></View>
      </View>
      <Button style={styles.addButton} title="+ Mới" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontFamily: "Roboto condensed",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  noteContainer: {
    marginTop: 10,
    marginLeft: 10,
    paddingHorizontal: 20,
  },
  noteTitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "bold",
  },
  noteContent: {
    fontSize: 12,
    marginBottom: 30,
  },
  noteDate: {
    fontSize: 12,
    color: "#D3D3D3",
  },
  line: {
    width: "90%",
    height: 1,
    backgroundColor: "#D3D3D3",
    marginTop: 10,
    marginBottom: 30,
  },
  addButton: {
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1E90FF",
  },
});

export default NoteList;
