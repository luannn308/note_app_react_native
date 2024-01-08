import { createStackNavigator } from "@react-navigation/stack";
import NoteSWM from "./NoteSWM/NoteSWM";
import NoteView from "./NoteView/NoteView";
// Nguyễn Ngọc Luân - 20521581
const Stack = createStackNavigator();
const ShareStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="ShareList" component={NoteSWM} />
            <Stack.Screen name="NoteView" component={NoteView} />
        </Stack.Navigator>
    );
};

export default ShareStack;
