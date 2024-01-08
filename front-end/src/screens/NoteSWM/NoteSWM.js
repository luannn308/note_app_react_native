import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { AuthContext } from "../../Context/AuthContext";
import { useFocusEffect } from "@react-navigation/native";
import { getListShareWith } from "../../Services/NoteService";
import { getListUsers, getUserById } from "../../Services/UserService";

const NoteSWM = ({ navigation }) => {
    const { token } = useContext(AuthContext);
    const [notes, setNotes] = useState([]);
    const [users, setUsers] = useState([]);
    const fetchNotes = async () => {
        try {
            const fetchedNotes = await getListShareWith(token);

            if (fetchedNotes) {
                setNotes(fetchedNotes);
            } else {
                console.error("Error fetching notes.");
            }
        } catch (error) {
            console.error("Error fetching notes:", error.message);
        }
    };
    const fetchUsers = async () => {
        try {
            const fetchedUsers = await getListUsers();

            if (fetchedUsers) {
                setUsers(fetchedUsers);
            } else {
                console.error("Error fetching notes.");
            }
        } catch (error) {
            console.error("Error fetching notes:", error.message);
        }
    };
    useEffect(() => {
        fetchNotes();
        fetchUsers();
    }, []);
    useFocusEffect(
        React.useCallback(() => {
            fetchNotes();
        }, [])
    );
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
    const findUserByIP = (ipToFind) => {
        const foundUser = users.find((user) => user._id === ipToFind);
        return foundUser || null;
    };
    const renderNoteItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("NoteView", { noteId: item._id })}>
                <View style={styles.contentShares}>
                    <Text style={styles.monthYear}>{formatDateTime(item.createdAt)}</Text>
                    <View style={styles.line} />
                    <View style={styles.listItemContainer}>
                        <Image
                            style={styles.iconFile}
                            source={{
                                uri: "https://cdn4.iconfinder.com/data/icons/48-bubbles/48/12.File-256.png",
                            }}
                        />
                        <Text style={styles.noteTitle}>{item.title}</Text>
                    </View>
                    <View style={styles.sharer}>
                        <Image
                            style={styles.iconUsers}
                            source={{
                                uri: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-256.png",
                            }}
                        />
                        <Text>
                            {findUserByIP(item.createdBy).name} -{" "}
                            {findUserByIP(item.createdBy).email}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={notes}
                keyExtractor={(item) => item._id}
                renderItem={renderNoteItem}
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        marginTop: 16,
    },
    flatListContainer: {
        paddingBottom: 16,
    },
    contentShares: {
        paddingBottom: 32,
        paddingLeft: 12,
    },
    listItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 12,
    },
    monthYear: {
        fontWeight: "bold",
    },
    line: {
        borderBottomColor: "#D3D3D3",
        borderBottomWidth: 1,
        width: "95%",
        paddingTop: 10,
    },
    noteTitle: {
        flex: 1,
        fontWeight: "bold",
        marginLeft: 10,
    },
    sharer: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        padding: 10,
    },
    iconFile: {
        height: 24,
        width: 24,
        marginLeft: 10,
    },
    iconUsers: {
        height: 24,
        width: 24,
    },
});

export default NoteSWM;
