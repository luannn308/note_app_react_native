import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HyperLink from "../../Components/HyperLink";
import SocialLogin from "../../Components/SocialLogin";
import LogoSlogan from "../../Components/LogoSlogan";
import { login } from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext";

const Login = ({ navigation }) => {
  const { setToken } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      AsyncStorage.setItem("authToken", response.token);
      setToken(response.token);
    } catch (error) {
      Alert.alert("Lỗi", "Tên người dùng hoặc mật khẩu không đúng");
    }
  };
  return (
    <View style={styles.container}>
      <LogoSlogan />
      <View style={{ gap: 16 }}>
        <TextInput
          placeholder="Email hoặc username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Mật khẩu"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}>Đăng nhập</Text>
        </TouchableOpacity>
        <HyperLink
          link=" Đăng ký"
          text="Chưa có tài khoản?"
          navigation={navigation}
          screen="Register"
        />
      </View>
      <View style={{ gap: 18 }}>
        <View style={[styles.line, { marginBottom: 8 }]}>
          <Text style={styles.textOnLine}>hoặc sử dụng</Text>
        </View>
        <SocialLogin
          text="Đăng nhập bằng Google"
          image="https://cdn2.iconfinder.com/data/icons/social-media-2102/100/social_media_circled_network-07-256.png"
        />
        <SocialLogin
          text="Đăng nhập bằng Facebook"
          image="https://cdn2.iconfinder.com/data/icons/social-media-2102/100/social_media_circled_network-11-256.png"
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
    fontSize: 16,
    letterSpacing: 2,
  },
  or: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  orText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textStyle: {
    textDecorationLine: "line-through",
    backgroundColor: "white",
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textOnLine: {
    position: "absolute",
    backgroundColor: "white",
    padding: 12,
    color: "#818181",
    fontWeight: "400",
    letterSpacing: 3,
  },
});

export default Login;
