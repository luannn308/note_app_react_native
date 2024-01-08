import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import NoteList from "./NoteList/NoteList";
import NoteSWM from "./NoteSWM/NoteSWM";
import UserProfile from "./UserProfile/UserProfile";
import HomeStack from "./HomeStack";
import { TouchableOpacity } from "react-native-gesture-handler";
import NoteImportant from "./NoteImportant/NoteImportant";
import ShareStack from "./ShareStack";
const Drawer = createDrawerNavigator();
const Nav = ({ navigation }) => {
    return (
        <Drawer.Navigator
            screenOptions={({ route }) => ({
                drawerIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Trang chủ") {
                        iconName = focused ? "ios-home" : "ios-home-outline";
                    } else if (route.name === "Ghi chú") {
                        iconName = focused ? "ios-document" : "ios-document-outline";
                    } else if (route.name === "Ghi chú quan trọng") {
                        iconName = focused ? "ios-star" : "ios-star-outline";
                    } else if (route.name === "Chia sẻ với tôi") {
                        iconName = focused ? "ios-share" : "ios-share-outline";
                    } else if (route.name === "Tài khoản") {
                        iconName = focused ? "ios-person" : "ios-person-outline";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                drawerActiveTintColor: "#1E90FF",
                drawerInactiveTintColor: "gray",
                drawerLabelStyle: {
                    fontSize: 12,
                    paddingBottom: 4,
                },
                headerShown: true,
                headerTitleAlign: "left",
                headerStyle: {
                    backgroundColor: "#1E90FF",
                },
                headerTintColor: "#fff",
            })}
        >
            <Drawer.Screen
                name="Trang chủ"
                component={HomeStack}
                options={({ navigation }) => ({
                    title: "Trang chủ",
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate({ name: "Search" })}>
                            <Ionicons
                                name="ios-search"
                                size={30}
                                color="#fff"
                                style={{ marginRight: 15 }}
                            />
                        </TouchableOpacity>
                    ),
                    headerStyle: {
                        backgroundColor: "#1E90FF",
                    },
                    headerTintColor: "#fff",
                })}
            />
            <Drawer.Screen name="Ghi chú" component={NoteList} />
            <Drawer.Screen name="Ghi chú quan trọng" component={NoteImportant} />
            <Drawer.Screen name="Chia sẻ với tôi" component={ShareStack} />
            <Drawer.Screen name="Tài khoản" component={UserProfile} />
        </Drawer.Navigator>
    );
};

export default Nav;
