import { useMutation, useQuery } from "@tanstack/react-query"
import { jobaxiosInstance } from "./client"
import Swal from "sweetalert2";
import { getJobs } from "./ALLapi";

export const useJobCreate = ()=>{
    return useMutation({
        mutationFn:async(data)=>{
            console.log(data)
            const response = await jobaxiosInstance.post("/job", data);
            return response


        },
        onSuccess:(data)=>{
        console.log(data)
        Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
});
        },

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


