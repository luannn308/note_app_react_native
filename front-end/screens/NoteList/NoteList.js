import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

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
      <TouchableOpacity style={styles.addButton} underlayColor="#fff">
        <Text style={styles.textButton}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoteList;

const styles = StyleSheet.create({
  textHeader: {
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
    borderRadius: 24,
    display: "flex",
    justifyContent: "center",
  },
  textButton: {
    textAlign: "center",
  },
});
