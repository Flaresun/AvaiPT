import React from 'react'
import { GrUserExpert } from "react-icons/gr";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GrCompliance } from "react-icons/gr";
import physical_therapist from "../assets/physical_therapy_tools.jpg"
import Image from 'next/image';

const Pros = () => {
  return (
    <div className='px-[3rem] bg-slate-100 py-5'>
        <div className="flex flex-col items-center text-center justify-center mt-20">

            <div className="flex flex-col-reverse  md:flex-row mt-5 text-xl ">
                <div className="flex border-4 rounded-md mt-10 md:mt-0">
                    <Image src={physical_therapist} alt="" />
                </div>
                <div className="flex flex-col md:ml-20 w-[100%] items-center text-center">
                    <div className="flex text-5xl mb-10">
                        Why Choose Us
                    </div>
                    <div className="flex flex-col items-center justify-between h-full">
                        <p className=""> 
                            At AVAI Physical Therapy, we are committed to delivering high-quality, patient-centered care with efficiency, professionalism, and compassion.
                        </p>
                        <p className="mt-5">Our team of experienced, state-licensed therapists brings advanced clinical knowledge directly to your home or facility, making therapy more accessible and convenient.
                        </p>
                        <p className="mt-5">Whether you need short-term post-operative care or ongoing rehabilitation support, AVAI PT is built to deliver results with a personal touch—while maintaining full regulatory compliance and strong communication every step of the way.</p>  
                        
                    </div>
                    
                </div>
                
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-10 mx-10">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex mt-5 md:mt-0">
                        < GrUserExpert size={50}/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xl font-semibold my-5">Expert Clinicians You Can Trust</p>
                        <p className="">
                            Our therapists are state-licensed and highly trained in advanced rehabilitation techniques, ensuring the highest standard of care.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex mt-5 md:mt-0">
                        < IoSpeedometerOutline size={50}/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xl font-semibold my-5">Fast, Flexible Scheduling</p>
                        <p className="">
                            We offer rapid onboarding, responsive communication, and PRN or ongoing contract options to meet your specific needs
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex mt-5 md:mt-0">
                        < GrCompliance size={50}/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xl font-semibold my-5">Regulatory Compliance & Professionalism</p>
                        <p className="">
                            HIPAA, Medicare and state regulations, AVAIPT is compliant and documentation ready, making us a reliable partner for both patients and healthcare agencies
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Pros