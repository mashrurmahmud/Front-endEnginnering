import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { set } from 'zod';
import ProfileUpload from './CreateIconProfile';

const CreateJob = () => {
    const {register,handleSubmit, formState:{errors}} = useForm()

    const [imgUrl, setImagurl] = useState('')
    const[skillArray, setSkillArray] = useState([])
    const [skillSting, setSkillSting] = useState('');
    const [eexperience, setExperience] = useState('');
    const [experienceArray, setExperienceArray] = useState([]);




    const handleExperience = (e)=>{
        e.preventDefault()
        
        setExperienceArray((prev) => [...prev, eexperience]);
        setExperience('');
    }
    
     const handleSkill = (e)=>{
        e.preventDefault()
        
        setSkillArray((prev) => [...prev, skillSting]);
        setSkillSting('');
     }


    const imageUrl = async(e)=>{
        const img = e.target.files[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = ``;


    }

    const onsubmit  = (data,e)=>{
        

        console.log(`data`,data)

        const{skills, experience, ...rest} = data;
        
       
        setExperienceArray((prev) => [...prev, eexperience]);
        setExperience('');
        
        e.target.reset()

        
    

       

    }

    return (
         <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 my-10">
      <h2 className="text-3xl font-bold text-center mb-8">Add New Job</h2>

      <form
        onSubmit={handleSubmit(onsubmit)}
        className="grid md:grid-cols-2 gap-6"
      >
        {/* Job Title */}
        <div>
          <label className="block mb-2 font-medium">Job Title</label>
          <input
            type="text"
            name="title"
            {...register("title")}
            
            
            className="input input-bordered w-full"
            placeholder="Frontend Developer"
            required
          />
        </div>

        {/* Company */}
        <div>
          <label className="block mb-2 font-medium">Company</label>
          <input
            type="text"
            name="company"
            {...register("company")}
            
            className="input input-bordered w-full"
            placeholder="Google"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block mb-2 font-medium">Location</label>
          <input
            type="text"
            {...register("location")}
          
            className="input input-bordered w-full"
            placeholder="Dhaka"
            required
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="block mb-2 font-medium">Job Type</label>
          <select
            name="type"
            {...register("type")}
            
            className="select select-bordered w-full"
            required
          >
            <option value="">Select</option>
            <option value='ftime'>Full Time</option>
            <option value='ptime'>Part Time</option>
            <option value='remote'>Remote</option>
            <option value='hybrid'>Hybrid</option>
            <option value='intern'>Internship</option>
          </select>
        </div>

        {/* Salary */}
        <div>
          <label className="block mb-2 font-medium">Salary</label>
          <input
            type="text"
            {...register("salary")}
           
            className="input input-bordered w-full"
            placeholder="$1200/month"
            required
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block mb-2 font-medium">Experience</label>
          <input
            type="text"
            {...register("experience")}

             onChange={e=> setExperience(e.target.value)}
            
            className="input input-bordered w-full"
            placeholder="2 Years"
            required
          />
          <button onClick={handleExperience} className='w-[120px] text-white h-auto bg-black p-3'>ADD</button>
           {
              experienceArray.map((exp, index) => (
                <p className='text-black bg-red-400 my-2' key={index}>{exp}</p>
              ))
           }
        </div>

        {/* Logo */}
        <div className="md:col-span-2">
          <label className="block mb-2 font-medium">
            Company Logo URL
          </label>
          <input
            type="text"
            name="logo"
            {...register('logo')}
            
            className="input input-bordered w-full"
            placeholder="https://..."
            required
          />
        </div>

        {/* Skills */}
        <div className="md:col-span-2">
          <label className="block mb-2 font-medium">
            Skills (comma separated)
          </label>
          <input
            type="text"
            name="skills"
            {...register("skills")}
            
            className="input input-bordered w-full"
            placeholder="React, Node.js, MongoDB"
            required
            onChange={e => setSkillSting(e.target.value)}
          />
          <button onClick={handleSkill} className='w-[100px] h-auto bg-sky-600 cursor-pointer p-3'>ADD</button>
          {skillArray.map((skill, index) => (
            <p className='bg-red-500 text-white' key={index}>{skill}</p>
          ))}
        </div>

        {/* Benefits */}
        <div className="md:col-span-2">
          <label className="block mb-2 font-medium">
            Benefits (comma separated)
          </label>
          <input
            type="text"
            name="benefits"
            {...register("benefits")}
         
            className="input input-bordered w-full"
            placeholder="Health Insurance, Bonus, Remote Work"
            required
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block mb-2 font-medium">
            Job Description
          </label>
          <textarea
            rows="6"
            name="description"
           
            className="textarea textarea-bordered w-full"
            placeholder="Write job description..."
            required
          ></textarea>
        </div>
        <div>
            <ProfileUpload/>
        </div>

        <div className="md:col-span-2">
          <button className=" bg-black text-white px-3 py-2 cursor-pointer w-full">
            Post Job
          </button>
        </div>
      </form>
    </div>
    );
};

export default CreateJob;