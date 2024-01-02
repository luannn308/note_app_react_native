import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const Home = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState("");
  const [draftNote, setDraftNote] = useState(""); // Giấy nháp
  const [recentNotes, setRecentNotes] = useState([
    { id: 1, title: "Note 1", content: "Nội dung note 1" },
    { id: 2, title: "Note 2", content: "Nội dung note 2" },
    { id: 3, title: "Note 3", content: "Nội dung note 3" },
    { id: 4, title: "Note 4", content: "Nội dung note 4" },
  ]);

  var hours = new Date().getHours();

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var currentDate = new Date().getDay();

    setCurrentDate(
      currentDateFormat(currentDate) +
        ", Ngày " +
        date +
        " tháng " +
        month +
        " năm " +
        year
    );
  }, []);

  const currentGreeting = (current_hours) => {
    if (current_hours >= 5 && current_hours < 12) {
      return "Xin chào buổi sáng";
    } else if (current_hours >= 12 && current_hours < 18) {
      return "Xin chào buổi chiều";
    } else {
      return "Xin chào buổi tối";
    }
  };

  const currentDateFormat = (current_day) => {
    switch (current_day) {
      case 0:
        return "Chủ nhật";
      case 1:
        return "Thứ hai";
      case 2:
        return "Thứ ba";
      case 3:
        return "Thứ tư";
      case 4:
        return "Thứ năm";
      case 5:
        return "Thứ sau";
      case 6:
        return "Thứ bảy";
      default:
        return "";
    }
  };
  const [importantNotes, setImportantNotes] = useState([
    { id: 5, title: "Note 5", content: "Nội dung note 5" },
    { id: 6, title: "Note 6", content: "Nội dung note 6" },
  ]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.opacityNight}>
          <TouchableOpacity style={styles.btnEditHome}>
            <Image
              source={{
                uri: "https://cdn4.iconfinder.com/data/icons/edit-glyph/64/edit-home-house-estate-512.png",
              }}
              style={styles.editHomeIcon}
              tintColor="rgba(255, 255, 255,1)"
            />
          </TouchableOpacity>
          <Text style={styles.title}>
            {currentGreeting(hours)}, Luân Nguyễn!
          </Text>
          <Text style={[styles.textDateTime, styles.text]}>{currentDate}</Text>
        </View>
      </ImageBackground>

      <View
        style={[
          styles.content,
          styles.flexRow,
          { justifyContent: "space-between" },
        ]}
      >
        <TouchableOpacity
          style={styles.flexRow}
          onPress={() => navigation.navigate({ name: "Ghi chú" })}
        >
          <Text style={styles.goNotes}>Ghi chú</Text>
          <Ionicons name="ios-arrow-forward" color="#1E90FF" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.flexRow}
          onPress={() => navigation.navigate({ name: "AddNote" })}
        >
          <Image
            source={{
              uri: "https://cdn4.iconfinder.com/data/icons/liny/24/note-text-plus-line-256.png",
            }}
            style={styles.imageIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Note gần đây */}
      <View style={styles.content}>
        <Text style={styles.goNotesRC}>Note gần đây</Text>
        <FlatList
          data={recentNotes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("NoteDetail", { note: item })}
            >
              <View style={styles.noteItem}>
                <Text style={styles.noteTitle}>{item.title}</Text>
                <Text style={styles.noteContent} numberOfLines={1}>
                  {item.content}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Phần "Giấy nháp" */}
      <View style={styles.content}>
        <Text style={styles.goNotes}>Giấy nháp</Text>
        <TextInput
          style={styles.draftInput}
          multiline
          placeholder="Nhập nội dung nháp..."
          value={draftNote}
          onChangeText={(text) => setDraftNote(text)}
        />
      </View>

      {/* Note quan trọng */}
      <View style={styles.content}>
        <Text style={styles.goNotes}>Note quan trọng</Text>
        <FlatList
          data={importantNotes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("NoteDetail", { note: item })}
            >
              <View style={styles.noteItemIPT}>
                <Text style={styles.noteTitle}>{item.title}</Text>
                <Text style={styles.noteContent} numberOfLines={1}>
                  {item.content}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnEditHome: {
    flexDirection: "row-reverse",
    marginBottom: 16,
  },
  opacityNight: {
    backgroundColor: "rgba(0, 0, 0,0.4)",
    paddingHorizontal: 16,
    paddingBottom: 32,
    paddingTop: 16,
  },
  image: {
    backgroundColor: "black",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  text: {
    color: "white",
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "500",
  },
  editHomeIcon: {
    width: 32,
    height: 32,
  },
  content: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  goNotes: {
    fontWeight: "bold",
    fontSize: 16,
  },
  goNotesRC: {
    fontWeight: "bold",
    fontSize: 16,
    paddingBottom: 12,
  },
  imageIcon: {
    width: 24,
    height: 24,
  },
  noteItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginRight: 8,
    width: 160,
    shadowColor: "#1E90FF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  noteTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  noteContent: {
    fontSize: 14,
    color: "#555",
  },
  draftInput: {
    borderWidth: 1,
    borderColor: "#DFEBFF",
    backgroundColor: "#DFEBFF",
    borderRadius: 8,
    paddingLeft: 20,
    paddingTop: 16,
    marginTop: 8,
    minHeight: 100,
    textAlignVertical: "top",
  },
  noteItemIPT: {
    backgroundColor: "#F6FFBF",
    borderRadius: 8,
    padding: 16,
    marginRight: 8,
    width: 160,
    shadowColor: "#1E90FF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
});

export default Home;
