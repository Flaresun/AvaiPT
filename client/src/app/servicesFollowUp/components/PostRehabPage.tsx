"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
const PostOperativeRehab: React.FC = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Follow-up and Post-Operative Rehab
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recovering from surgery or injury is a journey — and{" "}
            <span className="font-semibold">AVAI PT</span> is here to guide you every step of
            the way. Our programs are designed to restore mobility, rebuild strength, and help you
            return to your daily activities with confidence.
          </p>
        </div>

        {/* Why It Matters */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Post-Operative Rehab Matters
          </h2>
          <p className="text-gray-600">
            After surgery, your body needs time, care, and movement to heal properly. Without
            proper rehabilitation, patients risk complications such as stiffness, weakness, reduced
            mobility, and even chronic pain. Our specialized sessions aim to accelerate recovery,
            reduce discomfort, and ensure long-term functional improvement.
          </p>
        </div>

        {/* Our Approach */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Approach to Post-Operative Care
          </h2>
          <p className="text-gray-600 mb-6">
            At AVAI PT, we personalize your rehabilitation plan based on the type of surgery, your
            health status, and your goals. Our therapists use evidence-based techniques to optimize
            your healing process while minimizing setbacks.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            What Our Sessions Include
          </h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Gentle range-of-motion exercises to restore joint flexibility</li>
            <li>Strength-building routines to regain muscle power</li>
            <li>Pain management techniques for comfort and faster recovery</li>
            <li>Balance and gait training to improve mobility</li>
            <li>Education on safe movements and posture adjustments</li>
          </ul>
        </div>

        {/* Benefits & Conditions */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Benefits of Working With AVAI PT
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Faster healing with personalized recovery plans</li>
              <li>Lower risk of complications after surgery</li>
              <li>Improved independence and quality of life</li>
              <li>Ongoing monitoring and reassessment to track progress</li>
              <li>Emotional support and motivation throughout your recovery</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conditions and Surgeries We Support
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Joint replacements (hip, knee, shoulder)</li>
              <li>Back and spinal surgeries</li>
              <li>Rotator cuff and ligament repairs</li>
              <li>Fracture recoveries</li>
              <li>Other orthopedic and neurological procedures</li>
            </ul>
          </div>
        </div>

        {/* Why Choose */}
        <div className="bg-indigo-600 rounded-2xl shadow-md p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose AVAI PT for Rehab</h2>
          <p className="text-lg max-w-3xl mx-auto">
            At AVAI PT, we go beyond therapy — we partner with you on your recovery journey. Our
            compassionate, skilled therapists ensure you feel supported, informed, and motivated
            throughout the process.
          </p>
          <Button onClick={() => router.push("./contact")} className="mt-5  cursor-pointer px-6 py-3 text-lg">Book Your Evaluation</Button>
        </div>
      </div>
    </div>
  );
};

export default PostOperativeRehab;
