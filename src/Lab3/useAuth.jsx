import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const useAuth = () => {
    const { isAuthenticated, login, logout } = useContext(AuthContext);

    const toggleLogin = () => {
        login();
    }

    const toggleLogout = () => {
        logout();
    }

    return { isAuthenticated, toggleLogin, toggleLogout };
}

export default useAuth;