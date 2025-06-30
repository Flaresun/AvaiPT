import Image from 'next/image';
import React from 'react';
import logo from "../../../public/logo.png"

const Footer = () => {
  const date = new Date();
  const curYear = date.getFullYear();

  return (
    <div className="px-[3rem] pt-5 mt-10 bg-black text-white text-lg">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mx-[10rem]">
          {/* Logo */}
          <div className="flex flex-col items-center justify-center max-h-full">
            {<Image className=""src={logo} alt="AVAI PT Logo" width={75} />}
            <p className="">AVAIPT</p>
          </div>

          {/* About Us */}
          <div className="flex flex-col items-start">
            <h1 className="font-extralight text-gray-600 mb-2">About Us</h1>
            <div className="flex flex-col text-base space-y-1">
              <p className="cursor-pointer">Mission</p>
              <p className="cursor-pointer">Partners</p>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col items-start">
            <h1 className="font-extralight text-gray-600 mb-2">Services</h1>
            <div className="flex flex-col text-base space-y-1">
              <p className="cursor-pointer">In-Home Physical Therapy Evaluations</p>
              <p className="cursor-pointer">Follow-up and Post-Operative Rehab</p>
              <p className="cursor-pointer">Neuromuscular Re-education & Balance Training</p>
              <p className="cursor-pointer">Telehealth Therapy Options</p>
              <p className="cursor-pointer">Discharge Planning & Care Coordination</p>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-start">
            <h1 className="font-extralight text-gray-600 mb-2">Legal</h1>
            <div className="flex flex-col text-base space-y-1">
              <p className="cursor-pointer">Testimonials</p>
              <p className="cursor-pointer">Privacy Policy</p>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="flex flex-col my-5">
          <div className="bg-slate-900 h-0.5 w-full mb-2"></div>
          <p className="text-sm text-gray-600">@ {curYear} AVAIPT LLC. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
