import axios from "axios"
import { applyAxiosInstance, axiosInstance, jobaxiosInstance } from "./client"


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
    const response = await jobaxiosInstance.post("/create-job", data, {withCredentials: true});
    return response;
}





export const getJobs = async()=>{
    const response = await jobaxiosInstance.get("/get-jobs");
    return response;
}

export const Sort_Jobs = async()=>{
    const response = await jobaxiosInstance.get(`/sort-jobs?sort=salary`);
    return response;
}

export const getJobsInfo = async(id)=>{
    const response = await jobaxiosInstance.get(`/get-job/${id}`);
    return response;

}

export const logOut = async()=>{
    const response = await axiosInstance.post('/logout',{},{
        withCredentials: true
    });
    return response
}


export const getUserAPi = async()=>{
    const response = await axiosInstance.get('/userProfile',{
        withCredentials: true
    });
    return response
}


export const getApply = async(jobId)=>{
   

    const response = await applyAxiosInstance.post('/apply-job',{jobId:jobId},{
        withCredentials: true
    });
    return response
}

export const showApply = async()=>{

    const response = await applyAxiosInstance.get('/get-applications',{
        withCredentials: true
    });
    return response
    
}
        



