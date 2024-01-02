import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const NoteSWM = ({ navigation }) => {
  const shares = [
    {
      monthYear: "Tháng 12 2023",
      title: "Hôm nay phải code xong màn hình danh sách",
      sharer: "Phan Mạnh Duy",
      date: "đã chia sẻ 12/20/2023",
    },
    {
      monthYear: "Tháng 12 2023",
      title: "Hôm nay phải code",
      sharer: "Nguyễn Ngọc Luân",
      date: "đã chia sẻ 12/20/2023",
    },
    {
      monthYear: "Tháng 9 2022",
      title: "Năm nay thật tuyệt",
      sharer: "Phan Mạnh Duy",
      date: "đã chia sẻ 09/15/2022",
    },
    // Thêm các danh mục chia sẻ khác tại đây
  ];

  return (
    <View style={styles.container}>
      {shares.map((share, index) => (
        <View style={styles.contentShares} key={index}>
          <Text style={styles.monthYear}>{share.monthYear}</Text>
          <View style={styles.line} />
          <TouchableOpacity
            onPress={() => navigation.navigate("NoteDetail", { note: item })}
          >
            <View style={styles.listItemContainer}>
              <Image
                style={styles.iconFile}
                source={{
                  uri: "https://cdn4.iconfinder.com/data/icons/48-bubbles/48/12.File-256.png",
                }}
              />
              <Text style={styles.noteTitle}>{share.title}</Text>
            </View>
            <View style={styles.sharer}>
              <Image
                style={styles.iconUsers}
                source={{
                  uri: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-256.png",
                }}
              />
              <Text>{share.sharer}</Text>
              <Text>{share.date}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: 16,
  },

  titleSWM: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 2,
  },
  contentShares: {
    paddingBottom: 32,
    paddingLeft: 12,
  },
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
  },
  monthYear: {
    fontWeight: "bold",
  },
  line: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    width: "95%",
    paddingTop: 10,
  },
  noteTitle: {
    flex: 1,
    fontWeight: "bold",
    marginLeft: 10,
  },
  sharer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 10,
  },
  iconFile: {
    height: 24,
    width: 24,
    marginLeft: 10,
  },
  iconUsers: {
    height: 24,
    width: 24,
  },
});

export default NoteSWM;
