import React, { useEffect, useState } from "react";
import PresentAll from "../Lab1,2/PresentAll";

const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123"
}

const AuthContext = React.createContext(null);

export default function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState({
        status: true,
        user: user
    });

    const login = () => {
        setIsAuthenticated({ status: true, user: user });
        // localStorage.setItem("isAuthenticated", JSON.stringify({ status: true, user: user }));
        console.log("Logged in");
    };

    const logout = () => {
        setIsAuthenticated({ status: false, user: null });
        // localStorage.setItem("isAuthenticated", JSON.stringify({ status: false, user: null }));s
        console.log("Logged out");
    };

    useEffect(() => {
        const storedAuth = localStorage.getItem("isAuthenticated");
        if (storedAuth) {
            localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
        }
    }, [isAuthenticated]);

    // const toggle = () => {
    //     localStorage.setItem("isAuthenticated", isAuthenticated);
    // }
    return(
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext };