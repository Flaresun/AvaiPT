"use client"
import React from "react";
import compliance from "../../assets/compliance.jpg";
import telehealth_pt from "../../assets/telehealth_pt.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function TelehealthPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Telehealth Therapy Options
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Professional, one-on-one care from the comfort of your home.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <Image src={telehealth_pt} alt="Telehealth Session"/>
        <div>
          <h2 className="text-2xl font-bold mb-4">What Is Telehealth Therapy?</h2>
          <p className="leading-relaxed mb-4">
            Telehealth physical therapy involves virtual sessions with licensed
            therapists using secure video conferencing platforms. Through
            interactive assessments and guided exercises, we provide the same
            quality care you’d receive during an in-person visit.
          </p>
        </div>
      </section>

      {/* Why Telehealth */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Telehealth Is Important</h2>
            <p className="leading-relaxed">
              Telehealth breaks down traditional barriers to accessing care.
              Whether you live far from our office, have mobility challenges, or
              a busy schedule, telehealth ensures you don’t miss essential
              treatments. Our platform is HIPAA-compliant to protect your privacy
              and provide a safe, professional experience.
            </p>
          </div>
          <Image src={compliance} alt="Telehealth Session"/>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Who Can Benefit</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Need ongoing rehab but can’t attend in-person sessions",
            "Prefer therapy from the comfort of their home",
            "Have chronic conditions that limit mobility",
            "Live in remote or underserved areas",
            "Require flexible scheduling options",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md flex items-start space-x-3"
            >
              <span className="text-green-800 font-bold">•</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
          <ol className="space-y-4 text-lg">
            {[
              "Initial Assessment: We evaluate your condition virtually and design a customized treatment plan.",
              "Live Therapy Sessions: You connect with your therapist through secure video calls.",
              "Guided Exercises: We demonstrate movements and monitor your technique in real-time.",
              "Progress Tracking: We assess your improvement and adjust treatment plans as needed.",
              "Support & Education: You receive ongoing guidance, resources, and feedback.",
            ].map((step, i) => (
              <li key={i} className="flex items-start space-x-3">
                <span className="bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Benefits of AVAI PT Telehealth
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "High-quality, personalized care from anywhere",
            "Eliminates travel time and costs",
            "Safe and HIPAA-compliant technology",
            "Convenient scheduling to fit your lifestyle",
            "Same professional expertise as in-person therapy",
          ].map((benefit, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md flex items-start space-x-3"
            >
              <span className="text-green-600 font-bold">•</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Why Choose AVAI PT</h2>
        <p className="max-w-3xl mx-auto leading-relaxed mb-6">
          With AVAI PT’s telehealth therapy options, you don’t have to choose
          between convenience and quality. We combine advanced technology with
          compassionate care to ensure you receive the best outcomes possible.
        </p>
        <button onClick={()=>router.push("./contact")} className="cursor-pointer px-6 py-3 bg-green-800 text-white rounded-xl shadow-md hover:bg-green-700 transition">
          Book a Telehealth Session
        </button>
      </section>
    </div>
  );
}
