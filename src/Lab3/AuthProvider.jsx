import React, { useEffect, useState } from "react";

const userDefine = {
    name: "harry.do",
    email: "harry.do@example.com",
    password: "password123"
}

const initialValue = {
    status: false,
    user: userDefine,
    login: () => {},
    logout: () => {}
}

const AuthContext = React.createContext(initialValue);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [user, setUser] = useState(userDefine);

    // localStorage.setItem("user", JSON.stringify(initialValue.user));

    const login = () => {
        // set localStorage
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("user", JSON.stringify(userDefine));
        // cập nhật trạng thái đã đăng nhập trong useState
        setIsAuthenticated(true);
        setUser(userDefine);
        console.log("Logged in");
    };

    const logout = () => {
        // cập nhật trạng thái đã đăng xuất trong useState
        setIsAuthenticated(false);
        setUser(null);
        // xóa user khỏi localStorage
        localStorage.setItem("isAuthenticated", false);
        localStorage.removeItem("user");
    };


    useEffect(() => {
        // localStorage.setItem('user', JSON.stringify(user));
        const storedAuth = localStorage.getItem("isAuthenticated");        
        const storedUser = localStorage.getItem("user");
        setIsAuthenticated(JSON.parse(storedAuth));
        setUser(JSON.parse(storedUser));
    }, []);

    return(
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;