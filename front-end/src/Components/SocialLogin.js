import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
const SocialLogin = ({ text, image }) => {
    return (
        <TouchableOpacity style={[styles.flexRow, styles.button, { justifyContent: "center" }]}>
            <View style={[styles.flexRow, { justifyContent: "left" }]}>
                <Image source={{ uri: image }} style={styles.img} />
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};
export default SocialLogin;

const styles = StyleSheet.create({
    flexRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 18,
    },
    button: {
        borderWidth: 2,
        borderColor: "#AAAAAA",
        paddingVertical: 8,
        borderRadius: 5,
    },
    img: {
        width: 26,
        height: 26,
    },
    text: {
        textAlign: "center",
        fontSize: 15,
        color: "#2F4F4F",
        fontWeight: "bold",
    },
});
