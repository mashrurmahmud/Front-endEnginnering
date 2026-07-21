import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { set } from 'zod';

import { useJobCreate } from '../../../hook';
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';


const job = z.object({
  title: z
    .string({ error: "Title is required" })
    .nonempty({ error: "Title is required" })
    .min(3, { error: "Title must be at least 3 characters" })
    .max(20, { error: "Title must be at most 20 characters" }),

  company: z
    .string({ error: "Company is required" })
    .nonempty({ error: "Company is required" })
    .min(3, { error: "Company must be at least 3 characters" })
    .max(20, { error: "Company must be at most 20 characters" }),

  type: z
    .string({ error: "Type is required" })
    .nonempty({ error: "Type is required" })
    .min(3, { error: "Type must be at least 3 characters" })
    .max(20, { error: "Type must be at most 20 characters" }),

  location: z
    .string({ error: "Location is required" })
    .nonempty({ error: "Location is required" })
    .min(3, { error: "Location must be at least 3 characters" })
    .max(20, { error: "Location must be at most 20 characters" }),

  salary: z
    .string({ error: "Salary is required" })
    .nonempty({ error: "Salary is required" })
    .min(3, { error: "Salary must be at least 3 characters" })
    .max(20, { error: "Salary must be at most 20 characters" }),

  

  description: z
    .string({ error: "Description is required" })
    .nonempty({ error: "Description is required" })
    .min(3, { error: "Description must be at least 3 characters" }),

  experience: z
    .string({ error: "Experience is required" })
    .nonempty({ error: "Experience is required" })
    .min(3, { error: "Experience must be at least 3 characters" })
    .max(20, { error: "Experience must be at most 20 characters" }),
});
 




const CreateJob = () => {
    const {register,handleSubmit, formState:{errors}} = useForm({
       resolver: zodResolver(job)
    })

    const [imgUrl, setImagurl] = useState('')
    const[skillArray, setSkillArray] = useState([])
    const [skillSting, setSkillSting] = useState('');
    const [eexperience, setExperience] = useState('');
    const [experienceArray, setExperienceArray] = useState([]);
    const cretorJob = useJobCreate();






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

    const onsubmit  = async(data)=>{

        
        

        console.log(`data`,data)

       
        
        
       
       
        
       

        const response = await cretorJob.mutate(data);
        console.log(response)

        
    

       

    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Create Job
        </h1>

        <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">

          {/* Title & Company */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-medium">
                Job Title
              </label>

              <input
                type="text"
                {...register('title')}
                placeholder="Frontend Developer"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
               
              />
              {errors.title && <p className="text-red-500">{errors.title.message}</p>}
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Company
              </label>

              <input
                type="text"
                {...register('company')}
                placeholder="Google"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
               
              />
              {errors.company && <p className="text-red-500">{errors.company.message}</p>}
            </div>
          </div>

          {/* Location & Type */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-medium">
                Location
              </label>

              <input
                type="text"
                {...register('location')}
                placeholder="Dhaka, Bangladesh"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Job Type
              </label>

              <select
                {...register('type')}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                
              >
                <option value="">Select Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Internship">Internship</option>
              </select>
              {errors.type && <p className="text-red-500">{errors.type.message}</p>}
            </div>
          </div>

          {/* Salary & Experience */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-medium">
                Salary
              </label>

              <input
                type="text"
                {...register('salary')}
                placeholder="$1200/month"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Experience
              </label>

              <input
                type="text"
                {...register('experience')}
                placeholder="2 Years"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
               
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">
              Job Description
            </label>

            <textarea
              {...register('description')}
              rows="6"
              placeholder="Write the complete job description..."
              className="w-full border rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Create Job
          </button>

        </form>
      </div>
    </div>
    );
};

export default CreateJob;