
import React, { useState } from "react";
import { useForm,  } from "react-hook-form";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserTag,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerUser } from "../../ALLapi";
import Swal from "sweetalert2";


const user = z.object({
    name:z.string().nonempty({error:"Name is required"}),
    email:z.string().email({error:"Invalid email"}).nonempty({error:"Email is required"}),
    password:z.string().nonempty({error:"Password is required"}).min(6,{error:"Password must be at least 6 characters"}),
    terms:z.boolean({error:"You must agree to the terms and conditions"}).default(false),
    username:z.string().nonempty({error:"Username is required"}),
})

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {register, handleSubmit, watch, formState:{errors}, } = useForm({
    resolver:zodResolver(user)

  });


  

  const agree = watch("terms",false);







 
  const onSubmit = async(data) => {

    



   



    const {terms, ...rest} = data;

   try{

    const response = await registerUser(rest);
    console.log(response)
    if(response){

        Swal.fire({
            icon: "success",
            title: "Success",
            text: response?.data?.message,
            footer: "<a href=\"#\">Why do I have this issue?</a>"
        });


    }

   }catch(error){
     console.log(error)
        

        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
        footer: "<a href=\"#\">Why do I have this issue?</a>"
});



    
   }
    
    


   
    

   

    

    

   

    // axios.post("/register", user)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-indigo-100 p-5">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-6xl w-full grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-10">

          <h1 className="text-5xl font-bold mb-6">
            Join JobPortal
          </h1>

          <p className="text-lg text-center leading-8 opacity-90">
            Create your free account and discover thousands of job
            opportunities from top companies around the world.
          </p>

         

        </div>

        {/* Right Side */}

        <div className="p-10">

          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Create Account
          </h2>

          <p className="text-gray-500 mb-8">
            Fill in your information below.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >

            {/* Name */}

            <div>

              <label className="font-medium mb-2 block">
                Full Name
              </label>

              <div className="relative">

                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  {...register("name")}
                  placeholder="John Doe"
                  className="w-full border rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 outline-none"
                 
                />
                {errors?.name && <p className="text-red-500">{errors.name.message}</p>}

              </div>

            </div>

            {/* Username */}

            <div>

              <label className="font-medium mb-2 block">
                Username
              </label>

              <div className="relative">

                <FaUserTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  {...register("username")}
                  placeholder="john123"
                  className="w-full border rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 outline-none"
                
                />
                {errors?.username && <p className="text-red-500">{errors.username.message}</p>}

              </div>

            </div>

            {/* Email */}

            <div>

              <label className="font-medium mb-2 block">
                Email
              </label>

              <div className="relative">

                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  {...register("email")}
                  placeholder="example@gmail.com"
                  className="w-full border rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 outline-none"
                
                />
                {errors?.email && <p className="text-red-500">{errors.email.message}</p>}

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="font-medium mb-2 block">
                Password
              </label>

              <div className="relative">

                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="********"
                  className="w-full border rounded-lg py-3 pl-12 pr-12 focus:ring-2 focus:ring-blue-500 outline-none"
                  
                />
                {errors?.password && <p className="text-red-500">{errors.password.message}</p>}

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

            </div>

            {/* Terms */}

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                {...register("terms", { required: true })}
                
            
                className="checkbox checkbox-primary"
              />
              I agree to the Terms & Conditions.
            </label>

            {/* Button */}

            <button diabled={!agree} className={agree? "bg-blue-500 text-white w-full p-3 cursor-pointer" : "bg-gray-600 text-white w-full p-3 cursor-not-allowed"}>
              Create Account
            </button>

          </form>

          <p className="text-center mt-8 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Register;