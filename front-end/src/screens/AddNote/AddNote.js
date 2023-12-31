import React from "react";
import { View, Image, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";

const AddNote = ({ navigation }) => {
    return (
        <View style={styles.container}>
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
                    <TouchableOpacity onPress={() => console.log("Button pressed")}>
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
                                uri: "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_note_add_48px-256.png",
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("Button pressed")}>
                        <Image
                            style={styles.iconHeader}
                            source={{
                                uri: "https://cdn1.iconfinder.com/data/icons/bootstrap-vol-4/16/three-dots-256.png",
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <TextInput style={styles.title} placeholder="Tiêu đề" />
                <TextInput style={styles.content} placeholder="Nhập nội dung" multiline />
            </View>
            <View style={styles.tabBarContainer}>
                <TouchableOpacity onPress={() => console.log("Button pressed")}>
                    <Image
                        style={styles.iconTabBar}
                        source={{
                            uri: "https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-256.png",
                        }}
                    />
                </TouchableOpacity>
                <View style={styles.tabEditContainer}>
                    <TouchableOpacity
                        style={styles.tabEdit}
                        onPress={() => console.log("Button pressed")}
                    >
                        <Image
                            style={styles.iconTabEdit}
                            source={{
                                uri: "https://cdn0.iconfinder.com/data/icons/system-ui/154/compose-draw-edit-cursor-pencil-scribe-write-256.png",
                            }}
                            tintColor="rgba(255, 255, 255, 1.0)"
                        />
                        <Text style={styles.titleEdit}>CHỈNH SỬA</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => console.log("Button pressed")}>
                    <Image
                        style={styles.iconTabBar}
                        source={{
                            uri: "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Magnifier-Search-Zoom--256.png",
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
    },
    content: {
        fontSize: 16,
        color: "#D3D3D3",
        paddingVertical: 10,
        padding: 10,
        marginBottom: 40,
        textAlignVertical: "top",
    },
    tabBarContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        paddingVertical: 12,
        backgroundColor: "#fff",
    },

    tabEditContainer: {
        position: "absolute",
        top: "-100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    tabEdit: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2F4F4F",
        width: 100,
        padding: 10,
        borderRadius: 24,
    },
    iconTabEdit: {
        width: 12,
        height: 12,
    },
    titleNew: {
        fontSize: 10,
        fontWeight: "bold",
        paddingLeft: 8,
        color: "white",
    },
});

export default AddNote;
