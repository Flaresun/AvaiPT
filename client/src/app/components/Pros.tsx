import React from 'react'
import Carousel from './Carousel';

interface Features {
    title: string,
    desc: string,
    img: string
}

const Pros = () => {

    const items: Features[] = [
        {title:"Our Mission", desc:"At AVAIPT, we are committed to delivering high-quality, patient-centered care with efficiency, professionalism, and compassion.", img:""},
        {title:"Experienced Therapist", desc:"Our team of experienced, state-licensed therapists brings advanced clinical knowledge directly to your home.",img:""},
        {title:"On Demand Care", desc:"Whether you need short-term post-operative care or ongoing rehabilitation support, AVAI PT is built to deliver results.",img:""},
        {title:"Regulatory Compliance", desc:"HIPAA, Medicare and state regulations, AVAIPT is compliant and documentation ready, making us a reliable partner for both patients and healthcare agencies.",img:""},
        {title:"Fast Flexible Scheduling", desc:"We offer rapid onboarding, responsive communication, and PRN or ongoing contract options to meet your specific needs.",img:""},
        {title:"Location", desc:"Currently active in multiple cities in Ohio, including Cleveland, Akron, Youngstown, Toledo, Dayton, Cincinnati, etc.",img:""},
    ]
    
    return (
        <div className='px-[3rem] py-5 bg-gradient-to-b from-[#b7b6bc] to-[#ffffff] w-full h-screen'>

            <div className="flex flex-col text-3xl">
                <div className="flex">
                    <p className="">Features</p>
                </div>
                <div className="flex mt-5 font-medium text-5xl xl:text-7xl">
                    <h1 className="">Get the Motion you Deserve</h1>
                </div>

                <div className="flex">
                    <Carousel items={items} />
                </div>
            </div>
            
        </div>
    )
}

export default Pros