import { useMutation, useQuery } from "@tanstack/react-query"
import { jobaxiosInstance } from "./client"
import Swal from "sweetalert2";
import { createJob, getJobs, getJobsInfo, showApply } from "./ALLapi";

export const useJobCreate = ()=>{
    return useMutation({
        mutationFn:async(data)=>{
           
            const response = await createJob(data);
            return response


        },
        onSuccess:(data)=>{
        console.log(data)
        Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
});
        },

    })
}


export const useGetjobsInfo = (id)=>{
    
    return useQuery({
        queryKey:["jobs-info",id],
        queryFn: async()=>{
            
           return  await getJobsInfo(id);
        },
        onSuccess:(data)=>{
            console.log(data,"Data fetched successfully");
        }
    })
}

export const useSHowApply = ()=>{
    return useQuery({
        queryKey:["jobs-apply-info"],
        queryFn: async()=>{
            return await showApply();
        }
    })
}

export const useGetJob = ()=>{
    return useQuery({
        queryKey:["jobs"],
        queryFn: async()=>{
           return  await getJobs();
        },
        onSuccess:(data)=>{
            console.log(data)
        }
    })
}


