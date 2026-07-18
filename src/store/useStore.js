import { create } from "zustand";
import { getUserAPi, logOut } from "../../ALLapi";







export const useStrore =  create((set)=>({
    user_profile:null,

    loading:true,
    setUser:(user_profile)=> set({user_profile,loading:false}),
     fetchUser:async()=>{
        try{

            const res = await getUserAPi();
            set({user_profile:res?.data?.user,loading:false})

        }catch(err){
             set({user_profile:null, meg:err?.response?.data?.message,  loading:false})

        }
     
       
       
    },
    logout:async()=>{
      const res = await logOut();
      set({user_profile:null,loading:false})
       
      
     
     

},
   
}))


