import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({job}) => {
    const{title, location, type, salary,  logo,  
vacancies, company, _id} =job




    return (
        <div className="flex gap-3 my-2 shadow-lg p-3 rounded-lg shadow-sky-500 rounded-3">
           <div className='w-[20%]'>

            <img className="w-20 h-20 rounded-full border-red-400 border-2" src="https://i.ibb.co.com/wrrDsvsD/Chat-GPT-Image-Jul-17-2026-02-03-03-AM.png" alt="logo" />


           </div>
           <div className='w-[80%]'>
           <Link to={`/job/jobinfo/${_id}`}> <p className='font-bold text-[23px]'> {title}</p></Link>
            <div className='flex justify-between items-center'>
                 <button className='bg-sky-500 text-white py-2 px-4'>{type}</button>

                 <button className='bg-sky-500 text-white py-2 px-4'>Salary:{salary}</button>
            </div>

            </div>


            
            
        </div>
    );
};

export default Items;