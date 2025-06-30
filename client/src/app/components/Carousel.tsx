"use client";
import React,{ useRef, useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Image, { StaticImageData } from 'next/image';

interface Features {
    title: string,
    desc: string,
    img: StaticImageData,
}
interface CarouselProps {
    items: Features[];
}

export default function Carousel ({items}: CarouselProps) {

    const [curr,setCurr] = useState<number>(0);
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);
    const arrowSize : number = 50;
    const minSwipeDistance = 100; // px

    const next = () => {
        setCurr((curr) => curr === items.length-1 ? 0 : curr +1);
    }

    const prev = () => {
        setCurr((curr) => curr ===0 ? items.length -1 : curr -1);
    }

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.changedTouches[0].clientX;
    }
    const onTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;
    }
    const onTouchEnd = () => {
        const dist = touchStartX.current - touchEndX.current;
        if (dist > minSwipeDistance) {
            next();
        }
        else if (dist < -1*minSwipeDistance) {
            prev();
        }
    }
    

    return (
        <div className="flex flex-col mx-[2rem] lg:mx-[5rem] overflow-hidden">

            <div className="flex justify-end">
                <div onClick={() => prev()} className="cursor-pointer hover:bg-slate-100 active:scale-[0.95] border rounded-full border-black p-1 mr-5">
                    <IoIosArrowBack size={arrowSize} />
                </div>
                <div onClick={() => next()} className="cursor-pointer hover:bg-slate-100 active:scale-[0.95] border rounded-full border-black p-1">
                    <IoIosArrowForward size={arrowSize} />
                </div>
            </div>

            <div className="flex flex-row my-5 md:my-10" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                {items.map((value,index) => (
                    <div key={index} className=" md:px-10 flex flex-col min-w-[100%] md:min-w-[50%]  transition-all ease-out duration-500 " style={{transform: `translateX(-${curr * 100}%)`}}>
                        <div className="flex flex-col p-4 rounded-4xl shadow-md bg-gradient-to-b from-[#a0a0a0] to-[#f2f1f1] h-full">
                            <div className="flex flex-row font-semibold mb-2">
                                <span className='p-2 '>{index+1 < 10 ? `0${index+1}` : index+1}</span>
                            </div>
                            
                            <div className="flex">
                                    <Image src={value.img} alt="img" className='inline' draggable="false"/>
                            </div>

                            <div className="flex flex-col items-center text-center w-full ">
                                <h1 className="font-semibold text-xl md:text-4xl my-5 ">{value.title}</h1>
                                <p className="font-light text-xl md:text-2xl">{value.desc}</p>
                            </div>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    )
    
}