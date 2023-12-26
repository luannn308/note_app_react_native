import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Alert = ({ title, visible, buttons, children }) => {
  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{title}</Text>
          <Text>{children}</Text>
          <View style={styles.buttonContainer}>
            {buttons.map((button, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={button.onPress}
              >
                <Text style={styles.buttonText}>{button.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    width: "40%",
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Alert;
