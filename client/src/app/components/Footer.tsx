import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.png";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const companyLinks = [
  { label: "Book a Consultation", href: "/contact" },
  { label: "For Agencies", href: "/#agencies" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Privacy Policy", href: "/privacy" },
];

const Footer = () => {
  const curYear = new Date().getFullYear();
  const tel = site.phone.replace(/\D/g, "");

  return (
    <footer className="bg-brand-night">
      <div className="mx-auto max-w-[82rem] px-5 pb-7 pt-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)]">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <Image src={logo} alt={`${site.shortName} logo`} width={42} />
              <span className="text-lg font-extrabold text-white">
                {site.name}
              </span>
            </div>
            <p className="text-[0.95rem] leading-relaxed text-brand-on-dark-muted">
              Licensed in-home physical therapy, delivered across Ohio.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-[#6F9488]">
              Services
            </h2>
            <ul className="flex flex-col gap-2.5">
              {services.map(({ href, shortTitle }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[0.95rem] text-brand-on-dark hover:text-white hover:underline"
                  >
                    {shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-[#6F9488]">
              Company
            </h2>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[0.95rem] text-brand-on-dark hover:text-white hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-[#6F9488]">
              Contact
            </h2>
            <address className="flex flex-col gap-2.5 not-italic">
              <a
                href={`tel:${tel}`}
                className="text-xl font-bold text-white hover:underline"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="break-all text-[0.95rem] text-brand-on-dark hover:text-white hover:underline"
              >
                {site.email}
              </a>
              <span className="text-[0.95rem] leading-relaxed text-brand-on-dark-muted">
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.region}{" "}
                {site.address.postalCode}
              </span>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[#22332F] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#6F9488]">
            © {curYear} {site.legalName}. All Rights Reserved
          </p>
          <p className="text-sm text-[#6F9488]">
            HIPAA and Medicare compliant · State-licensed therapists
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
