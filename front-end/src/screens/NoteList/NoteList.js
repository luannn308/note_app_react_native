import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { getNoteByUser } from "../../Services/NoteService";
import { AuthContext } from "../../Context/AuthContext";
import { ScrollView } from "react-native-gesture-handler";

const NoteList = ({ navigation }) => {
  const [notes, setNotes] = useState([]);
  const { token } = useContext(AuthContext);
  const fetchNotes = async () => {
    try {
      const fetchedNotes = await getNoteByUser(token);

      if (fetchedNotes) {
        setNotes(fetchedNotes);
      } else {
        console.error("Error fetching notes.");
      }
    } catch (error) {
      console.error("Error fetching notes:", error.message);
    }
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  const formatDateTime = (isoDate) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "UTC",
    };
    return new Date(isoDate).toLocaleDateString("en-US", options);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {notes.map((note) => (
          <TouchableOpacity
            key={note._id}
            style={styles.noteContainer}
            onPress={() =>
              navigation.navigate("EditNote", { noteId: note._id })
            }
          >
            <Text style={styles.noteTitle}>{note.title}</Text>
            <Text style={styles.noteContent}>{note.content}</Text>
            <Text style={styles.noteDate}>
              {formatDateTime(note.createdAt)}
            </Text>
            <View style={styles.line}></View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
  },
  noteContent: {
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20,
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
