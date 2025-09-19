import React from "react";

const Privacy = () => {
  return (
    <main className="pt-20 min-h-screen  text-slate-800 px-6 py-12 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Effective Date: August 20, 2025</p>
        </header>

        {/* Section */}
        <section className="space-y-8 text-base md:text-lg leading-relaxed">
          {/* 1. Introduction */}
          <div>
            <h2 className="font-semibold text-xl mb-2">1. Introduction</h2>
            <p>
              AVAI PT LLC (“we,” “our,” or “us”) respects your privacy and is
              committed to protecting your personal health information in
              compliance with the Health Insurance Portability and Accountability
              Act (HIPAA) and applicable state laws. This Privacy Policy explains
              how we collect, use, disclose, and protect your information.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div>
            <h2 className="font-semibold text-xl mb-2">2. Information We Collect</h2>
            <p className="mb-3">
              We may collect the following types of information when providing
              physical therapy services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal Identification: Name, address, phone number, date of birth, email.</li>
              <li>
                Medical Information: Health history, treatment notes, physician
                referrals, and insurance details.
              </li>
              <li>
                Billing &amp; Payment Information: Insurance provider,
                Medicare/Medicaid details, and payment records.
              </li>
              <li>Digital Interactions: Information you submit via our website or patient portal.</li>
            </ul>
          </div>

          {/* 3. How We Use Your Information */}
          <div>
            <h2 className="font-semibold text-xl mb-2">3. How We Use Your Information</h2>
            <p className="mb-3">We use your information solely for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delivering and coordinating your physical therapy services.</li>
              <li>Communicating with you, your healthcare providers, and caregivers.</li>
              <li>Processing billing and insurance claims.</li>
              <li>Meeting legal and regulatory obligations.</li>
            </ul>
          </div>

          {/* 4. Information Sharing */}
          <div>
            <h2 className="font-semibold text-xl mb-2">4. Information Sharing &amp; Disclosure</h2>
            <p className="mb-3">
              We do not sell or share your personal information with unrelated
              third parties. We may disclose your information only:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To healthcare professionals involved in your care.</li>
              <li>To insurance companies for claims processing.</li>
              <li>To comply with legal requirements, court orders, or public health reporting.</li>
              <li>With your written authorization for other specific purposes.</li>
            </ul>
          </div>

          {/* 5. Your Rights */}
          <div>
            <h2 className="font-semibold text-xl mb-2">5. Your Rights Under HIPAA</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and obtain a copy of your medical records.</li>
              <li>Request corrections to your health information.</li>
              <li>Restrict certain disclosures.</li>
              <li>Receive a list of disclosures made about your health information.</li>
              <li>
                File a complaint without fear of retaliation if you believe your
                privacy rights have been violated.
              </li>
            </ul>
          </div>

          {/* 6. Data Security */}
          <div>
            <h2 className="font-semibold text-xl mb-2">6. Data Security</h2>
            <p>
              We maintain physical, administrative, and technical safeguards to
              protect your personal health information from unauthorized access,
              loss, or misuse. Access to your information is limited to authorized
              personnel only.
            </p>
          </div>

          {/* 7. Contact Information */}
          <div>
            <h2 className="font-semibold text-xl mb-2">7. Contact Information</h2>
            <p className="mb-3">
              If you have questions or concerns about this Privacy Policy or your
              rights, contact:
            </p>
            <address className="not-italic space-y-1">
              <p className="font-semibold">AVAI PT LLC</p>
              <p>26535 Chardon Road</p>
              <p>Richmond Heights, Cleveland, OH 44143</p>
              <p>Phone: 216-233-1973</p>
              <p>Email: avaipthysicaltherapy@gmail.com</p>
            </address>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Privacy;
