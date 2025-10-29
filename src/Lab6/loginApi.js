import axios from 'axios';

const loginInstance = axios.create({
    baseURL: "https://6900cccaff8d792314bb8cb6.mockapi.io/",
    headers: {
        "Content-Type": "application/json",
    },
});

export const getUserList = async () => {
    try {
        const response = await loginInstance.get("/users");
        return response.data;
    } catch(error){
        console.error("Error fetching users:", error);
        throw error;
    }       
}