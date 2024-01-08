import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./screens/Auth/AuthStack";
import Nav from "./screens/Nav";
import { Text, View } from "react-native";
import { AuthContext } from "./Context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const { token, setToken } = useContext(AuthContext);
    const [isLoginChecked, setIsLoginChecked] = useState(false);

    useEffect(() => {
        const checkLogin = async () => {
            try {
                const check = await AsyncStorage.getItem("authToken");
                setToken(check);
            } catch (error) {
                console.error("Lỗi khi kiểm tra đăng nhập:", error);
            } finally {
                setIsLoginChecked(true);
            }
        };
        checkLogin();
    }, [setToken]);
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {token !== null ? (
                    <Stack.Screen name="Main" component={Nav} />
                ) : (
                    <Stack.Screen name="Auth" component={AuthStack} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
