import type { StaticImageData } from "next/image";

import therapistWithPatient from "@/app/assets/therapist_with_patient.jpg";
import followupPt from "@/app/assets/followup_pt.jpg";
import neuromuscularSession from "@/app/assets/neuromuscular_session.jpg";
import telehealthPt from "@/app/assets/telehealth_pt.jpg";
import careCoordination from "@/app/assets/care_coordination.jpg";
import experiencedStaff from "@/app/assets/experienced_staff.jpg";

export type ListBlock = { heading: string; items: string[] };

export type ServiceContent = {
  eyebrow: string;
  title: string;
  lede: string;
  image: StaticImageData;
  imageAlt: string;
  intro: { heading: string; body: string };
  second?: { heading: string; body: string };
  /** Rendered as numbered step cards. */
  steps?: ListBlock;
  /** Rendered as bulleted card grids, in order. */
  lists: ListBlock[];
  whyChoose: string;
  ctaLabel: string;
};

export const servicePages: Record<string, ServiceContent> = {
  inHome: {
    eyebrow: "In-home evaluations",
    title: "In-Home Physical Therapy Evaluations",
    lede: "Healing starts where you feel most comfortable — at home.",
    image: therapistWithPatient,
    imageAlt: "A therapist working with a patient during a home visit",
    intro: {
      heading: "What is an in-home physical therapy evaluation?",
      body: "An in-home evaluation is the first step in your recovery journey. One of our licensed physical therapists visits you at home to conduct a comprehensive assessment of your current health, mobility, and functional abilities. We review your medical history, analyze your home environment for safety, and create a personalized care plan tailored to your specific goals.",
    },
    second: {
      heading: "Why in-home evaluations matter",
      body: "In-home evaluations let us design therapy programs that work in your actual living environment, which makes them more practical and more effective. This matters most for people recovering from surgery, managing chronic conditions, or facing mobility challenges.",
    },
    steps: {
      heading: "How we conduct the evaluation",
      items: [
        "Reviewing your medical history and current health status",
        "Assessing strength, flexibility, balance, and range of motion",
        "Evaluating your home setup for safety and accessibility",
        "Creating a customized therapy plan based on your goals",
        "Providing education on exercises, posture, and mobility techniques",
      ],
    },
    lists: [
      {
        heading: "Benefits of in-home evaluations",
        items: [
          "Personalized care plans tailored to your specific needs",
          "Improved comfort and reduced stress from staying at home",
          "Better safety outcomes by assessing your real environment",
          "Early detection of home-related hazards to prevent falls",
          "Faster recovery with treatment designed for your lifestyle",
        ],
      },
    ],
    whyChoose:
      "We combine evidence-based techniques with compassion and professionalism. Every evaluation is designed to empower you, helping you take an active role in your own recovery.",
    ctaLabel: "Book your evaluation",
  },

  followUp: {
    eyebrow: "Post-operative rehab",
    title: "Follow-up and Post-Operative Rehab",
    lede: "Recovering from surgery or injury is a journey, and we guide you through every step of it.",
    image: followupPt,
    imageAlt: "A therapist guiding a patient through post-operative rehabilitation",
    intro: {
      heading: "Why post-operative rehab matters",
      body: "After surgery, your body needs time, care, and movement to heal properly. Without proper rehabilitation, patients risk complications such as stiffness, weakness, reduced mobility, and even chronic pain. Our sessions aim to accelerate recovery, reduce discomfort, and secure long-term functional improvement.",
    },
    second: {
      heading: "Our approach to post-operative care",
      body: "We personalize your rehabilitation plan around the type of surgery, your health status, and your goals. Our therapists use evidence-based techniques to optimize healing while minimizing setbacks.",
    },
    steps: {
      heading: "What our sessions include",
      items: [
        "Gentle range-of-motion exercises to restore joint flexibility",
        "Strength-building routines to regain muscle power",
        "Pain management techniques for comfort and faster recovery",
        "Balance and gait training to improve mobility",
        "Education on safe movements and posture adjustments",
      ],
    },
    lists: [
      {
        heading: "Benefits of working with AVAI PT",
        items: [
          "Faster healing with personalized recovery plans",
          "Lower risk of complications after surgery",
          "Improved independence and quality of life",
          "Ongoing monitoring and reassessment to track progress",
          "Emotional support and motivation throughout your recovery",
        ],
      },
      {
        heading: "Conditions and surgeries we support",
        items: [
          "Joint replacements (hip, knee, shoulder)",
          "Back and spinal surgeries",
          "Rotator cuff and ligament repairs",
          "Fracture recoveries",
          "Other orthopedic and neurological procedures",
        ],
      },
    ],
    whyChoose:
      "We go beyond therapy — we partner with you on your recovery. Our compassionate, skilled therapists make sure you feel supported, informed, and motivated throughout the process.",
    ctaLabel: "Book your evaluation",
  },

  neuromuscular: {
    eyebrow: "Balance and coordination",
    title: "Neuromuscular Re-education & Balance Training",
    lede: "Helping you regain control, coordination, and stability for a safer, more confident life.",
    image: neuromuscularSession,
    imageAlt: "A patient performing neuromuscular re-education exercises with a therapist",
    intro: {
      heading: "What is neuromuscular re-education?",
      body: "Neuromuscular re-education is a targeted therapy technique focused on retraining the communication between your brain, nerves, and muscles. Through guided exercises, our therapists help restore those pathways to improve functional movement.",
    },
    second: {
      heading: "Why balance training matters",
      body: "Balance problems are one of the leading causes of falls, especially among older adults. Our programs strengthen core muscles, improve coordination, and sharpen your ability to react to sudden movements — helping you stay safe and confident in daily life.",
    },
    steps: {
      heading: "Therapies and techniques we use",
      items: [
        "Gait training and posture correction",
        "Proprioceptive exercises to improve body awareness",
        "Core strengthening and stability exercises",
        "Vestibular rehabilitation for dizziness and balance issues",
        "Functional mobility training tailored to daily activities",
      ],
    },
    lists: [
      {
        heading: "Who can benefit",
        items: [
          "People who have experienced strokes, spinal cord injuries, or neurological disorders",
          "People recovering from orthopedic surgeries or traumatic injuries",
          "Anyone struggling with chronic balance issues or dizziness",
          "Anyone wanting to reduce the risk of falling and maintain independence",
          "Anyone looking to improve overall movement control and body awareness",
        ],
      },
      {
        heading: "Benefits of our program",
        items: [
          "Improved coordination and motor control",
          "Reduced risk of falls and injuries",
          "Increased muscle strength and flexibility",
          "Enhanced confidence in movement",
          "Better independence and overall quality of life",
        ],
      },
    ],
    whyChoose:
      "Every patient's needs are different. Our licensed therapists build customized care plans for a safe, supported recovery, using evidence-based strategies that get you moving with confidence again.",
    ctaLabel: "Start your recovery",
  },

  telehealth: {
    eyebrow: "Virtual sessions",
    title: "Telehealth Therapy Options",
    lede: "Professional, one-on-one care from the comfort of your home.",
    image: telehealthPt,
    imageAlt: "A patient attending a telehealth physical therapy session",
    intro: {
      heading: "What is telehealth therapy?",
      body: "Telehealth physical therapy means live sessions with licensed therapists over secure video. Through interactive assessment and guided exercise, we deliver the same quality of care you would get during an in-person visit.",
    },
    second: {
      heading: "Why telehealth is important",
      body: "Telehealth removes the usual barriers to care. Whether you live far from our office, have mobility challenges, or a schedule that will not bend, telehealth keeps you from missing essential treatment. Our platform is HIPAA-compliant, so your privacy is protected.",
    },
    steps: {
      heading: "How it works",
      items: [
        "Initial assessment: we evaluate your condition virtually and design a treatment plan",
        "Live therapy sessions: you connect with your therapist through secure video calls",
        "Guided exercises: we demonstrate movements and monitor your technique in real time",
        "Progress tracking: we assess improvement and adjust the plan as needed",
        "Support and education: you receive ongoing guidance, resources, and feedback",
      ],
    },
    lists: [
      {
        heading: "Who can benefit",
        items: [
          "People who need ongoing rehab but cannot attend in person",
          "People who prefer therapy from the comfort of home",
          "People with chronic conditions that limit mobility",
          "People in remote or underserved areas",
          "Anyone who needs flexible scheduling",
        ],
      },
      {
        heading: "Benefits of AVAI PT telehealth",
        items: [
          "High-quality, personalized care from anywhere",
          "No travel time and no travel costs",
          "Safe and HIPAA-compliant technology",
          "Convenient scheduling that fits your life",
          "The same professional expertise as in-person therapy",
        ],
      },
    ],
    whyChoose:
      "With telehealth you do not have to choose between convenience and quality. We combine the technology with the same compassionate care to get you the best outcome possible.",
    ctaLabel: "Book a telehealth session",
  },

  discharge: {
    eyebrow: "Transitions of care",
    title: "Discharge Planning & Care Coordination",
    lede: "Your care journey does not end when therapy sessions conclude.",
    image: careCoordination,
    imageAlt: "A therapist coordinating a patient's ongoing care plan",
    intro: {
      heading: "What is discharge planning?",
      body: "Discharge planning is a structured process that helps patients transition safely from supervised therapy to managing their health independently, or with minimal support. We build personalized plans that reflect your progress, your lifestyle, and your goals.",
    },
    second: {
      heading: "Why care coordination matters",
      body: "Recovery does not happen in isolation. Our care coordination keeps everyone on your healthcare team — physicians, caregivers, and family — aligned on your ongoing needs. That reduces risk, prevents setbacks, and makes recovery faster and safer.",
    },
    steps: {
      heading: "What we include in your discharge plan",
      items: [
        "A detailed summary of your therapy progress",
        "Home exercise programs tailored to your recovery goals",
        "Recommendations for adaptive equipment or mobility aids",
        "Referrals to specialists or community resources",
        "Scheduling of follow-up visits or telehealth check-ins",
      ],
    },
    lists: [
      {
        heading: "Who can benefit",
        items: [
          "People who have completed an in-home or outpatient therapy program",
          "People who need ongoing care after surgery or hospitalization",
          "People who need support managing chronic conditions",
          "People transitioning safely to independent living",
          "Anyone who benefits from clear, coordinated instructions for next steps",
        ],
      },
      {
        heading: "Benefits of our care coordination",
        items: [
          "A smooth, stress-free transition after therapy",
          "Improved adherence to recovery goals",
          "Reduced risk of reinjury or complications",
          "Clear communication among all caregivers",
          "Continued professional support when you need it",
        ],
      },
    ],
    whyChoose:
      "We treat recovery as a journey, not a series of sessions. Personalized discharge planning plus seamless coordination means you keep the resources, the knowledge, and the confidence to stay independent.",
    ctaLabel: "Talk to us about your plan",
  },

  strength: {
    eyebrow: "Strength and conditioning",
    title: "Strength Training & Functional Conditioning",
    lede: "True recovery goes beyond pain relief — it is about doing daily life safely and independently.",
    image: experiencedStaff,
    imageAlt: "A therapist supervising a patient's strength training session",
    intro: {
      heading: "What is functional conditioning?",
      body: "Functional conditioning trains your body to work efficiently in real-life situations. Unlike routines that isolate single muscles, this approach integrates multiple muscle groups to improve balance, flexibility, endurance, and coordination.",
    },
    second: {
      heading: "Why strength training matters",
      body: "Strength work rebuilds muscle mass lost to injury or inactivity, improves bone density, steadies your balance, supports your joints, and reduces pain. The result is more independence and a better quality of life.",
    },
    steps: {
      heading: "Our approach to functional training",
      items: [
        "Comprehensive assessment of strength, mobility, and functional capability",
        "Personalized program design matched to your recovery stage and lifestyle",
        "Progressive strength training that builds endurance and power gradually",
        "Functional movement drills that replicate everyday tasks",
        "Ongoing monitoring, with the plan adjusted as you progress",
      ],
    },
    lists: [
      {
        heading: "Who can benefit",
        items: [
          "Post-surgical patients regaining mobility",
          "People managing chronic pain or conditions",
          "Older adults seeking to maintain independence",
          "Athletes recovering from injury",
          "Anyone aiming to improve physical performance",
        ],
      },
      {
        heading: "Benefits of our program",
        items: [
          "Increased strength, balance, and coordination",
          "Improved ability to perform daily activities",
          "Lower risk of falls and reinjury",
          "Faster recovery times",
          "Better long-term mobility and independence",
        ],
      },
    ],
    whyChoose:
      "Our team combines evidence-based technique with compassionate care to help you regain strength and confidence. We do not just focus on recovery — we prepare you to live fully, safely, and on your own terms.",
    ctaLabel: "Get started",
  },
};
