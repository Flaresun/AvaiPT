import React from "react";

import { site } from "@/lib/site";

const Privacy = () => {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-teal-deep">
        <div
          aria-hidden
          className="absolute -right-24 -top-28 size-[26rem] rounded-full border-[2.75rem] border-brand-sage/10"
        />
        <div className="relative mx-auto max-w-[82rem] px-5 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-40">
          <p className="mb-4 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-brand-sage">
            <span className="block h-0.5 w-7 bg-brand-clay" />
            Legal
          </p>
          <h1 className="text-[2.25rem] font-extrabold leading-[1.06] tracking-tight text-white md:text-5xl xl:text-[3.5rem]">
            Privacy Policy
          </h1>
          <p className="mt-5 text-lg text-brand-on-dark">
            Effective August 20, 2025
          </p>
        </div>
      </section>

    <main className="bg-brand-cream px-5 py-20 text-brand-ink lg:px-10 lg:py-24">
      <div className="mx-auto max-w-4xl">

        {/* Section */}
        <section className="space-y-10 text-base leading-relaxed md:text-lg">
          {/* 1. Introduction */}
          <div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-brand-ink">1. Introduction</h2>
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
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-brand-ink">2. Information We Collect</h2>
            <p className="mb-3">
              We may collect the following types of information when providing
              physical therapy services:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-brand-muted marker:text-brand-teal">
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
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-brand-ink">3. How We Use Your Information</h2>
            <p className="mb-3">We use your information solely for:</p>
            <ul className="list-disc space-y-2 pl-6 text-brand-muted marker:text-brand-teal">
              <li>Delivering and coordinating your physical therapy services.</li>
              <li>Communicating with you, your healthcare providers, and caregivers.</li>
              <li>Processing billing and insurance claims.</li>
              <li>Meeting legal and regulatory obligations.</li>
            </ul>
          </div>

          {/* 4. Information Sharing */}
          <div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-brand-ink">4. Information Sharing &amp; Disclosure</h2>
            <p className="mb-3">
              We do not sell or share your personal information with unrelated
              third parties. We may disclose your information only:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-brand-muted marker:text-brand-teal">
              <li>To healthcare professionals involved in your care.</li>
              <li>To insurance companies for claims processing.</li>
              <li>To comply with legal requirements, court orders, or public health reporting.</li>
              <li>With your written authorization for other specific purposes.</li>
            </ul>
          </div>

          {/* 5. Your Rights */}
          <div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-brand-ink">5. Your Rights Under HIPAA</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc space-y-2 pl-6 text-brand-muted marker:text-brand-teal">
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
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-brand-ink">6. Data Security</h2>
            <p>
              We maintain physical, administrative, and technical safeguards to
              protect your personal health information from unauthorized access,
              loss, or misuse. Access to your information is limited to authorized
              personnel only.
            </p>
          </div>

          {/* 7. Contact Information */}
          <div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-brand-ink">7. Contact Information</h2>
            <p className="mb-3">
              If you have questions or concerns about this Privacy Policy or your
              rights, contact:
            </p>
            <address className="not-italic space-y-1">
              <p className="font-semibold">{site.legalName}</p>
              <p>{site.address.street}</p>
              <p>
                {site.address.locality}, {site.address.region}{" "}
                {site.address.postalCode}
              </p>
              <p>
                Phone:{" "}
                <a className="hover:underline" href={`tel:${site.phone}`}>
                  {site.phone}
                </a>
              </p>
              <p>
                Email:{" "}
                <a className="hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </address>
          </div>
        </section>
      </div>
    </main>
    </>
  );
};

export default Privacy;
