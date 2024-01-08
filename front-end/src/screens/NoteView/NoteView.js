import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { getNoteById } from "../../Services/NoteService";
import { getUserById } from "../../Services/UserService";

const NoteView = ({ route, navigation }) => {
    const { noteId } = route.params;
    const [note, setNote] = useState({});
    const [user, setUser] = useState({});
    const loadNote = async () => {
        try {
            const response = await getNoteById(noteId);
            setNote(response);
            loadUser(response);
        } catch (error) {
            console.error("Error loading note:", error);
        }
    };

    useEffect(() => {
        loadNote();
    }, []);
    const formatDateTime = (isoDate) => {
        const options = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZone: "UTC",
        };
        return new Date(isoDate).toLocaleDateString("en-US", options);
    };
    const loadUser = async (res) => {
        try {
            const response = await getUserById(res.createdBy);
            setUser(response);
        } catch (error) {
            console.error("Error loading note:", error);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        style={styles.backButton}
                        source={{
                            uri: "https://cdn1.iconfinder.com/data/icons/essentials-pack/96/left_arrow_back_previous_navigation-256.png",
                        }}
                    />
                </TouchableOpacity>
                <Text style={{ color: "#ccc" }}>By {user.email}</Text>
            </View>

            {/* Note Content */}
            <View style={styles.content}>
                <Text style={styles.title}>{note.title}</Text>
                <Text style={styles.noteContent}>{note.content}</Text>
                <Text style={styles.date}>{formatDateTime(note.createdAt)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
        paddingHorizontal: 12,
        borderBottomColor: "#D3D3D3",
        borderBottomWidth: 1,
    },
    backButton: {
        width: 24,
        height: 24,
    },
    textHeader: {
        fontSize: 16,
        fontWeight: "bold",
    },
    content: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
    },
    noteContent: {
        fontSize: 16,
        marginBottom: 12,
    },
    date: {
        fontSize: 12,
        color: "#D3D3D3",
    },
});

export default NoteView;
