import { StyleSheet, Text, View } from "react-native";
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>GHI CHÚ</Text>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  header: {
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
