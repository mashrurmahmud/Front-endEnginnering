import axios from "axios"
import { axiosInstance, jobaxiosInstance } from "./client"


export const registerUser = async(data)=>{
    console.log(data)
    const response = await axiosInstance.post("/register", data);
    return response;
}

export const loginUser = async(data)=>{
    const response = await  axiosInstance.post("/login", data);
    return response;
}


export const createJob = async(data)=>{
    const response = await jobaxiosInstance.post("/job", data);
    return response;
}





export const getJobs = async()=>{
    const response = await jobaxiosInstance.get("/get-jobs");
    return response;
}


export const getJobsInfo = async(id)=>{
    const response = await jobaxiosInstance.get(`/get-job/${id}`);
    return response;

}



