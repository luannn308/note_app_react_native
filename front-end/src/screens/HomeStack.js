import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import AddNote from "./AddNote/AddNote";
import EditNote from "./EditNote/EditNote";
// Nguyễn Ngọc Luân - 20521581
const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddNote" component={AddNote} />
            <Stack.Screen name="EditNote" component={EditNote} />
        </Stack.Navigator>
    );
};

export default HomeStack;
