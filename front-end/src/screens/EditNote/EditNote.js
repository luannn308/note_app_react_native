import React, { useState, useEffect, useContext } from "react";
import {
    View,
    Image,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Alert,
} from "react-native";
import { deleteNote, editNote, getNoteById } from "../../Services/NoteService";
import { getUserByEmail } from "../../Services/UserService";
import { AuthContext } from "../../Context/AuthContext";
import { CommonActions } from "@react-navigation/native";

const EditNote = ({ route, navigation }) => {
    const { token } = useContext(AuthContext);
    const { noteId } = route.params;
    const [note, setNote] = useState({});
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [emailShare, setEmailShare] = useState("");
    const [userShare, setUserShare] = useState({});
    const loadNote = async () => {
        try {
            const response = await getNoteById(noteId);
            setNote(response);
        } catch (error) {
            console.error("Error loading note:", error);
        }
    };

    useEffect(() => {
        loadNote();
    }, []);

    const handleEditNote = async () => {
        try {
            let newNote = {
                noteId: note._id,
                title: note.title,
                content: note.content,
                imagePath: note.imagePath,
                sharedWith: [...note.sharedWith, userShare._id],
                important: note.important,
            };
            const response = await editNote(token, newNote);
            navigation.goBack();
        } catch (error) {
            console.error("Error adding note:", error);
        }
    };
    const handleShare = async () => {
        try {
            const user = await getUserByEmail(emailShare);
            if (user !== null) {
                setUserShare(user);
                Alert.alert("Thành công", "Đã chia sẻ", [
                    {
                        text: "OK",
                        onPress: () => {
                            setShowEmailModal(false);
                            setUserShare(user);
                            setEmailShare("");
                        },
                    },
                ]);
            } else {
                Alert.alert("Lỗi", "Người dùng chưa đăng ký");
            }
        } catch (error) {
            console.error("Error adding note:", error);
        }
    };
    const handleDelete = async () => {
        Alert.alert(
            "Xác nhận xoá",
            "Bạn có muốn xoá ghi chú này không?",
            [
                {
                    text: "Huỷ",
                    style: "cancel",
                },
                {
                    text: "Xoá",
                    onPress: async () => {
                        try {
                            await deleteNote(token, note._id);
                            navigation.goBack();
                        } catch (error) {
                            console.error("Error deleting note:", error);
                        }
                    },
                },
            ],
            { cancelable: false }
        );
    };
    return (
        <View style={styles.container}>
            <Modal
                visible={showEmailModal}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setShowEmailModal(false)}
            >
                <View style={styles.modalContainer}>
                    {/* Mẫu nhập liệu email */}
                    <TextInput
                        style={styles.emailInput}
                        placeholder="Nhập địa chỉ email"
                        value={emailShare}
                        onChangeText={setEmailShare}
                    />
                    <View style={styles.flexRow}>
                        {/* Nút Share */}
                        <TouchableOpacity style={styles.shareButton}>
                            <Text style={styles.shareButtonText} onPress={handleShare}>
                                Chia sẻ
                            </Text>
                        </TouchableOpacity>
                        {/* Nút để đóng modal */}
                        <TouchableOpacity onPress={() => setShowEmailModal(false)}>
                            <Text style={styles.closeButton}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.headerContainer}>
                <View style={styles.headerSection}>
                    <TouchableOpacity onPress={handleEditNote}>
                        <Image
                            style={styles.iconHeader}
                            source={{
                                uri: "https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/512/Tick_Mark-256.png",
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("Button pressed")}>
                        <Image
                            style={styles.iconHeader}
                            source={{
                                uri: "https://cdn4.iconfinder.com/data/icons/remixicon-system/24/arrow-go-back-fill-64.png",
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("Button pressed")}>
                        <Image
                            style={styles.iconHeader}
                            source={{
                                uri: "https://cdn4.iconfinder.com/data/icons/remixicon-system/24/arrow-go-forward-fill-512.png",
                            }}
                            tintColor="#D3D3D3"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerSection}>
                    <TouchableOpacity onPress={() => setShowEmailModal(true)}>
                        <Image
                            style={styles.iconHeader}
                            source={{
                                uri: "https://cdn0.iconfinder.com/data/icons/typicons-2/24/user-add-256.png",
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setNote({ ...note, important: !note.important })}
                    >
                        <Image
                            style={styles.iconHeader}
                            source={
                                note.important
                                    ? {
                                          uri: "https://cdn1.iconfinder.com/data/icons/christmas-flat-4/58/020_-_Star-256.png",
                                      }
                                    : {
                                          uri: "https://cdn3.iconfinder.com/data/icons/feather-5/24/star-256.png",
                                      }
                            }
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDelete}>
                        <Image
                            style={styles.iconHeader}
                            source={{
                                uri: "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Trash-Can--64.png",
                            }}
                            tintColor="red"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <TextInput
                    style={[styles.title, styles.input]}
                    placeholder="Tiêu đề"
                    placeholderTextColor="#D3D3D3"
                    value={note.title}
                    onChangeText={(text) => setNote({ ...note, title: text })}
                />
                <TextInput
                    style={[styles.content, styles.input]}
                    placeholder="Nhập nội dung"
                    placeholderTextColor="#D3D3D3"
                    multiline
                    value={note.content}
                    onChangeText={(content) => setNote({ ...note, content: content })}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    flexRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
    },
    container: {
        height: "100%",
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 10,
        paddingTop: 10,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#D3D3D3",
    },
    headerSection: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconHeader: {
        width: 20,
        height: 20,
        marginHorizontal: 10,
    },
    contentContainer: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        color: "#D3D3D3",
        fontWeight: "bold",
        padding: 10,
    },
    content: {
        fontSize: 16,
        color: "#D3D3D3",
        padding: 10,
        paddingVertical: 10,
        marginBottom: 40,
        textAlignVertical: "top",
    },
    input: {
        color: "black",
    },
    modalContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        marginTop: 120,
        marginHorizontal: 24,
        alignItems: "center",
    },
    emailInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        width: "100%",
    },
    closeButton: {
        backgroundColor: "#1E90FF",
        color: "white",
        padding: 10,
        borderRadius: 5,
    },
    shareButton: {
        backgroundColor: "#4CAF50",
        color: "white",
        padding: 10,
        borderRadius: 5,
    },
    shareButtonText: {
        color: "white",
    },
});

export default EditNote;
