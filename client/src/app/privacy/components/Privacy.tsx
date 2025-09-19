import React from 'react'

const Privacy = () => {
  return (
    <div className="flex text-slate-800 py-30 mx-auto max-w-3xl justify-center">

        <div className="w-full flex flex-col">

            <div className="flex text-center font-semibold items-center justify-center max-w-full">
                <h1 className="text-5xl">Privacy Policy</h1>
            </div>

            <div className=" flex flex-col items-start justify-start text-xl mt-20 w-full">
                <div className="flex pb-5">
                    <p className="font-semibold">Effective Date: August 20, 2025.</p>
                </div>

                <div className="flex flex-col pb-5">
                    <p className="font-semibold">1. Introduction</p>
                    <p className="">
                        AVAI PT LLC (“we,” “our,” or “us”) respects your privacy and is committed to protecting your
                        personal health information in compliance with the Health Insurance Portability and
                        Accountability Act (HIPAA) and applicable state laws. This Privacy Policy explains how we
                        collect, use, disclose, and protect your information.
                    </p>
                </div>

                <div className="flex flex-col pb-5">
                    <p className="font-semibold">2. Information We Collect</p>
                    <div className="flex flex-col">
                        <p className="pb-3">
                            We may collect the following types of information when providing physical therapy services:
                        </p>
                        <ul className='list-disc pl-6'>
                            <li className="">Personal Identification: Name, address, phone number, date of birth, email.</li>
                            <li className="">
                                Medical Information: Health history, treatment notes, physician referrals, and insurance details.
                            </li>

                            <li className="">
                                Billing &amp; Payment Information: Insurance provider, Medicare/Medicaid details, and payment records.
                            </li>
                            <li className="">Digital Interactions: Information you submit via our website or patient portal.</li>
                        </ul>
                        
                    </div>
                </div>

                <div className="flex flex-col pb-5">
                    <p className="font-semibold">3. How We Use Your Information</p>
                    <div className="flex flex-col">
                        <p className="pb-3">
                            We use your information solely for:
                        </p>
                        <ul className='list-disc pl-6'>
                            <li className="">Delivering and coordinating your physical therapy services.</li>
                            <li className="">Communicating with you, your healthcare providers, and caregivers</li>

                            <li className="">Processing billing and insurance claims.</li>
                            <li className="">Meeting legal and regulatory obligations.</li>
                        </ul>
                        
                    </div>
                </div>

                <div className="flex flex-col pb-5">
                    <p className="font-semibold">4. Information Sharing &amp; Disclosure</p>
                    <div className="flex flex-col">
                        <p className="pb-3">
                            We do not sell or share your personal information with unrelated third parties. We may disclose
your information only:
                        </p>
                        <ul className='list-disc pl-6'>
                            <li className="">To healthcare professionals involved in your care.</li>
                            <li className="">To insurance companies for claims processing.</li>

                            <li className="">To comply with legal requirements, court orders, or public health reporting.</li>
                            <li className="">With your written authorization for other specific purposes.</li>
                        </ul>
                        
                    </div>
                </div>

                <div className="flex flex-col pb-5">
                    <p className="font-semibold">5. Your Rights Under HIPAA</p>
                    <div className="flex flex-col">
                        <p className="pb-3">
                            You have the right to:
                        </p>
                        <ul className='list-disc pl-6'>
                            <li className="">Access and obtain a copy of your medical records.</li>
                            <li className="">Request corrections to your health information.</li>

                            <li className="">Restrict certain disclosures.</li>
                            <li className="">Receive a list of disclosures made about your health information.</li>
                            <li className="">
                                File a complaint without fear of retaliation if you believe your privacy rights have been violated.
                            </li>
                        </ul>
                        
                    </div>
                </div>

                <div className="flex flex-col pb-5">
                    <p className="font-semibold">6. Data Security</p>
                    <div className="flex flex-col">
                        <p className="pb-3">
                            We maintain physical, administrative, and technical safeguards to protect your personal health
                            information from unauthorized access, loss, or misuse. Access to your information is limited to
                            authorized personnel only.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col pb-5">
                    <p className="font-semibold">7. Contact Information</p>
                    <div className="flex flex-col">
                        <p className="pb-3">
                            If you have questions or concerns about this Privacy Policy or your rights, contact:
                        </p>
                        <div className="">
                            <h2 className="">AVAIPT LLC</h2>
                            <p className="">26535 Chardon Road</p>
                            <p className="">Richmond Heights, Cleveland, OH 44143</p>
                            <p className="">Phone: 216-233-1973</p>    
                            <p className="">Email: avaipthysicaltherapy@gmail.com</p> 
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Privacy