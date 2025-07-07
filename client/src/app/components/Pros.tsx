"use client";
import React from 'react'
import Carousel from './Carousel';
import our_mission from "../assets/our_mission.jpg"
import calendar from "../assets/calendar.jpg"
import compliance from "../assets/compliance.jpg"
import on_demand_care from "../assets/on_demand_care.jpg"
import experienced_staff from "../assets/experienced_staff.jpg"
import { useEffect } from 'react';


import { StaticImageData } from 'next/image';
interface Features {
    title: string,
    desc: string,
    img:StaticImageData
}

const Pros = () => {
    
    const items: Features[] = [
        {title:"Our Mission", desc:"At AVAIPT, we are committed to delivering high-quality, patient-centered care with efficiency, professionalism, and compassion.", img:our_mission},
        {title:"Experienced Therapist", desc:"Our team of experienced, state-licensed therapists brings advanced clinical knowledge directly to your home.",img:experienced_staff},
        {title:"On Demand Care", desc:"Whether you need short-term post-operative care or ongoing rehabilitation support, AVAI PT is built to deliver results.",img:on_demand_care},
        {title:"Regulatory Compliance", desc:"HIPAA, Medicare and state regulations, AVAIPT is compliant and documentation ready, making us a reliable partner for both patients and healthcare agencies.",img:compliance},
        {title:"Fast Flexible Scheduling", desc:"We offer rapid onboarding, responsive communication, and PRN or ongoing contract options to meet your specific needs.",img:calendar},
    ]
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
        <div className='px-[1rem] md:px-[3rem] py-5 bg-gradient-to-b from-[#cac9d3] to-[#ffffff] w-full '>

            <div className="flex flex-col text-3xl">
                <div className="flex hide-class">
                    <p className="">Features</p>
                </div>
                <div className="flex mt-5 font-medium text-5xl xl:text-7xl hide-class">
                    <h1 className="">Get the Motion you Deserve</h1>
                </div>

                <div className="flex hide-class">
                    <Carousel items={items} />
                </div>
            </div>
            
        </div>
    )
}

export default Pros