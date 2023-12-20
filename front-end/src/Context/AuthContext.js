// Nguyễn Ngọc Luân - MSSV: 20521581
import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState("luannn308");
    const [password, setPassword] = useState("123456");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <AuthContext.Provider
            value={{ email, password, isAuthenticated, setEmail, setPassword, setIsAuthenticated }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
