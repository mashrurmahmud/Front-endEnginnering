import React from 'react';
import Recentjobs from './Recent-jobs/Recentjobs';

const Home = () => {
    return (
        <div className='container mx-auto'>
           <h1 className='text-center text-black font-bold text-3xl'>Recent jobs</h1>
            <Recentjobs/>

           <div className="flex justify-center">
             <button className='bg-sky-600 w-[175px] h-auto cursor-pointer text-white p-3'>See ALL</button>
           </div>

            
        </div>
    );
};

export default Home;