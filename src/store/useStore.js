import { create } from "zustand";







export const useStrore =  create((set)=>({
    user_profile:null,
    loading:true,
    setUser:(user_profile)=> set({user_profile,loading:false}),
    logout:()=>set({user:null,loading:true})
}))


