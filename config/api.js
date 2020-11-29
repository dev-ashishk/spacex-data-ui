import axios from "axios";

const axiosInstance = (config = {}, baseUrl = "") => {
    const instance = axios.create({
        baseURL: `${baseUrl}/api`,
        ...config
    });
    instance.interceptors.request.use((response) => response, (error) => {
        console.log("Logging Error", error);
    });
    return instance;
};

export default axiosInstance;
