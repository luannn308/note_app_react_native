import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const UserProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-256.png",
          }}
        />
        <View style={styles.info}>
          <Text style={styles.userName}>Mạnh Duy</Text>
          <Text style={styles.usageInfo}>Đã dùng 500MB trong số 1GB</Text>
        </View>
      </View>

      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => console.log("Thiết bị pressed")}
        >
          <Image
            style={styles.iconAction}
            source={{
              uri: "https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/phone-256.png",
            }}
          />
          <Text>Thiết bị</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.iconAction}
            source={{
              uri: "https://cdn4.iconfinder.com/data/icons/hodgepodge-free/32/logout_account_exit_door-256.png",
            }}
            tintColor={"red"}
          />
          <Text style={styles.buttonLogout}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.accountSwitchContainer}>
        <Text style={styles.currentAccount}>CHUYỂN ĐỔI TÀI KHOẢN</Text>
        <TouchableOpacity
          style={styles.addAccountButton}
          onPress={() => console.log("Thêm tài khoản pressed")}
        >
          <Image
            style={styles.addAccountIcon}
            source={{
              uri: "https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-64.png",
            }}
          />
          <Text style={styles.addAccount}>Thêm tài khoản</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 16,
    marginBottom: 20,
    marginTop: 20,
    gap: 20,
  },
  info: {
    flexDirection: "column",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  usageInfo: {
    color: "#888",
  },
  actionButtonsContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    gap: 16,
  },
  iconAction: {
    height: 20,
    width: 20,
  },
  accountSwitchContainer: {
    alignItems: "right",
    paddingStart: 20,
  },
  currentAccount: {
    fontSize: 16,
    color: "#999999",
    fontWeight: "bold",
    marginBottom: 16,
  },
  addAccountButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonLogout: {
    fontWeight: "bold",
    color: "red",
  },
  addAccount: {
    fontWeight: "bold",
  },
  addAccountIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
});

export default UserProfile;
