import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from "react-native";

const NoteSearch = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [recentSearches, setRecentSearches] = useState([
    "React Native",
    "UI Design",
    "State Management",
  ]);
  const [savedNotes, setSavedNotes] = useState([
    { id: 1, title: "Note 1" },
    { id: 2, title: "Note 2" },
    { id: 3, title: "React Native Tips" },
  ]);

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching for:", searchText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.backButton}
            source={{
              uri: "https://cdn1.iconfinder.com/data/icons/essentials-pack/96/left_arrow_back_previous_navigation-64.png",
            }}
          />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Image
            style={styles.searchIcon}
            source={{
              uri: "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Magnifier-Search-Zoom--256.png",
            }}
            tintColor={"#D3D3D3"}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
        <TouchableOpacity onPress={handleSearch}>
          <Image
            style={styles.filterIcon}
            source={{
              uri: "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Filter-Filters-64.png",
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.recentSearches}>
        <Text style={styles.sectionTitle}>Nội dung tìm kiếm gần đây</Text>
        <FlatList
          data={recentSearches}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Text style={styles.searchItem}>{item}</Text>
          )}
        />
      </View>

      <View style={styles.savedNotes}>
        <Text style={styles.sectionTitle}>Note đã lưu</Text>
        <FlatList
          data={savedNotes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text style={styles.noteItem}>{item.title}</Text>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
    marginBottom: 16,
    paddingBottom: 8,
  },
  backButton: {
    width: 24,
    height: 24,
    marginStart: 8,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 16,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
  },
  filterIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  recentSearches: {
    marginBottom: 20,
    paddingStart: 20,
  },
  savedNotes: {
    flex: 1,
    paddingStart: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  searchItem: {
    fontSize: 14,
    marginBottom: 8,
  },
  noteItem: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default NoteSearch;
