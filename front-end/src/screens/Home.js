// Nguyễn Ngọc Luân - MSSV: 20521581
import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const Home = ({ navigation }) => {
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
                    <TouchableOpacity style={styles.btnEditHome}>
                        <Image
                            source={{
                                uri: "https://cdn4.iconfinder.com/data/icons/edit-glyph/64/edit-home-house-estate-512.png",
                            }}
                            style={styles.editHomeIcon}
                            tintColor="rgba(255, 255, 255,1)"
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>Xin chào buổi sáng, Luân Nguyễn!</Text>
                    <Text style={styles.text}>Chủ nhật, ngày 29 tháng 12, 2023</Text>
                </View>
            </ImageBackground>
            <View style={[styles.content, styles.flexRow, { justifyContent: "space-between" }]}>
                <TouchableOpacity
                    style={styles.flexRow}
                    onPress={() => navigation.navigate({ name: "Ghi chú" })}
                >
                    <Text style={styles.goNotes}>Ghi chú</Text>
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
        </View>
    );
};

export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    btnEditHome: {
        flexDirection: "row-reverse",
        marginBottom: 16,
    },
    opacityNight: {
        backgroundColor: "rgba(0, 0, 0,0.4)",
        paddingHorizontal: 16,
        paddingBottom: 32,
        paddingTop: 16,
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
        textTransform: "uppercase",
        fontSize: 16,
    },
    imageIcon: {
        width: 24,
        height: 24,
    },
});
