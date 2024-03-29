// Nguyễn Ngọc Luân - MSSV: 20521581
import AppNavigation from "./src/AppNavigation";
import React from "react";
import { AuthProvider } from "./src/Context/AuthContext";

export default function App() {
    return (
        <AuthProvider>
            <AppNavigation />
        </AuthProvider>
    );
}
