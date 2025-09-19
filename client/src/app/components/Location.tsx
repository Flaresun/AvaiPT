"use client";
import React from "react"
import map from "../assets/map.png"
import Image from "next/image"
import { useEffect } from "react"
const Location = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("show-class");

        })
    });
    const hiddenElements = document.querySelectorAll(".hide-class")
    hiddenElements.forEach((element) => observer.observe(element));
  },[])
  return (
    <div className="px-[2rem] md:px-[3rem] bg-gradient-to-b from-[#cac9d3] to-[#ffffff] pt-1 pb-5 mx-auto">
      <div className="flex flex-col mt-20 ">

        <div className="hide-class flex items-center text-center justify-center mb-10">
          <p className="text-5xl">Active Locations</p>
        </div>

        <div className=" flex flex-col xl:flex-row justify-around items-center mx-auto ">

          <div className="flex flex-col w-full xl:w-[150%]">
            <div className="hide-class flex items-center justify-center">
              <Image src={map} alt="" />
            </div>
            
          </div>

          <div className="flex flex-col items-center gap-20 md:ml-10 hide-class max-w-4xl mx-auto ">

            <div className="flex flex-col mb-5">
              <h1 className="text-2xl">Serving Communities Across Ohio</h1>
              <p className="text-lg font-light">At AVAI PT, we are proud to actively serve a growing list of counties throughout Ohio, including Cuyahoga, Franklin, Hamilton, Summit, Montgomery, and more. To these communities we do our utmost to bring healing to their home.</p>
            </div>

            <div className="flex flex-col mb-5">
              <h1 className="text-2xl">Our Mission in Every County We Serve</h1>
              <p className="text-lg font-light">Our mission is simple but powerful: to restore independence and improve quality of life, one home at a time. Whether patients are recovering from surgery, managing chronic conditions, or working to regain strength and balance, our therapists deliver expert care with compassion and clinical excellence. By meeting patients where they are, we remove barriers to recovery and help them thrive in their own environments.</p>
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl">Why Clients Trust AVAI PT</h1>
              <p className="text-lg font-light">We know inviting someone into your home for care is a big decision. That is why AVAI PT is built on transparency, professionalism, and personal connection. Our licensed therapists are not only clinically skilled but also empathetic, respectful, and committed to your well-being. With strict adherence to HIPAA, Medicare, and Ohio regulations, you can feel confident knowing your care is safe, compliant, and personalized.</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Location