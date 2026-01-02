"use client";
import React from 'react'
import { TiLocationArrow } from "react-icons/ti";
import { useEffect } from 'react';

const Hero = () => {
    
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
        <div id="hero-cover" className="px-[3rem] py-20 max-w-full">
            <div className="flex lg:flex-row flex-col items-center justify-center">
                <div className="flex flex-col max-w-5xl items-center text-center ">
                    {/**Text Portion */}
                    <div className="flex flex-col w-full">
                        <p className="hide-class items-start font-medium text-3xl md:text-5xl xl:text-7xl text-green-900">
                            Where Skilled Therapy Meets Streamlined Delivery
                        </p>
                    </div>
                    
                    <div className="flex mt-5 md:text-3xl text-lg hide-class">
                        <p className="">Therapy training designed to get you fit, active, and ready to make a difference.</p>
                    </div>
                    {
                    false &&
                        (
                    <div className="flex md:flex-row flex-col pt-4 text-lg md:text-2xl pb-10 lg:pb-0 ">
                        <button className="hide-class cursor-pointer inline-flex items-center bg-sky-400 p-4 rounded-full md:mr-5 md:mb-0 mb-5 hover:bg-sky-300 active:scale-[.95]">
                        Learn More <TiLocationArrow className="ml-2 text-xl" />
                        </button>

                        <button className="hide-class cursor-pointer inline-flex items-center p-4 rounded-full md:mr-5 md:mb-0 mb-5 active:scale-[.95] hover:bg-slate-800 bg-slate-900 text-white">
                        <span className="">Get Started</span><TiLocationArrow className="ml-2 text-xl " />
                        </button>
                    </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default Hero