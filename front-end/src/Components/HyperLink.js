import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const HyperLink = ({ navigation, screen, link, text }) => {
    return (
        <View style={styles.flexRow}>
            <Text style={[styles.text, { color: "#818181" }]}>{text}</Text>
            <TouchableOpacity onPress={() => navigation.navigate({ name: screen })}>
                <Text style={[styles.link, styles.text]}>{link}</Text>
            </TouchableOpacity>
        </View>
    );
};
export default HyperLink;

const styles = StyleSheet.create({
    flexRow: {
        display: "flex",
        flexDirection: "row",
        gap: 4,
    },
    link: {
        color: "#2F4F4F",
        fontWeight: "bold",
    },
    text: {
        fontSize: 16,
    },
});
