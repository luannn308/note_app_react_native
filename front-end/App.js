// Nguyễn Ngọc Luân - MSSV: 20521581
import AppNavigation from "./src/AppNavigation";
import { AuthProvider } from "./src/Context/AuthContext";

export default function App() {
    return (
        <AuthProvider>
            <AppNavigation />
        </AuthProvider>
    );
}
