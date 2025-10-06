import { useContext } from "react";
import AuthContext from "./AuthProvider";

const useAuth = () => {
    const { isAuthenticated, login, logout , user } = useContext(AuthContext);

    const toggleLogin = () => {
        login();
    }

    const toggleLogout = () => {
        logout();
    }

    return { isAuthenticated, toggleLogin, toggleLogout , user };
}

export default useAuth;