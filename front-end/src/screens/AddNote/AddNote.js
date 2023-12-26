import React from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const AddNote = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerSection}>
          <TouchableOpacity
            onPress={() => navigation.navigate({ name: "Home" })}
          >
            <Image
              style={styles.iconHeader}
              source={{
                uri: "https://cdn1.iconfinder.com/data/icons/essentials-pack/96/left_arrow_back_previous_navigation-256.png",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headerSection}>
          <TouchableOpacity onPress={() => console.log("Button pressed")}>
            <Image
              style={styles.iconHeader}
              source={{
                uri: "https://cdn0.iconfinder.com/data/icons/typicons-2/24/user-add-256.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Button pressed")}>
            <Image
              style={styles.iconHeader}
              source={{
                uri: "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_note_add_48px-256.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Button pressed")}>
            <Image
              style={styles.iconHeader}
              source={{
                uri: "https://cdn1.iconfinder.com/data/icons/bootstrap-vol-4/16/three-dots-256.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          style={[styles.titleNote, styles.input]}
          placeholder="Tiêu đề"
          placeholderTextColor="#D3D3D3"
        />
        <TextInput
          style={[styles.content, styles.input]}
          placeholder="Nhập nội dung"
          placeholderTextColor="#D3D3D3"
          multiline
        />
      </View>
      <View style={styles.tabBarContainer}>
        <View style={styles.tabEditContainer}>
          <TouchableOpacity
            style={styles.tabEdit}
            onPress={() => console.log("Button pressed")}
          >
            <Image
              style={styles.iconTabEdit}
              source={{
                uri: "https://cdn0.iconfinder.com/data/icons/system-ui/154/compose-draw-edit-cursor-pencil-scribe-write-256.png",
              }}
              tintColor="rgba(255, 255, 255, 1.0)"
            />
            <Text style={styles.titleNew}>XONG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: "16",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconHeader: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  titleNote: {
    fontSize: 20,
    color: "#D3D3D3",
    fontWeight: "bold",
    padding: 10,
  },
  content: {
    fontSize: 16,
    color: "#D3D3D3",
    padding: 10,
    paddingVertical: 10,
    marginBottom: 40,
    textAlignVertical: "top",
  },
  input: {
    color: "black",
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
    height: 40,
    paddingVertical: 12,
    backgroundColor: "#fff", // Đặt màu nền của tabBarContainer (tuỳ chọn)
  },

  tabEditContainer: {
    position: "absolute",
    top: "-100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tabEdit: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2F4F4F",
    width: 100,
    padding: 10,
    borderRadius: 24,
  },
  iconTabEdit: {
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

export default AddNote;
