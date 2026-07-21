import React, { useEffect, useState } from 'react';
import {  Sort_Jobs } from '../../../ALLapi';
import Items from '../Recent-jobs/Items';
import { set } from 'zod';
import { axiosInstance, jobaxiosInstance } from '../../../client';

const JobShort = () => {

    const [jobShort, setJobShort] = useState([]);
    const [sort, setSort] = useState('salaryHigh');
    const [salary, setSalary] = useState('');
    



    useEffect(() => {

        jobaxiosInstance.get('/sort-job?sort=salaryHigh').then(res => setJobShort(res.data)).catch(err => console.log(err));
        
    }, [ sort]);

   console.log(jobShort)

    
    const handleSort = async(e)=>{

        console.log('this is salary')
       setSort(e);

        if(e ==='salaryLow'){
           jobaxiosInstance.get('/sort-job?sort=salaryLow').then(res => setJobShort(res.data)).catch(err => console.log(err));
        }else if(e === 'salaryHigh'){
            jobaxiosInstance.get('/sort-job?sort=salaryHigh').then(res => setJobShort(res.data)).catch(err => console.log(err));
        }
        
        
        


        
    }
     
    


     
   

    
    return (
        <div>

        <select
        value={sort}

        onChange={(e)=> handleSort(e.target.value)}
         
        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        
        <option value="salaryHigh">Salary: High to Low</option>
        <option value="salaryLow">Salary: Low to High</option>
      
      </select>
            {
                jobShort?.jobs?.map(job => <Items key={job._id} job={job}></Items>)
            }
            
        </div>
    );
};

export default JobShort;