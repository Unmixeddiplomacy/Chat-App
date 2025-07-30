import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://chat-app-backend-swje.onrender.com/api",
    withCredentials: true,
})