"use client";
import React from "react";
import care_coordination from "../../assets/care_coordination.jpg";
import discharge_pt from "../../assets/discharge_pt.jpg";
import free_pt from "../../assets/free_pt.jpg";

import { useRouter } from "next/navigation";
import Image from "next/image";

const DischargePlanning: React.FC = () => {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero */}
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 leading-tight">
            Discharge Planning &amp; Care Coordination
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            At <span className="font-semibold text-gray-800">AVAI PT</span>, we believe that your
            care journey doesn’t end when your therapy sessions conclude. Our Discharge Planning &
            Care Coordination services ensure a smooth transition from active treatment to
            independent living, ongoing wellness, or the next phase of recovery.
          </p>
        </header>

        {/* Sections with Images */}
        <section className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-md p-6 md:p-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What Is Discharge Planning?
            </h2>
            <p className="text-gray-600">
              Discharge planning is a structured process designed to help patients safely transition
              from supervised therapy to managing their health independently or with minimal
              support. At AVAI PT, we create personalized plans that reflect your progress,
              lifestyle, and future goals.
            </p>
          </div>
          <div className="relative h-56 md:h-72 rounded-xl overflow-hidden">
            <Image src={discharge_pt} alt="Discharge Planning" fill className="object-cover" />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-md p-6 md:p-10">
          <div className="relative h-56 md:h-72 rounded-xl overflow-hidden order-2 md:order-1">
            <Image src={free_pt} alt="Care Coordination" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Care Coordination Matters
            </h2>
            <p className="text-gray-600">
              Recovery doesn’t happen in isolation. Our care coordination services ensure that all
              members of your healthcare team—including physicians, caregivers, and family—are
              aligned on your ongoing needs. This collaborative approach reduces risks, prevents
              setbacks, and promotes faster, safer recovery.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who Can Benefit</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Have completed an in-home or outpatient physical therapy program</li>
            <li>Require ongoing care after surgery or hospitalization</li>
            <li>Need support in managing chronic conditions</li>
            <li>Want to safely transition to independent living</li>
            <li>Benefit from clear, coordinated instructions for next steps</li>
          </ul>
        </section>

        <section className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-md p-6 md:p-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What We Include in Your Discharge Plan
            </h2>
            <p className="text-gray-600 mb-3">
              Our therapists carefully design individualized plans to ensure continuity of care.
              These plans may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>A detailed summary of your therapy progress</li>
              <li>Home exercise programs tailored to your recovery goals</li>
              <li>Recommendations for adaptive equipment or mobility aids</li>
              <li>Referrals to specialists or community resources</li>
              <li>Scheduling of follow-up visits or telehealth check-ins</li>
            </ul>
          </div>
          <div className="relative h-56 md:h-72 rounded-xl overflow-hidden">
            <Image src={care_coordination} alt="Discharge Plan" fill className="object-cover" />
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Benefits of Our Care Coordination
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Smooth and stress-free transition after therapy</li>
            <li>Improved adherence to recovery goals</li>
            <li>Reduced risk of reinjury or complications</li>
            <li>Clear communication among all caregivers</li>
            <li>Continued professional support when needed</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Choose AVAI PT</h2>
          <p className="text-gray-600">
            At AVAI PT, we treat your recovery as a journey—not just a series of sessions. By
            combining personalized discharge planning with seamless care coordination, we ensure you
            have the resources, knowledge, and confidence to maintain your independence and long-term
            health.
          </p>
        </section>

        {/* CTA */}
        <div className="pt-6 text-center">
          <button
            onClick={() => router.push("/contact")}
            className="cursor-pointer inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 text-white font-medium rounded-lg px-6 py-3 transition"
          >
            Contact Us
          </button>
          <p className="mt-3 text-sm text-gray-500">
            Or connect with us to schedule a consultation — we&apos;re here to help.
          </p>
        </div>
      </div>
    </main>
  );
};

export default DischargePlanning;
