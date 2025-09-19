"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import therapist_with_patient from "../../assets/therapist_with_patient.jpg";
import mobility_challenged from "../../assets/mobility_challenged.jpg";
import { useRouter } from 'next/navigation';


export default function InHomePage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative ">
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            In-Home Physical Therapy Evaluations
          </h1>
          <p className="text-lg md:text-xl">
            Healing starts where you feel most comfortable — at home.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">

        <Image src={therapist_with_patient} alt="Therapist with Patient" />
        <div>
          <h2 className="text-2xl font-bold mb-4">
            What Is an In-Home Physical Therapy Evaluation?
          </h2>
          <p className="leading-relaxed mb-4">
            An in-home evaluation is the first step in your recovery journey.
            One of our licensed physical therapists visits you at home to
            conduct a comprehensive assessment of your current health, mobility,
            and functional abilities. We review your medical history, analyze
            your home environment for safety, and create a personalized care
            plan tailored to your specific goals.
          </p>
        </div>
      </section>

      {/* Why it Matters */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Why In-Home Evaluations Matter
            </h2>
            <p className="leading-relaxed">
              In-home evaluations allow us to design therapy programs that work
              in your actual living environment, making them more practical and
              effective. This approach is particularly beneficial for
              individuals recovering from surgery, managing chronic conditions,
              or facing mobility challenges.
            </p>
          </div>
          <Image src={mobility_challenged} alt="At home Physical Therapy" />
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Benefits of In-Home Evaluations
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Personalized care plans tailored to your specific needs",
            "Improved comfort and reduced stress from staying at home",
            "Better safety outcomes by assessing your real environment",
            "Early detection of home-related hazards to prevent falls",
            "Faster recovery with treatment designed for your lifestyle",
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

      {/* Evaluation Steps */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            How We Conduct the Evaluation
          </h2>
          <ol className="space-y-4 text-lg">
            {[
              "Reviewing your medical history and current health status",
              "Assessing strength, flexibility, balance, and range of motion",
              "Evaluating your home setup for safety and accessibility",
              "Creating a customized therapy plan based on your goals",
              "Providing education on exercises, posture, and mobility techniques",
            ].map((step, i) => (
              <li key={i} className="flex items-start space-x-3">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Choose */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Why Choose AVAI PT</h2>
        <p className="max-w-3xl mx-auto leading-relaxed mb-6">
          We combine evidence-based techniques with compassion and
          professionalism to deliver exceptional care. Every evaluation is
          designed to empower you, helping you take an active role in your
          recovery journey.
        </p>
        <Button onClick={() => router.push("./contact")} className="cursor-pointer px-6 py-3 text-lg">Book Your Evaluation</Button>
      </section>
    </div>
  );
}
