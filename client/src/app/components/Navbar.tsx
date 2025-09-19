"use client";
import React, { useRef } from 'react'
import Image from "next/image";
import logo from "../../../public/logo.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState,useEffect} from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);
    const [aboutMenu, setAboutMenu] = useState<boolean>(false);
    const [servicesMenu,setServicesMenu] = useState<boolean>(false);
    const [toggleNav, setToggleNav] = useState<number>(0);
    const [windowScroll,setWindowScroll] = useState<number>(0);
    const router = useRouter();
    const lastScrollTop = useRef<number>(0);

    const closeAllMenus = () => {
        setAboutMenu(false);
        setServicesMenu(false);
        setHamburgerMenu(false);
    }

    const toggleMenu = (e:React.MouseEvent, setter:React.Dispatch<React.SetStateAction<boolean>>, type:string) => {
        e.preventDefault();
        if (type == "about") {
            setServicesMenu(false);
        } else {
            // type == "service"
            setAboutMenu(false);
        }
        setter((prev) => !prev);
        
        
    }
    const openMenu = (e:React.MouseEvent, setter:React.Dispatch<React.SetStateAction<boolean>>) => {
        e.preventDefault();
        closeAllMenus();
        setter(true);
    }

    useEffect(() => {
        lastScrollTop.current = window.pageYOffset || document.documentElement.scrollTop;
        const scrollChange = () => {
            closeAllMenus();
            
            const st = window.pageYOffset || document.documentElement.scrollTop;
            setWindowScroll(window.scrollY);
            if (st > lastScrollTop.current) {
                // Down scroll
                setToggleNav(70);
            } 
            else if (st < lastScrollTop.current) {
                // Up scroll 
                setToggleNav(0);
            }
            lastScrollTop.current = st <=0 ? 0 : st; 
        }
        window.addEventListener("scroll",scrollChange);
    },[])
    
  return (
    <header onMouseLeave={() => {
        closeAllMenus();
    }} className={`mt-[1rem] mx-auto max-w-[22rem] md:max-w-[76rem] w-full fixed left-0 right-0 top-0 transition-all duration-300 ease-spring z-[12]  ${windowScroll != 0 ? "rounded-3xl ring-1 ring-black/5 bg-white/76 backdrop-blur-lg shadow-lg" : ""}`} style={{transform: `translateY(-${toggleNav}px)`}}>
        <nav className="flex flex-row items-center justify-between text-center text-lg font-medium">
            
            <div onMouseOver={()=>closeAllMenus()} onClick={() => router.push("/")} className="cursor-pointer flex items-center justify-center pl-4 ">
                <Image src={logo} alt="Logo" width={50}/>
                <h1 className="ml-2">AVAIPT</h1>
            </div>

            <div className="hidden lg:flex flex-row justify-between text-center gap-10 ">
                <div onMouseOver={(e) => openMenu(e,setAboutMenu)} className={`${aboutMenu && "[&_span]:rotate-180"} cursor-pointer flex items-center justify-center gap-1 hover:[&_span]:rotate-180 relative`}>
                    <a href="#" className="">About</a>
                    <span className='transition delay-75 duration-300 ease-in-out'><IoIosArrowDown /></span>
                    {aboutMenu && (
                        <div className="cursor-pointer absolute top-[100%] right-[-40] flex flex-col bg-white shadow-lg px-6 py-4  items-center rounded-md text-nowrap">
                            <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 gap-1 rounded-md">
                                <a href="#" className="">Partners</a>
                            </div>
                            <div onClick={() => router.push("/privacy")} className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 rounded-md">
                                <a className="">Privacy Policy</a>
                            </div>
                        </div>
                    )}
                    
                </div>

                <div onMouseOver={(e) => openMenu(e, setServicesMenu)} className={`${servicesMenu && "[&_span]:rotate-180"} relative cursor-pointer flex items-center justify-center gap-1 ${servicesMenu ? "hover:[&_span]:rotate-180" : ""}`}>
                    <a href="#">Services</a>
                    <span className="transition delay-75 duration-300 ease-in-out">
                        <IoIosArrowDown />
                    </span>
                    {servicesMenu && (
                        <div className="cursor-pointer absolute top-[100%] right-[-40] flex flex-col bg-white shadow-lg px-6 py-4 items-center rounded-md text-nowrap ">
                            <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 gap-1 rounded-    ">
                                <a href="/servicesInHome" className="">In-Home Physical Therapy Evaluations</a>
                            </div>
                            <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 gap-1 rounded-md">
                                <a href="/servicesFollowUp" className="">Follow-up and Post-Operative Rehab</a>
                            </div>
                            <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 rounded-md">
                                <a href="/servicesNeuromuscular" className="">Neuromuscular Re-education & Balance Training</a>
                            </div>
                            <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 rounded-md">
                                <a href="/servicesTelehealth" className="">Telehealth Therapy Options</a>
                            </div>
                            <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 rounded-md">
                                <a href="/servicesDischarge" className="">Discharge Planning & Care Coordination</a>
                            </div>
                            <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 rounded-md">
                                <a href="/servicesStrength" className="">Strength Training & Functional Conditioning</a>
                            </div>
                            
                        </div>
                    )}
                </div>

                <div  onMouseOver={()=>closeAllMenus()} onClick={() => router.push("/contact")} className="cursor-pointer flex items-center justify-center">
                    <a className="">Contact</a>
                </div>
            </div>

            <div className="hidden lg:flex">
                <button onClick={() => router.push("/login") } className="cursor-pointer px-5 hover:text-sky-600 active:scale-[.95]">Get Started</button>
            </div>
            
            {/** Hamburger Icon showing on lg and below screens */}
            <div className="flex lg:hidden relative">

                <button title='button-3' onClick={() => setHamburgerMenu((prev) => !prev)} className="cursor-pointer pr-2"><RxHamburgerMenu size={50} /></button>
                {hamburgerMenu && (
                    <div className=" text-sm cursor-pointer absolute top-[100%] right-[0%] flex flex-col bg-sky-300 items-center rounded-md ">
                        <div onClick={(e) => toggleMenu(e, setAboutMenu, "about")} className="relative flex hover:bg-sky-600 w-full items-center justify-center px-4 p-1 gap-1 hover:[&_span]:rotate-180">
                            <a href="#" className="">About</a>
                            <span className='transition delay-75 duration-300 ease-in-out'><IoIosArrowDown /></span>
                            {aboutMenu && (
                                 <div className="text-nowrap z-2 cursor-pointer absolute top-[100%] right-0 flex flex-col bg-white shadow-lg px-6 py-4  items-center rounded-md">

                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 gap-1 rounded-md">
                                        <a href="#" className="">Partners</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 gap-1 rounded-md">
                                        <a href="#" className="">Privacy Policy</a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div onClick={(e) => toggleMenu(e, setServicesMenu, "service")} className="relative flex hover:bg-sky-600 w-full items-center justify-center px-4 p-1 hover:[&_span]:rotate-180">
                            <a href="" className="">Services</a>
                            <span className='transition delay-75 duration-300 ease-in-out'><IoIosArrowDown /></span>
                            {servicesMenu && (
                                 <div className="text-nowrap z-2 cursor-pointer absolute top-[100%] right-0 flex flex-col bg-white shadow-lg px-1 py-4  items-center rounded-md">
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 gap-1 rounded-md">
                                        <a href="/servicesInHome" className="">In-Home Physical Therapy Evaluations</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 gap-1 rounded-md">
                                        <a href="/servicesFollowUp" className="">Follow-up and Post-Operative Rehab</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 rounded-md">
                                        <a href="/servicesNeuromuscular" className="">Neuromuscular Re-education & Balance Training</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 rounded-md">
                                        <a href="/servicesTelehealth" className="">Telehealth Therapy Options</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 rounded-md">
                                        <a href="/servicesDischarge" className="">Discharge Planning & Care Coordination</a>
                                    </div>
                                    <div className="flex hover:bg-sky-200 w-full items-center justify-center px-4 p-1 rounded-md">
                                        <a href="/servicesStrength" className="">Strength Training & Functional Conditioning</a>
                                    </div>
                                    
                                </div>
                            )}
                        </div>
                        <div onClick={() => router.push("/contact")} className="flex hover:bg-sky-600 w-full items-center justify-center px-4 p-1">
                            <a className="">Contact</a>
                        </div>

                    </div>
                )}
                
            </div>
        </nav>
    </header>
  )
}

export default Navbar