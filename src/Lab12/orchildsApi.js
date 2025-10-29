import axios from "axios";  

const orchildsInstance = axios.create({
    baseURL: "https://6900cccaff8d792314bb8cb6.mockapi.io/",
    headers: {
        "Content-Type": "application/json",
    },
});

export const getOrchildsList = async () => {
    try {
        const response = await orchildsInstance.get("/orchilds");
        return response.data;
    } catch(error){
        console.error("Error fetching orchids:", error);
        throw error;
    }       
}

export const addNewOrchild = async (orchid) => {
    try {
        const response = await orchildsInstance.post("/orchilds", orchid);
        return response.data;
    } catch (error) {
        console.error("Error adding new orchid:", error);
        throw error;
    }
}

export const updateOrchild = async (id, updatedOrchid) => {
    try {
        console.log("update: ", id, updatedOrchid);
        const response = await orchildsInstance.put(`/orchilds/${id}`, updatedOrchid);
        return response.data;
    } catch (error) {
        console.error(`Error updating orchid with id: ${id}:`, error);
        throw error;
    }
}

export const deleteOrchild = async (id) => {
    try {
        console.log("remove: ", id);
        const response = await orchildsInstance.delete(`/orchilds/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting orchid with id: ${id}:`, error);
        throw error;
    }
}