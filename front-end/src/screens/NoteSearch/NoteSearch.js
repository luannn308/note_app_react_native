import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, FlatList } from "react-native";
import { AuthContext } from "../../Context/AuthContext";
import { searchNotes } from "../../Services/NoteService";

const NoteSearch = ({ navigation }) => {
    const { token } = useContext(AuthContext);
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await searchNotes(token, searchText);
            if (response) {
                setSearchResults(response);
            }
        } catch (error) {
            console.error("Error searching notes:", error);
        }
    };
    useEffect(() => {
        handleSearch();
    }, [searchText]);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image
                        style={styles.backButton}
                        source={{
                            uri: "https://cdn1.iconfinder.com/data/icons/essentials-pack/96/left_arrow_back_previous_navigation-64.png",
                        }}
                    />
                </TouchableOpacity>
                <View style={styles.searchBar}>
                    <Image
                        style={styles.searchIcon}
                        source={{
                            uri: "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Magnifier-Search-Zoom--256.png",
                        }}
                        tintColor={"#D3D3D3"}
                    />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Tìm kiếm"
                        value={searchText}
                        onChangeText={(text) => setSearchText(text)}
                    />
                </View>
                <TouchableOpacity onPress={handleSearch}>
                    <Image
                        style={styles.filterIcon}
                        source={{
                            uri: "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Filter-Filters-64.png",
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.savedNotes}>
                <Text style={styles.sectionTitle}>Kết quả tìm kiếm</Text>
                <FlatList
                    data={searchResults}
                    keyExtractor={(item) => item._id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.result}
                            onPress={() => navigation.navigate("EditNote", { noteId: item._id })}
                        >
                            <Image
                                style={styles.iconFile}
                                source={
                                    item.important
                                        ? {
                                              uri: "https://cdn1.iconfinder.com/data/icons/christmas-flat-4/58/020_-_Star-256.png",
                                          }
                                        : {
                                              uri: "https://cdn4.iconfinder.com/data/icons/48-bubbles/48/12.File-256.png",
                                          }
                                }
                            />
                            <Text style={styles.noteItem}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    result: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        marginBottom: 16,
    },
    iconFile: {
        height: 24,
        width: 24,
        marginLeft: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#D3D3D3",
        marginBottom: 16,
        paddingBottom: 8,
    },
    backButton: {
        width: 24,
        height: 24,
        marginStart: 8,
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 50,
        paddingVertical: 2,
        paddingHorizontal: 16,
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
    },
    filterIcon: {
        width: 24,
        height: 24,
        marginRight: 12,
    },
    recentSearches: {
        marginBottom: 20,
        paddingStart: 20,
    },
    savedNotes: {
        flex: 1,
        paddingStart: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
    searchItem: {
        fontSize: 14,
        marginBottom: 8,
    },
    noteItem: {
        fontSize: 16,
    },
});

export default NoteSearch;
