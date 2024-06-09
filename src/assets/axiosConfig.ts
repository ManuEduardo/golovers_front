import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";

const endpointsSinToken = [
    "/login",
    "/register",
];

axios.interceptors.request.use(
    config => {
        const necesitaToken = !endpointsSinToken.some(endpoint => config.url.includes(endpoint));

        if (necesitaToken) {
            const auth = JSON.parse(localStorage.getItem("auth"));
            if (auth && auth.token && auth.token.jwTtoken) {
                const token = auth.token.jwTtoken;
                config.headers['Authorization'] = `Bearer ${token}`;
            }
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
