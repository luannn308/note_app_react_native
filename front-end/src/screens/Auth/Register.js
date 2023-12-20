import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import HyperLink from "../../Components/HyperLink";
import LogoSlogan from "../../Components/LogoSlogan";

const Register = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <LogoSlogan />
            <View style={{ gap: 16 }}>
                <TextInput
                    placeholder="Nhập địa chỉ email"
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    placeholder="Nhập username"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Nhập mật khẩu"
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    placeholder="Nhập mật khẩu xác nhận"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Đăng ký</Text>
                </TouchableOpacity>
                <HyperLink
                    link="Đăng nhập"
                    text="Đã có tài khoản? "
                    screen="Login"
                    navigation={navigation}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        justifyContent: "center",
        gap: 44,
        padding: 24,
    },
    input: {
        width: "fit-content",
        height: 40,
        borderColor: "#ccc",
        borderBottomWidth: 1,
        paddingVertical: 12,
        paddingLeft: 8,
        textAlign: "left",
        marginTop: 8,
        fontSize: 16,
    },
    button: {
        width: "100%",
        height: 40,
        backgroundColor: "#1E90FF",
        borderRadius: 6,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    textButton: {
        color: "white",
        fontWeight: "bold",
        letterSpacing: 2,
        fontSize: 16,
    },
});

export default Register;
