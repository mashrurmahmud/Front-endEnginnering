import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from '@hookform/resolvers/zod';
import *  as z from 'zod'
import { loginUser } from "../../ALLapi";
import Swal from "sweetalert2";
import { useStrore } from "../store/useStore";





const user = z.object({
    email:z.string().email({error:"Invalid email"}).nonempty({error:"Email is required"}),
    password:z.string().nonempty({error:"Password is required"}).min(6,{error:"Password must be at least 6 characters"}),
})

const Login = () => {

  const {setUser, fetchUser} = useStrore();

  useEffect(()=>{
    fetchUser()
  },[fetchUser])
   
  
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(user)

    });
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async(data)=>{

    try{
        const res = await  loginUser(data);
        Swal.fire({
        position: "center",
        icon: "success",
        title: res?.data?.message,
        showConfirmButton: false,
        timer: 1500,
        
});
       console.log(res?.data?.user)
       setUser(res?.data?.user)

   navigate('/')

    }catch(error){
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.response?.data?.message,
        footer: "<a href=\"#\">Why do I have this issue?</a>"
        });
    }
    
    await fetchUser(); 
     
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-indigo-100 p-5">

      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-10">

          <h1 className="text-5xl font-bold mb-5">
            Welcome Back!
          </h1>

          <p className="text-center text-lg opacity-90 leading-8">
            Log in to manage your profile, apply for jobs, and connect with top companies.
          </p>

         
        </div>

        {/* Right Side */}
        <div className="p-10">

          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Login
          </h2>

          <p className="text-gray-500 mb-8">
            Sign in to your account
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >

            {/* Email */}

            <div>

              <label className="font-medium mb-2 block">
                Email
              </label>

              <div className="relative">

                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  {...register('email')}
                  placeholder="Enter your email"
                  required
                  className="w-full border rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

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
                  name="password"
                  {...register('password')}
                  placeholder="Enter your password"
                  required
                  className="w-full border rounded-lg py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

            </div>

            {/* Remember */}

            <div className="flex justify-between items-center">

              <label className="flex items-center gap-2 cursor-pointer">

                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                />

                <span>Remember me</span>

              </label>

              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            {/* Login Button */}

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
              Login
            </button>

          </form>

          {/* Divider */}

          <div className="divider my-8">OR</div>

          {/* Google */}

          <button className="btn w-full bg-white border hover:bg-gray-50 text-black">
            Continue with Google
          </button>

          {/* Register */}

          <p className="text-center mt-8 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Create Account
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;