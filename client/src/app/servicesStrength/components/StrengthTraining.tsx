// components/StrengthTraining.tsx
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import free_pt from "../../assets/free_pt.jpg"
import experienced_staff from "../../assets/experienced_staff.jpg"
import balance_pt from "../../assets/balance_pt.jpg"


const StrengthTraining: React.FC = () => {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero */}
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 leading-tight">
            Strength Training &amp; Functional Conditioning
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            At <span className="font-semibold text-gray-800">AVAI PT</span>, we believe that true
            recovery extends beyond pain relief. Our Strength Training &amp; Functional Conditioning
            programs are designed to help patients rebuild strength, restore mobility, and enhance
            overall physical performance. We focus on exercises that improve your ability to perform
            daily tasks safely and independently.
          </p>
        </header>

        {/* What is Functional Conditioning */}
        <section className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-md p-6 md:p-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What Is Functional Conditioning?
            </h2>
            <p className="text-gray-600">
              Functional conditioning involves training your body to work more efficiently in
              real-life situations. Unlike traditional exercise routines that isolate single
              muscles, this approach integrates multiple muscle groups to improve balance,
              flexibility, endurance, and coordination.
            </p>
          </div>
          <div className="relative h-56 md:h-72 rounded-xl overflow-hidden">
            <Image
              src={balance_pt}
              alt="Functional Conditioning"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Why Strength Training Matters */}
        <section className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-md p-6 md:p-10">
          <div className="relative h-56 md:h-72 rounded-xl overflow-hidden order-2 md:order-1">
            <Image
              src={free_pt}
              alt="Strength Training"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Strength Training Matters
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Rebuild muscle mass lost due to injury or inactivity</li>
              <li>Enhance bone density, reducing fracture risks</li>
              <li>Improve balance and coordination</li>
              <li>Support joint stability and reduce pain</li>
              <li>Increase overall independence and quality of life</li>
            </ul>
          </div>
        </section>

        {/* Who Can Benefit */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who Can Benefit</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Post-surgical patients regaining mobility</li>
            <li>Individuals managing chronic pain or conditions</li>
            <li>Older adults seeking to maintain independence</li>
            <li>Athletes recovering from injury</li>
            <li>Anyone aiming to improve physical performance</li>
          </ul>
        </section>

        {/* Our Approach */}
        <section className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-md p-6 md:p-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Approach to Functional Training
            </h2>
            <ol className="list-decimal pl-6 text-gray-600 space-y-2">
              <li>
                <span className="font-semibold">Comprehensive Assessment:</span> We evaluate
                strength, mobility, and functional capabilities.
              </li>
              <li>
                <span className="font-semibold">Personalized Program Design:</span> Exercises are
                tailored to your recovery stage and lifestyle.
              </li>
              <li>
                <span className="font-semibold">Progressive Strength Training:</span> We gradually
                increase resistance to build endurance and power.
              </li>
              <li>
                <span className="font-semibold">Functional Movement Drills:</span> We replicate
                everyday movements to improve independence.
              </li>
              <li>
                <span className="font-semibold">Ongoing Monitoring:</span> We track your progress
                and adjust your plan as needed.
              </li>
            </ol>
          </div>
          <div className="relative h-56 md:h-72 rounded-xl overflow-hidden">
            <Image src={experienced_staff} alt="Our Approach" fill className="object-cover" />
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits of Our Program</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Increased strength, balance, and coordination</li>
            <li>Improved ability to perform daily activities</li>
            <li>Lower risk of falls and reinjury</li>
            <li>Faster recovery times</li>
            <li>Better long-term mobility and independence</li>
          </ul>
        </section>

        {/* Why Choose */}
        <section className="bg-white rounded-2xl shadow-md p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Choose AVAI PT</h2>
          <p className="text-gray-600">
            Our team combines evidence-based techniques with compassionate care to help you regain
            your strength and confidence. Through functional conditioning, we don’t just focus on
            recovery—we prepare you to live life fully, safely, and independently.
          </p>
        </section>

        {/* CTA */}
        <div className="pt-6 text-center">
          <button
            onClick={() => router.push("/login")}
            className="cursor-pointer inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 text-white font-medium rounded-lg px-6 py-3 transition"
          >
            Get Started
          </button>
          <p onClick={() => router.push("/contact")} className="cursor-pointer mt-3 text-sm text-gray-500">
            Or connect with us to schedule a consultation — we&apos;re here to help.
          </p>
        </div>
      </div>
    </main>
  );
};

export default StrengthTraining;
