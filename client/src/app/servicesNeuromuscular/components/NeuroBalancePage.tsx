"use client"
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import neuromuscular_session from "../../assets/neuromuscular_session.jpg";
import balance_pt from "../../assets/balance_pt.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NeuroBalancePage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">
            Neuromuscular Re-education & Balance Training
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Helping you regain control, coordination, and stability for a safer,
            more confident life.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <Image src={neuromuscular_session} alt="Neuromuscular Session" />
        <div>
          <h2 className="text-2xl font-bold mb-4">
            What Is Neuromuscular Re-education?
          </h2>
          <p className="leading-relaxed mb-4">
            Neuromuscular re-education is a targeted therapy technique that
            focuses on retraining the communication between your brain, nerves,
            and muscles. Through guided exercises, our therapists help restore
            these pathways to improve functional movement.
          </p>
        </div>
      </section>

      {/* Balance Training Importance */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Why Balance Training Matters
            </h2>
            <p className="leading-relaxed">
              Balance problems are one of the leading causes of falls,
              especially among older adults. Our programs strengthen core
              muscles, improve coordination, and enhance your ability to react
              to sudden movements—helping you stay safe and confident in daily
              life.
            </p>
          </div>
          <Image src={balance_pt} alt="Neuromuscular Session" />
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Who Can Benefit</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Have experienced strokes, spinal cord injuries, or neurological disorders",
            "Are recovering from orthopedic surgeries or traumatic injuries",
            "Struggle with chronic balance issues or dizziness",
            "Want to reduce the risk of falling and maintain independence",
            "Wish to improve overall movement control and body awareness",
          ].map((item, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-6 flex items-start space-x-3">
                <span className="text-blue-600 font-bold">•</span>
                <p>{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Therapies & Techniques */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Therapies and Techniques We Use
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Gait training and posture correction",
              "Proprioceptive exercises to improve body awareness",
              "Core strengthening and stability exercises",
              "Vestibular rehabilitation for dizziness and balance issues",
              "Functional mobility training tailored to daily activities",
            ].map((therapy, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md flex items-start space-x-3"
              >
                <span className="text-blue-600 font-bold">•</span>
                <p>{therapy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Benefits of Our Program
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Improved coordination and motor control",
            "Reduced risk of falls and injuries",
            "Increased muscle strength and flexibility",
            "Enhanced confidence in movement",
            "Better independence and overall quality of life",
          ].map((benefit, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-6 flex items-start space-x-3">
                <span className="text-blue-600 font-bold">•</span>
                <p>{benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-100 py-12 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Why Choose AVAI PT</h2>
          <p className="max-w-3xl mx-auto leading-relaxed mb-6">
            At AVAI PT, we understand that every patient’s needs are unique.
            Our licensed therapists create customized care plans to ensure a
            safe and supportive recovery journey. With compassion,
            professionalism, and evidence-based strategies, we empower you to
            move with confidence again.
          </p>
          <Button onClick={()=> router.push("./contact")} className="px-6 py-3 text-lg cursor-pointer">Start Your Recovery</Button>
        </div>
      </section>
    </div>
  );
};

export default NeuroBalancePage;
