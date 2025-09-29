import React from 'react'
import logo from  "../assets/face_icon.png" 
import { StaticImageData } from 'next/image'
import Image from 'next/image';

const Testimonials = () => {

    type TestimonialProps = {
        name: string, 
        role: string,
        quote: string,
        image: StaticImageData
    }

    const testimonials : Array<TestimonialProps> = [
        {
            name:"Williams A.",
            role:"Geriatric Patient",
            quote:"AVAI PT gave me back my independence. Vivian and her team treated me with so much kindness and patience. They never rushed my sessions and always made sure I understood every step. I feel stronger and more confident than I have in years.", 
            image:logo
        },
        {
            name:"Thomas R.",
            role:"Post-Surgery Rehab",
            quote:"After my knee replacement, I was worried about recovery, but AVAI PT exceeded my expectations. Their professionalism and attention to detail were outstanding. They didn’t just treat my knee — they treated me like family", 
            image:logo
        },
        {
            name:"Angela M.",
            role:"Daughter of a Patient",
            quote:"My mother received home therapy from AVAI PT, and I cannot thank them enough. The compassion they showed her — and us as a family — was unmatched. We always felt supported and informed throughout the entire process.", 
            image:logo
        },
        {
            name:"Robert S.",
            role:"Home Health Agency Partner",
            quote:"As an agency owner, partnering with AVAI PT has been seamless. Vivian’s team consistently delivers excellent care to our clients while maintaining the highest level of professionalism and communication. Our patients love them.", 
            image:logo
        },
        {
            name:"Evelyn J.",
            role:"Stroke Recovery",
            quote:"Recovering from my stroke was challenging, but AVAI PT made it possible. They created a plan that was tailored specifically for me, encouraged me when I felt discouraged, and celebrated every milestone. They truly care.", 
            image:logo
        },
        {
            name:"Michael B.",
            role:"Long-Term Care Client",
            quote:"What sets AVAI PT apart is their integrity. Every therapist I’ve worked with has been respectful, knowledgeable, and genuinely invested in my progress. I always felt seen, heard, and cared for.", 
            image:logo
        },

    ]
  return (
    <div className="p-[1rem] md:p-[3rem] bg-gradient-to-b from-[#ffffff] to-[#cac9d3]">
        <div className="flex flex-col text-5xl md:text-6xl items-center justify-center text-center">
            <div className="mb-3">
                <p className="text-2xl">Testimonials</p>
            </div>
            <div className="mb-5">
                <p className="text-green-800">What Clients Say</p>
            </div>

            <div className="max-w-4xl mb-10">
                <p className="text-2xl">See for yourself what previous and current patients have to say about working with AvaiPT </p>
            </div>

            {/**GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6  ">
                {testimonials.map((value, index) => (

                    <div key={index} className="services-class hide-class flex flex-col p-4 max-w-xl shadow-md bg-slate-300">
                        <div className="mb-4 flex items-center justify-center h-auto object-cover">
                            <Image src={value.image} alt="" className='inline' draggable="false" width={60}/>
                        </div>

                        <div className="flex flex-col ">
                            <h3 className="text-xl mb-2">{value.quote}</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-green-800 text-xl font-semibold mb-2">{value.name}</h3>
                            <p className="text-xl text-gray-600 mb-4">{value.role}</p>
                        </div>
                        

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Testimonials