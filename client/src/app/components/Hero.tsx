import React from 'react'
import Image from 'next/image'
import hero_logo from "../assets/physical_therapist-rounded.png"
import light_logo from "../assets/light_logo.png"
import { TiLocationArrow } from "react-icons/ti";

const Hero = () => {
  return (
    <div className='px-[3rem]'>
        <div className="flex lg:flex-row flex-col pt-20">
            <div className="flex flex-col max-w-3xl lg:items-start lg:text-start items-center text-center ">
                {/**Text Portion */}
                <div className="flex flex-col ">
                    <p className="items-start font-medium text-5xl xl:text-7xl xl:leading-[100px]">
                        <span className="text-sky-500 inline">AvaiPT</span> - Where Skilled Therapy Meets Streamlined Delivery
                    </p>
                </div>
                
                <div className="flex mt-10 text-2xl ">
                    <p className="">At AVAI PT, we believe mobility is freedom—and every patient deserves both. We specialize in delivering high-quality, compassionate physical therapy services directly to patients in the comfort of their own homes across Ohio.</p>
                </div>

                <div className="flex md:flex-row flex-col pt-4 text-2xl pb-10 lg:pb-0 ">

                    <button className="cursor-pointer inline-flex items-center bg-sky-400 p-4 rounded-full md:mr-5 md:mb-0 mb-5 hover:bg-sky-600 active:scale-[.95]">
                    Get Started <TiLocationArrow className="ml-2 text-xl" />
                    </button>

                    <button className="cursor-pointer inline-flex items-center border p-4 rounded-full md:mr-5 md:mb-0 mb-5 hover:bg-slate-100 active:scale-[.95]">
                    Learn More <TiLocationArrow className="ml-2 text-xl" />
                    </button>
                </div>

            </div>
            {/**Image Portion */}
            <div className="flex rounded-full">
                <Image src={hero_logo} alt=""  />
            </div>
        </div>
    </div>
  )
}

export default Hero