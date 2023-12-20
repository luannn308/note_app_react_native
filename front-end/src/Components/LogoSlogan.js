import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const LogoSlogan = () => {
    return (
        <View style={[styles.flexColumnCenter, { gap: 16 }]}>
            <Image
                source={require("../../assets/Logo/Logo.png")}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.subtitle}>Ghi nhớ tất cả thông tin quan trọng.</Text>
        </View>
    );
};

export default LogoSlogan;

const styles = StyleSheet.create({
    flexColumnCenter: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 180,
        height: 116,
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        color: "#818181",
        fontStyle: "italic",
    },
});
