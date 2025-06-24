"use client";
import React,{ useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

interface Features {
    title: string,
    desc: string,
    img: string
}
interface CarouselProps {
    items: Features[];
}

export default function Carousel ({items}: CarouselProps) {

    const [curr,setCurr] = useState<number>(0);
    const arrowSize : number = 50;

    const next = () => {
        setCurr((curr) => curr === items.length-1 ? 0 : curr +1);
    }

    const prev = () => {
        setCurr((curr) => curr ===0 ? items.length -1 : curr -1);
    }

    return (
        <div className="flex flex-col overflow-hidden">

            <div className="flex justify-end">
                <div onClick={() => prev()} className="cursor-pointer hover:bg-slate-100 active:scale-[0.95] border rounded-full border-black p-1 mr-5">
                    <IoIosArrowBack size={arrowSize} />
                </div>
                <div onClick={() => next()} className="cursor-pointer hover:bg-slate-100 active:scale-[0.95] border rounded-full border-black p-1">
                    <IoIosArrowForward size={arrowSize} />
                </div>
            </div>

            <div className="flex flex-row mt-10 ">
                {items.map((value,index) => (
                    <div key={index} className="pr-10 flex flex-col min-w-md transition-all ease-out duration-500" style={{transform: `translateX(-${curr * 100}%)`}}>
                        <div className="flex flex-row font-semibold">
                            <span>{index+1 < 10 ? `0${index+1}` : index+1}</span>
                        </div>

                        <div className="flex flex-col items-center text-center w-full">
                            <h1 className="text-4xl mb-5 text-nowrap">{value.title}</h1>
                            <p className="font-light text-2xl">{value.desc}</p>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    )
    
}