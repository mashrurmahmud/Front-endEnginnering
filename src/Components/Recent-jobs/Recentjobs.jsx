import React from 'react';
import { useGetJob } from '../../../hook';
import Items from './Items';

const Recentjobs = () => {

    const {data} = useGetJob();
    
    
    
    return (
        <div className='container mx-auto '>
            {

               data?.data?.jobs.slice(0,6).map((job)=><Items key={job._id} job={job}/>)
                
            }
           
            
        </div>
    );
};

export default Recentjobs;