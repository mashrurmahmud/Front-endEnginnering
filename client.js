import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_AUTH,
    headers: {
        "Content-Type": "application/json",
    },
});


export const jobaxiosInstance = axios.create({
    baseURL: "https://backend-github-engineering.vercel.app/job",
    headers: {
        "Content-Type": "application/json",
    },
})