import React from 'react';
import {  useSHowApply } from '../../../hook';
import { useStrore } from '../../store/useStore';
import Items from '../Recent-jobs/Items';

const Job = () => {

   const {user_profile} = useStrore();
    
    const {data} = useSHowApply();
    

    
   
    return (
        <div>

            {
                data?.data?.applications?.map((jobdata)=>{
                    if(jobdata?.userId?.email === user_profile?.email){
                       
                        const job = jobdata?.jobId
                        return <Items key={job._id} job={job}></Items>

                    }
                })
            }

           
            
            
        </div>
    );
};

export default Job;