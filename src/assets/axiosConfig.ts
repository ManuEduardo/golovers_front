import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/"


axios.interceptors.request.use(
    config => {
        const auth = JSON.parse(localStorage.getItem("auth"));
        const token = auth.token.jwTtoken
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);