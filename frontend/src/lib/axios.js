import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development"?"https://chat-app-backend-swje.onrender.com":"/api",
    withCredentials: true,
})