"use client";
import React from 'react'
import Image from "next/image";
import logo from "../../../public/light_logo.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);
    const [aboutMenu, setAboutMenu] = useState<boolean>(false);
    const [servicesMenu,setServicesMenu] = useState<boolean>(false);
    const toggleMenu = (e:Event, setter:React.Dispatch<React.SetStateAction<boolean>>) => {
        e.preventDefault()
        setAboutMenu(false);
        setServicesMenu(false);
        setter(true)

    }
    
  return (
    <div onMouseLeave={() => {
        setAboutMenu(false);
        setServicesMenu(false);
    }} className="px-[3rem] sticky top-0 bg-white">
        <div className="flex flex-row items-center justify-between text-center text-xl lg:text-2xl font-medium  ">
            <div className="flex ">
                <Image src={logo} alt="Logo" width={150}/>
            </div>

            <div className="hidden xl:flex flex-row justify-between text-center gap-10 ">
                        <div className="cursor-pointer flex  items-center justify-center px-4 p-1 gap-1">
                            <a href="" className="">Home</a>
                        </div>
                        <div onMouseOver={(e) => toggleMenu(e,setAboutMenu)} className={`${aboutMenu && "[&_span]:rotate-180"} cursor-pointer flex items-center justify-center px-4 p-1 gap-1 hover:[&_span]:rotate-180 relative`}>
                            <a href="" className="">About</a>
                            <span className='transition delay-150 duration-300 ease-in-out'><IoIosArrowDown /></span>
                            {aboutMenu && (
                                 <div className="cursor-pointer absolute top-[100%] right-0 flex flex-col bg-white shadow-lg px-6 py-4  items-center rounded-md text-nowrap">
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 gap-1 rounded-md">
                                        <a href="" className="">Mission</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 gap-1 rounded-md">
                                        <a href="" className="">Partners</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 rounded-md">
                                        <a href="" className="">Testimonials</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 rounded-md">
                                        <a href="" className="">Privacy Policy</a>
                                    </div>
                                </div>
                            )}
                            
                        </div>

                        <div onMouseOver={(e) => toggleMenu(e, setServicesMenu)} className={`${servicesMenu && "[&_span]:rotate-180"} relative cursor-pointer flex items-center justify-center px-4 py-1 gap-1 hover:[&_span]:rotate-180`}>
                            <a href="">Services</a>
                            <span className="transition delay-150 duration-300 ease-in-out">
                                <IoIosArrowDown />
                            </span>
                            {servicesMenu && (
                                <div className="cursor-pointer absolute top-[100%] right-[-40] flex flex-col bg-white shadow-lg px-6 py-4 items-center rounded-md text-nowrap ">
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 gap-1 rounded-md">
                                        <a href="" className="">In-Home Physical Therapy Evaluations</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 gap-1 rounded-md">
                                        <a href="" className="">Follow-up and Post-Operative Rehab</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 rounded-md">
                                        <a href="" className="">Neuromuscular Re-education & Balance Training</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 rounded-md">
                                        <a href="" className="">Telehealth Therapy Options</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 rounded-md">
                                        <a href="" className="">Discharge Planning & Care Coordination</a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="cursor-pointer flex items-center justify-center px-4 p-1">
                            <a href="" className="">Contact</a>
                        </div>
                        <div className="cursor-pointer flex items-center justify-center px-4 p-1">
                            <a href="" className="">Locations</a>
                        </div>
            </div>

            <div className="hidden xl:flex">
                <button className="cursor-pointer px-5 hover:text-sky-600 active:scale-[.95]">Login</button>
                <button className="cursor-pointer border-4 rounded-full p-3 active:scale-[.95]">Get Started</button>

            </div>
            
            {/** Hamburger Icon showing on lg and below screens */}
            <div className="flex xl:hidden relative">

                <button onClick={() => setHamburgerMenu((prev) => !prev)} className="cursor-pointer"><RxHamburgerMenu size={50} /></button>
                {hamburgerMenu && (
                    <div className="cursor-pointer absolute top-[100%] right-[-80%] flex flex-col bg-sky-300 items-center rounded-md ">
                        <div className="flex  items-center justify-center px-4 p-1 gap-1">
                            <a href="" className="">Home</a>
                        </div>
                        <div onMouseOver={(e) => toggleMenu(e, setAboutMenu)} className="relative flex hover:bg-sky-600 w-full items-center justify-center px-4 p-1 gap-1 hover:[&_span]:rotate-180">
                            <a href="" className="">About</a>
                            <span className='transition delay-150 duration-300 ease-in-out'><IoIosArrowDown /></span>
                            {aboutMenu && (
                                 <div className="z-2 cursor-pointer absolute top-[100%] right-0 flex flex-col bg-white shadow-lg px-6 py-4  items-center rounded-md text-nowrap">
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 gap-1 rounded-md">
                                        <a href="" className="">Mission</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 gap-1 rounded-md">
                                        <a href="" className="">Partners</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 rounded-md">
                                        <a href="" className="">Testimonials</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 rounded-md">
                                        <a href="" className="">Privacy Policy</a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div onMouseOver={(e) => toggleMenu(e, setServicesMenu)} className="relative flex hover:bg-sky-600 w-full items-center justify-center px-4 p-1 hover:[&_span]:rotate-180">
                            <a href="" className="">Services</a>
                            <span className='transition delay-150 duration-300 ease-in-out'><IoIosArrowDown /></span>
                            {servicesMenu && (
                                 <div className="z-2 cursor-pointer absolute top-[100%] right-0 flex flex-col bg-white shadow-lg px-6 py-4  items-center rounded-md text-nowrap">
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 gap-1 rounded-md">
                                        <a href="" className="">Mission</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 gap-1 rounded-md">
                                        <a href="" className="">Partners</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 rounded-md">
                                        <a href="" className="">Testimonials</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 rounded-md">
                                        <a href="" className="">Privacy Policy</a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex hover:bg-sky-600 w-full items-center justify-center px-4 p-1">
                            <a href="" className="">Contact</a>
                        </div>
                        <div className="flex hover:bg-sky-600 w-full items-center justify-center px-4 p-1">
                            <a href="" className="">Locations</a>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    </div>
  )
}

export default Navbar