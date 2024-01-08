import React, { useContext, useState } from "react";
import {
    View,
    Image,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Modal,
    Platform,
} from "react-native";
import { AuthContext } from "../../Context/AuthContext";
import { addNote } from "../../Services/NoteService";
import { getUserByEmail } from "../../Services/UserService";
const AddNote = ({ navigation }) => {
    const { token } = useContext(AuthContext);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [important, setImportant] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [emailShare, setEmailShare] = useState("");
    const [userShare, setUserShare] = useState({});

    const handleAddNote = async () => {
        try {
            let newNote = {};
            newNote = {
                title: title,
                content: content,
                important: important,
                sharedWith: [userShare._id],
            };
            if (title === "") {
                newNote.title = "Note mới";
            }
            const response = await addNote(token, newNote);
            navigation.navigate({ name: "Home" });
        } catch (error) {
            console.error("Error adding note:", error);
        }
    };
    const handleShare = async () => {
        try {
            const user = await getUserByEmail(emailShare);
            if (user !== null) {
                setUserShare(user);
                Alert.alert("Thành công", "Chia sẻ thành công", [
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
                    <TouchableOpacity onPress={() => navigation.navigate({ name: "Home" })}>
                        <Image
                            style={styles.iconHeader}
                            source={{
                                uri: "https://cdn1.iconfinder.com/data/icons/essentials-pack/96/left_arrow_back_previous_navigation-256.png",
                            }}
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
                    <TouchableOpacity onPress={() => console.log("Button pressed")}>
                        <Image
                            style={styles.iconHeader}
                            source={{
                                uri: "https://cdn0.iconfinder.com/data/icons/spreadsheet-charts-comments-edits-attachments/49/slice418-256.png",
                            }}
                            tintColor={"black"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setImportant(!important)}>
                        <Image
                            style={styles.iconHeader}
                            source={
                                important
                                    ? {
                                          uri: "https://cdn1.iconfinder.com/data/icons/christmas-flat-4/58/020_-_Star-256.png",
                                      }
                                    : {
                                          uri: "https://cdn3.iconfinder.com/data/icons/feather-5/24/star-256.png",
                                      }
                            }
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <TextInput
                    style={[styles.title, styles.input]}
                    placeholder="Tiêu đề"
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={[styles.content, styles.input]}
                    placeholder="Nhập nội dung"
                    multiline
                    value={content}
                    onChangeText={setContent}
                />
            </View>
            <View style={styles.tabBarContainer}>
                <View style={styles.tabEditContainer}>
                    <TouchableOpacity style={styles.tabEdit} onPress={handleAddNote}>
                        <Image
                            style={styles.iconTabEdit}
                            source={{
                                uri: "https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/512/Tick_Mark-256.png",
                            }}
                            tintColor="rgba(255, 255, 255, 1.0)"
                        />
                        <Text style={styles.titleEdit}>XONG</Text>
                    </TouchableOpacity>
                </View>
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
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 10,
        paddingTop: 10,
        paddingHorizontal: "16",
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
        flex: 1,
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
    tabBarContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: 40,
        paddingVertical: 12,
    },
    tabEditContainer: {
        position: "absolute",
        top: "-120%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    tabEdit: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1E90FF",
        width: 100,
        padding: 10,
        borderRadius: 24,
    },
    iconTabEdit: {
        width: 12,
        height: 12,
    },
    titleEdit: {
        fontSize: 10,
        fontWeight: "bold",
        paddingLeft: 8,
        color: "white",
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

export default AddNote;
