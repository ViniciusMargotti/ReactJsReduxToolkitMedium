import axios from "axios";

let api = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    responseType: "json",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + process.env.REACT_APP_TOKEN_API
    }
});

export default api;
