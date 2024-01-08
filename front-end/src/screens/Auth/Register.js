import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import HyperLink from "../../Components/HyperLink";
import LogoSlogan from "../../Components/LogoSlogan";
import { register } from "../../Services/AuthService";

const Register = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const isValidUsername = (username) => {
        const usernameRegex = /^[a-zA-Z0-9_]{4,}$/;
        return usernameRegex.test(username);
    };
    const isPasswordValid = (password) => {
        return password.length >= 6;
    };
    const handleRegister = async () => {
        try {
            if (!isValidEmail(email)) {
                Alert.alert("Lỗi", "Địa chỉ email không hợp lệ");
            } else if (!isValidUsername(username)) {
                Alert.alert("Lỗi", "Tên tài khoản không hợp lệ");
            } else if (!isPasswordValid(password)) {
                Alert.alert("Lỗi", "Mật khẩu phải có ít nhất 6 ký tự");
            } else if (password !== confirmPassword) {
                Alert.alert("Lỗi", "Mật khẩu và mật khẩu xác nhận không khớp");
            } else {
                const userNew = {
                    name: name,
                    username: username,
                    email: email,
                    password: password,
                };
                const response = await register(userNew);
                Alert.alert("Đăng ký thành công", "Bạn đã đăng ký tài khoản thành công", [
                    {
                        text: "OK",
                        onPress: () => navigation.navigate("Login"),
                    },
                ]);
            }
        } catch (error) {
            Alert.alert("Lỗi", error);
        }
    };

    return (
        <View style={styles.container}>
            <LogoSlogan />
            <View style={{ gap: 16 }}>
                <TextInput
                    placeholder="Nhập họ và tên"
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    placeholder="Nhập địa chỉ email"
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    placeholder="Nhập tên tài khoản"
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Nhập mật khẩu"
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <TextInput
                    placeholder="Nhập mật khẩu xác nhận"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    style={styles.input}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
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
