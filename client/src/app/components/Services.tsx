"use client";
import React from 'react'
import Image from 'next/image';
import athome from "../assets/athome_pt.jpg"
import balance from "../assets/balance_pt.jpg"
import followUp from "../assets/followup_pt.jpg"
import freept from "../assets/free_pt.jpg"
import telehealth from "../assets/telehealth_pt.jpg"
import {useRouter} from "next/navigation";
import discharge from "../assets/discharge_pt.jpg"
import { useEffect } from 'react';
const Services = () => {

    // Need image title, description, link for more 
    const router = useRouter();
    const services = [
        {
            image: athome,
            title: "In-Home Physical Therapy Evaluations",
            desc: "Comprehensive assessments conducted in the comfort of your home to create personalized therapy plans tailored to your needs.",
            link: "/pte"
        },
        {
            image: followUp,
            title: "Follow-up and Post-Operative Rehab",
            desc: "Focused rehabilitation sessions that support recovery after surgery and ensure optimal outcomes through consistent follow-ups.",
            link: "/pte"
        },
        {
            image: balance,
            title: "Neuromuscular Re-education & Balance Training",
            desc: "Specialized therapies designed to improve coordination, strength, and balance—reducing the risk of falls and enhancing mobility.",
            link: "/pte"
        },
        {
            image: telehealth,
            title: "Telehealth Therapy Options",
            desc: "Secure, remote physical therapy sessions that bring professional guidance to your screen—ideal for convenience and flexibility.",
            link: "/pte"
        },
        {
            image: discharge,
            title: "Discharge Planning & Care Coordination",
            desc: "Collaborative planning to ensure smooth transitions from therapy to independent living, with coordinated care across providers.",
            link: "/pte"
        },
        {
            image: freept,
            title: "Strength Training & Functional Conditioning",
            desc: "We design customized strength-building programs to enhance stability, endurance, and functional performance.",
            link: "/pte"
        }
    ];
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (!entry.isIntersecting) return;
                entry.target.classList.add("show-class");

            })
        });
        const hiddenElements = document.querySelectorAll(".hide-class")
        hiddenElements.forEach((element) => observer.observe(element));
    },[])

  return (
    <div className='px-[3rem] pb-5 bg-gradient-to-b from-[#fffffff] to-[#cac9d3]'>
        <div className="flex flex-col mt-10 md:mt-30 items-center text-center text-4xl">

            <div className="flex text-5xl my-5 hide-class">    
                Our Services
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((value, index) => (

                    <div key={index} className="services-class hide-class flex flex-col p-4 rounded-4xl shadow-md bg-white">
                        <div className=" bg-gray-100 mb-4 flex items-center justify-center">
                            <Image src={value.image} alt="" className='inline' draggable="false" />
                        </div>

                        <div className="flex flex-col ">
                            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                            <p className="text-xl text-gray-600 mb-4">{value.desc}</p>
                        </div>
                        <div className="flex items-center justify-center text-xl ">
                            <button onClick={() => router.push(value.link)}
                                className="w-max cursor-pointer px-4 py-2 bg-sky-300 rounded-full  active:scale-[.95]">
                                Explore
                            </button>
                        </div>
                        

                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Services