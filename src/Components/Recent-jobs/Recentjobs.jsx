import React from 'react';
import { useGetJob } from '../../../hook';

const Recentjobs = () => {

    const {data:Jobs} = useGetJob();
    console.log(Jobs)
    
    
    return (
        <div>
            {
                Jobs?.map(job=>(<div key={job._id}>{job.title}</div>))
            }
            
        </div>
    );
};

export default Recentjobs;