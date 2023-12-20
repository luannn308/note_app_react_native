// Nguyễn Ngọc Luân - MSSV: 20521581
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import AuthStack from "./screens/Auth/AuthStack";
import Nav from "./screens/Nav";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <NavigationContainer>
            {isAuthenticated ? (
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Main" component={Nav} />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Auth" component={AuthStack} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};
export default AppNavigation;
