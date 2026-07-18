import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_AUTH,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true
});


export const jobaxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_JOB,
    headers: {
        "Content-Type": "application/json",
    },
})


export const applyAxiosInstance = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL_APPLY,
    headers:{
        "Content-Type": "application/json",
    },
    withCredentials: true
})