import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const NoteList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.noteContainer}
        onPress={() => navigation.navigate("EditNote")}
      >
        <Text style={styles.noteTitle}>
          Hôm nay phải code xong màn hình danh sách
        </Text>
        <Text style={styles.noteContent}>Nội dung ghi chú</Text>
        <Text style={styles.noteDate}>15/12/2023</Text>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.noteContainer}
        onPress={() => navigation.navigate("EditNote")}
      >
        <Text style={styles.noteTitle}>Ngày 3 Tháng 1 Báo Cáo Di Động</Text>
        <Text style={styles.noteContent}>Nội dung ghi chú</Text>
        <Text style={styles.noteDate}>25/12/2023</Text>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <View style={styles.tabBarContainer}>
        <View style={styles.tabNewContainer}>
          <TouchableOpacity
            style={styles.tabNew}
            onPress={() => navigation.navigate("AddNote")}
          >
            <Image
              style={styles.iconTabNew}
              source={{
                uri: "https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-256.png",
              }}
              tintColor="rgba(255, 255, 255, 1.0)"
            />
            <Text style={styles.titleNew}>MỚI</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NoteList;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  lineHeader: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    width: "100%",
  },
  noteContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 30,
  },
  noteContent: {
    fontSize: 12,
    paddingTop: 30,
    paddingBottom: 30,
  },
  noteDate: {
    fontSize: 12,
    color: "#D3D3D3",
  },
  line: {
    width: "99%",
    height: 1,
    backgroundColor: "#D3D3D3",
    marginTop: 10,
  },
  tabBarContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 40,
    paddingVertical: 12,
  },
  tabNewContainer: {
    position: "absolute",
    top: "-120%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tabNew: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E90FF",
    width: 100,
    padding: 10,
    borderRadius: 24,
  },
  iconTabNew: {
    width: 12,
    height: 12,
  },
  titleNew: {
    fontSize: 10,
    fontWeight: "bold",
    paddingLeft: 8,
    color: "white",
  },
});
