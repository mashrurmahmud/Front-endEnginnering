

import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useGetjobsInfo } from '../../../hook';
import { useStrore } from '../../store/useStore';
import { getApply, getUserAPi } from '../../../ALLapi';
import Swal from 'sweetalert2';

const JobInfo = () => {
    const {id} = useParams();
    const {user_profile} = useStrore();
    const navigate = useNavigate()
    


    
    


    const {data} = useGetjobsInfo(id);
    
    const handleApply = async(id)=>{

       try{
          const res = await getApply(id);
          console.log(res?.data?.message)
          Swal.fire({
              position: "center",
              icon: "success",
              title: res?.data?.message,
              showConfirmButton: false,
              timer: 1500,
          });

       }catch(err){
          console.log(err?.message);

          Swal.fire({
              position: "center",
              icon: "success",
              title: err?.response?.data?.message,
              showConfirmButton: false,
              timer: 1500,
          });

       }

        

        




        

        
        
        if(user_profile === null){
            return navigate("/auth/login")   



    }

}
   
    

    

    
    
    return (
        <div className='container mx-auto'>
            <div className="banner-job-info">

            </div>
           <div className='flex'>
            <div className=' flex-1'>
             <h1 className='text-[50px] font-bold'>{data?.data?.jobhunter?.company}</h1>
             <img className='w-[600px] h-auto object-cover' src={data?.data?.jobhunter?.logo} alt="" />
             
              
           </div>
           <div>
               <h1 className='text-[50px] font-bold'>{data?.data?.jobhunter?.title}</h1>
              <h2 className='text-blue-600 font-bold text-2xl'>Description</h2>
              <p>{data?.data?.jobhunter?.description}</p>
              <p>Location: {data?.data?.jobhunter?.location}</p>
            <div>
                <h1>Requirements:</h1>
                <ul className='list-disc ml-5'>
                    {
                        data?.data?.jobhunter?.requirements.map((req)=> <li>{req}</li>)
                    }
                </ul>

                <h1>Responsibilties:</h1>
                  <ul className='list-disc ml-5'>
                    {
                        data?.data?.jobhunter?.requirements.map((req)=> <li>{req}</li>)
                    }
                </ul>
            </div>
            <div>
                <h1>Benifits:</h1>
                 <ul className='list-disc ml-5'>
                {
                     data?.data?.jobhunter?.responsibilities.map((req)=> <li>{req}</li>)
                }

                </ul>

                <h1 className='mt-5'>Expericene:<span className='text-red-500 ml-3'>{data?.data?.jobhunter?.experience}</span>
                 </h1>

                <h1>Salary:<span className='text-red-500 ml-3'>{data?.data?.jobhunter?.salary}</span></h1>

                <button onClick={()=>handleApply(data?.data?.jobhunter?._id)} className='bg-sky-500 text-white w-[200px] h-auto p-3 cursor-pointer'>Apply</button>  

            </div>
           </div>
           </div>
        </div>
    );
};

export default JobInfo;