import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NoteList from "./screens/NoteList/NoteList";
import AddNote from "./screens/AddNote/AddNote";
import EditNote from "./screens/EditNote/EditNote";
import NoteSWM from "./screens/NoteSWM/NoteSWM";

export default function App() {
  return (
    <View style={styles.container}>
      <NoteShare />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
});
