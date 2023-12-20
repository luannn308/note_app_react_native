// Nguyễn Ngọc Luân - MSSV: 20521581
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NoteList from "./NoteList/NoteList";
import Header from "./NoteList/Header";

const Tab = createMaterialTopTabNavigator();

const TabNotes = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="NoteList" component={NoteList} />
            <Tab.Screen name="Action" component={Header} />
        </Tab.Navigator>
    );
};

export default TabNotes;
