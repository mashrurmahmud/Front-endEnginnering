import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { set } from 'zod';

const CreateJob = () => {
    const {register,handleSubmit, formState:{errors}} = useForm()

    const [imgUrl, setImagurl] = useState('')
    const[skillArray, setSkillArray] = useState([])
    const [skillSting, setSkillSting] = useState('');
    const [experience, setExperience] = useState('');
    const [experienceArray, setExperienceArray] = useState([]);


    



    const imageUrl = async(e)=>{
        const img = e.target.files[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = ``;


    }

    const onsubmit  = (data)=>{
        console.log(`data`,data)

        const{skills, experience, ...rest} = data;
        setSkillSting(skills);
        setSkillArray((prev) => [...prev, skills]);
        setExperience(experience);
        setExperienceArray((prev) => [...prev, experience]);

        
    

       

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
            
            className="input input-bordered w-full"
            placeholder="2 Years"
            required
          />
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
          />
          <button className='w-[200px] h-auto bg-sky-600 cursor-pointer p-3'>ADD</button>
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
            value={''}
            className="textarea textarea-bordered w-full"
            placeholder="Write job description..."
            required
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <button className="btn btn-primary w-full">
            Post Job
          </button>
        </div>
      </form>
    </div>
    );
};

export default CreateJob;