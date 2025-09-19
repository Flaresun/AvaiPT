"use client";
import React, { FormEvent } from 'react'
import { useState } from 'react';
import Image from "next/image"
import logo from "../../../../public/logo.png";

import googleLogo from "../../assets/google_logo.png";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Login = () => {
  type AuthState = "Login"| "Signup";


  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [verifyPassword, setVerifyPassword] = useState<string>("");
  const [state, setState] = useState<AuthState>("Signup");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    if (state === "Signup") {
      if (!email || !password || !verifyPassword) {
        setErrorMsg("Must input email, password, and verify password");
        setLoading(false);
      }

      if (password !== verifyPassword) {
        setErrorMsg("Password & verifyPassword must match");
        setLoading(false);
      }

      // Sign user in 

    } else {
      if (!email || !password) {
        setErrorMsg("Must input email, password");
        setLoading(false);
      }

      // Try to log user in   
    }

    console.log(email,password,verifyPassword,state,loading);


  }


  return (
    <div className='px-[1rem] md:px-[3rem] bg-gray-50'>

      <div className="flex flex-col items-center justify-center  ">

        <div className="flex mt-20  flex-col shadow-xl/30 p-5 rounded-lg lg:min-w-xl">

          <div className="flex items-center justify-center">
            <Image className="cursor-pointer" onClick={() => router.push("/")} src={logo} alt="logo" width={100}/>
          </div>
          {state == "Signup" ? (
            <>
              <p className="text-3xl md:text-6xl mb-5 font-medium w-full items-center text-center">Create an account</p>
              <div className="flex items-center justify-center  ">
                <p className="">Already have an account?
                 <a className="cursor-pointer text-blue-600" onClick={()=> setState("Login")}> Login</a>
                </p>
              </div>
            </>

          ) : (
            <>
              <p className="text-6xl mb-5 font-medium w-full items-center text-center">Login </p>
              <div className="flex items-center justify-center">
                <p className="">Don&apos;t have an account?
                 <a className="cursor-pointer text-blue-600" onClick={()=> setState("Signup")}> Sign up</a>
                </p>
              </div>
            </>
          )}
          

          <form onSubmit={(e) => handleSubmit(e)} className='space-y-4 w-full my-10'>

            {/**EMAIL */}

            <div className="flex border border-slate-600 rounded-lg">
              <input placeholder="Email" id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required 
              className="w-full h-15 mt-1 px-3 py-2 rounded-sm focus:outline-none" />
            </div>

            {/**PASSWORD */}
            <div className="flex flex-row items-center justify-center border border-slate-600 rounded-lg">
              <input placeholder="Password" id="password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full h-15 mt-1 px-3 py-2 rounded-sm focus:outline-none" />
              {showPassword ? 
              <FaRegEye className='cursor-pointer mr-3' onClick={() => setShowPassword(prev => !prev)} size={30} />
              :
              <FaRegEyeSlash className='cursor-pointer mr-3' onClick={() => setShowPassword(prev => !prev)} size={30} />
              }
              
            </div>

            {/**Verify Password */}
            {state == "Signup" && (
            <>
              <div className="flex items-center justify-center border border-slate-600 rounded-lg">
                <input placeholder="Verify Password" id="password" type={showVerifyPassword ? "text" : "password"} value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)} required className="w-full h-15 mt-1 px-3 py-2 rounded-sm  focus:outline-none" />
                {showVerifyPassword ? 
                <FaRegEye className='cursor-pointer mr-3' onClick={() => setShowVerifyPassword(prev => !prev)} size={30} />
                :
                <FaRegEyeSlash className='cursor-pointer mr-3' onClick={() => setShowVerifyPassword(prev => !prev)} size={30} />
                }
              </div>

              {/**TERMS AND CONDITIONS */}
              <div className="flex">
                <input id="terms" type="checkbox" value="" title='terms' required className='cursor-pointer w-5 mr-5' />
                <label htmlFor="vehicle1">I agree to the
                   <a className='text-blue-600' href="../privacy" target='_blank' rel="noopener noreferrer"> Terms and Conditions</a>
                </label>
              </div>
            </>
            )}
            {/**ERROS */}
            <div className="flex items-center justify-center text-center">
              <p className="text-red-500 text-shadow-red-500">{errorMsg}</p>
            </div>

            <button type="submit" disabled={loading} className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors disabled:opacity-50">
              {state === "Signup" 
              ? (loading ? "Signing up..." : "Signup")
              : (loading ? "Logging in..." : "Login")
              }
              
            </button>

          </form>


          <div className="flex mb-10 items-center justify-center">
            {state === "Signup" 
            ? <p className="">Or sign up with</p>
            : <p className="">Or login with</p>
            }
            
          </div>

          <div className="flex flex-row items-center justify-center">
            
            <div className="flex flex-row items-center border p-4 w-3/4 justify-center text-center rounded-md cursor-pointer">
              <Image src={googleLogo} width={30} alt="googleLogo" className='mr-3'/>
              <p className="text-lg font-medium">Google</p>
            </div>
            
          </div>



      </div>
      </div>

    </div>
  )
}

export default Login