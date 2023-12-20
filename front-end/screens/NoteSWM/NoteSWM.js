import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Header, Button, ListItem, Icon } from "react-native-elements";

const NoteSWM = () => {
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
      <View style={styles.headerContainer}>
        <Image
          style={styles.iconHeader}
          source={{
            uri: "https://cdn1.iconfinder.com/data/icons/bootstrap-vol-4/16/three-dots-256.png",
          }}
        />
      </View>
      <View style={styles.titleSWM}>
        <Text style={styles.titleSWM}> Đã chia sẻ với tôi</Text>
      </View>
      {shares.map((share, index) => (
        <View style={styles.contentShares} key={index}>
          <Text style={styles.monthYear}>{share.monthYear}</Text>
          <View style={styles.line} />
          <View style={styles.listItemContainer}>
            <Image
              style={styles.iconFile}
              source={{
                uri: "https://cdn4.iconfinder.com/data/icons/48-bubbles/48/12.File-256.png",
              }}
            />
            <Text style={styles.noteTitle}>{share.title}</Text>
            <TouchableOpacity
              onPress={() => console.log("Button pressed")}
              style={styles.addButton}
            >
              <Text style={styles.textButton}>Thêm</Text>
            </TouchableOpacity>
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
        </View>
      ))}
      <View style={styles.tabBarContainer}>
        <TouchableOpacity onPress={() => console.log("Button pressed")}>
          <Image
            style={styles.iconTabBar}
            source={{
              uri: "https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-256.png",
            }}
          />
        </TouchableOpacity>
        <View style={styles.tabNewContainer}>
          <TouchableOpacity
            style={styles.tabNew}
            onPress={() => console.log("Button pressed")}
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
        <TouchableOpacity onPress={() => console.log("Button pressed")}>
          <Image
            style={styles.iconTabBar}
            source={{
              uri: "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Magnifier-Search-Zoom--256.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  headerContainer: {
    flexDirection: "row-reverse",
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
  },
  iconHeader: {
    height: 24,
    width: 24,
    marginRight: 12,
    marginVertical: 4,
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
    paddingTop: 8,
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
  addButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#20B2AA",
    borderRadius: 24,
    paddingHorizontal: 10,
    marginTop: 8,
    marginRight: 24,
  },
  textButton: {
    color: "#20B2AA",
    width: "auto",
    height: "auto",
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
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    paddingVertical: 12,
  },
  tabNewContainer: {
    position: "absolute",
    top: "-100%",
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
  iconTabBar: {
    width: 20,
    height: 20,
    marginHorizontal: 16,
  },
  titleNew: {
    fontSize: 10,
    fontWeight: "bold",
    paddingLeft: 8,
    color: "white",
  },
});

export default NoteSWM;
