import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    FlatList,
    TextInput,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Ionicons from "react-native-vector-icons/Ionicons";
import { getUserDetail } from "../Services/UserService";
import { AuthContext } from "../Context/AuthContext";
import { getNoteByUser } from "../Services/NoteService";

const Home = ({ navigation }) => {
    const { token } = useContext(AuthContext);
    const [userDetail, setUserDetail] = useState({});
    const [currentDate, setCurrentDate] = useState("");
    const [draftNote, setDraftNote] = useState("");
    const [notes, setNotes] = useState([]);
    const fetchNotes = async () => {
        try {
            const fetchedNotes = await getNoteByUser(token);

            if (fetchedNotes) {
                setNotes(fetchedNotes);
            } else {
                console.error("Error fetching notes.");
            }
        } catch (error) {
            console.error("Error fetching notes:", error.message);
        }
    };
    var hours = new Date().getHours();
    const getUser = async () => {
        try {
            const user = await getUserDetail(token);
            if (user) {
                setUserDetail(user);
            } else {
                console.error("Error fetching user detail.");
            }
        } catch (error) {
            console.error("Error fetching notes:", error.message);
        }
    };
    useEffect(() => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var currentDate = new Date().getDay();

        setCurrentDate(
            currentDateFormat(currentDate) + ", Ngày " + date + " tháng " + month + " năm " + year
        );
        getUser();
        fetchNotes();
    }, []);

    const currentGreeting = (current_hours) => {
        if (current_hours >= 5 && current_hours < 12) {
            return "Xin chào buổi sáng";
        } else if (current_hours >= 12 && current_hours < 18) {
            return "Xin chào buổi chiều";
        } else {
            return "Xin chào buổi tối";
        }
    };
    const currentDateFormat = (current_day) => {
        switch (current_day) {
            case 0:
                return "Chủ nhật";
            case 1:
                return "Thứ hai";
            case 2:
                return "Thứ ba";
            case 3:
                return "Thứ tư";
            case 4:
                return "Thứ năm";
            case 5:
                return "Thứ sau";
            case 6:
                return "Thứ bảy";
            default:
                return "";
        }
    };
    const getLatestFourNotes = (notes) => {
        if (!Array.isArray(notes)) {
            console.error("Invalid input. Please provide an array of notes.");
            return [];
        }
        const sortedNotes = notes.sort(
            (a, b) => new Date(b.lastModified) - new Date(a.lastModified)
        );
        const latestFourNotes = sortedNotes.slice(0, 4);
        return latestFourNotes;
    };
    const [importantNotes, setImportantNotes] = useState([
        { id: 5, title: "Note 5", content: "Nội dung note 5" },
        { id: 6, title: "Note 6", content: "Nội dung note 6" },
    ]);
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{
                    uri: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
                resizeMode="cover"
                style={styles.image}
            >
                <View style={styles.opacityNight}>
                    <Text style={styles.title}>
                        {currentGreeting(hours)}, {userDetail.name}
                    </Text>
                    <Text style={[styles.textDateTime, styles.text]}>{currentDate}</Text>
                </View>
            </ImageBackground>
            <View style={[styles.content, styles.flexRow, { justifyContent: "space-between" }]}>
                <TouchableOpacity
                    style={styles.flexRow}
                    onPress={() => navigation.navigate({ name: "Ghi chú" })}
                >
                    <Text style={[styles.goNotes, { paddingBottom: 0 }]}>Ghi chú</Text>
                    <Ionicons name="ios-arrow-forward" color="#1E90FF" size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.flexRow}
                    onPress={() => navigation.navigate({ name: "AddNote" })}
                >
                    <Image
                        source={{
                            uri: "https://cdn4.iconfinder.com/data/icons/liny/24/note-text-plus-line-256.png",
                        }}
                        style={styles.imageIcon}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView>
                {/* Note gần đây */}
                <View style={styles.content}>
                    <Text style={styles.goNotes}>Note gần đây</Text>
                    <FlatList
                        data={getLatestFourNotes(notes)}
                        keyExtractor={(item) => item._id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("NoteDetail", { note: item })}
                            >
                                <View style={styles.noteItem}>
                                    <Text style={styles.noteTitle} numberOfLines={1}>
                                        {item.title}
                                    </Text>
                                    <Text style={styles.noteContent} numberOfLines={2}>
                                        {item.content}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                {/* Phần "Giấy nháp" */}
                <View style={styles.content}>
                    <Text style={styles.goNotes}>Giấy nháp</Text>
                    <TextInput
                        style={styles.draftInput}
                        multiline
                        placeholder="Nhập nội dung nháp..."
                        value={draftNote}
                        onChangeText={(text) => setDraftNote(text)}
                    />
                </View>
                {/* Note quan trọng */}
                <View style={styles.content}>
                    <Text style={styles.goNotes}>Note quan trọng</Text>
                    <FlatList
                        data={importantNotes}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("NoteDetail", { note: item })}
                            >
                                <View style={[styles.noteItem, styles.noteItemIPT]}>
                                    <Text style={styles.noteTitle} numberOfLines={1}>
                                        {item.title}
                                    </Text>
                                    <Text style={styles.noteContent} numberOfLines={2}>
                                        {item.content}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    opacityNight: {
        backgroundColor: "rgba(0, 0, 0,0.4)",
        paddingHorizontal: 16,
        paddingBottom: 32,
        paddingTop: 56,
    },
    image: {
        backgroundColor: "black",
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },
    text: {
        color: "white",
        fontSize: 14,
        textTransform: "uppercase",
        fontWeight: "500",
    },
    editHomeIcon: {
        width: 32,
        height: 32,
    },
    content: {
        marginHorizontal: 16,
        marginVertical: 16,
    },
    goNotes: {
        fontWeight: "bold",
        fontSize: 16,
        paddingBottom: 12,
    },
    imageIcon: {
        width: 24,
        height: 24,
    },
    noteItem: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        marginRight: 8,
        width: 160,
        height: 100,
        maxHeight: 100,
        shadowColor: "#1E90FF",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 2,
    },
    noteTitle: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 8,
    },
    noteContent: {
        fontSize: 14,
        color: "#555",
    },
    draftInput: {
        borderWidth: 1,
        borderColor: "#DFEBFF",
        backgroundColor: "#DFEBFF",
        borderRadius: 8,
        paddingLeft: 20,
        paddingTop: 16,
        minHeight: 100,
        textAlignVertical: "top",
    },
    noteItemIPT: {
        backgroundColor: "#F6FFBF",
    },
});

export default Home;
