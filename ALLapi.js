import axios from "axios"
import { axiosInstance } from "./client"


export const registerUser = async(data)=>{
    const response = await axiosInstance.post("/register", data);
    return response;
}

export const loginUser = async(data)=>{
    const response = axiosInstance.post("/login", data);
    return response;
}