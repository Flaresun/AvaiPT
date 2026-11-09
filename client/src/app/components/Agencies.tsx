import Link from "next/link";
import { ArrowRight, Check, Quote } from "lucide-react";

import { site } from "@/lib/site";

const points = [
  "PRN or ongoing contract options",
  "Documentation-ready for Medicare",
  "Rapid onboarding",
  "HIPAA and state-regulation compliant",
];

const Agencies = () => {
  return (
    <section id="agencies" className="bg-brand-cream">
      <div className="mx-auto grid max-w-[82rem] gap-12 px-5 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:px-10 lg:py-24">
        <div className="flex flex-col">
          <p className="mb-4 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-brand-teal">
            <span className="block h-0.5 w-7 bg-brand-clay" />
            For home health agencies
          </p>

          <h2 className="mb-5 max-w-[20ch] text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-ink md:text-[2.9rem]">
            Contract therapy coverage, without the staffing headache.
          </h2>

          <p className="mb-8 max-w-[46ch] text-lg leading-relaxed text-brand-muted">
            We take PRN and ongoing contracts across Ohio, with documentation
            your surveyors will not argue with.
          </p>

          <ul className="mb-9 grid gap-3.5 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <Check
                  size={19}
                  className="mt-1 shrink-0 text-brand-teal"
                  aria-hidden
                />
                <span className="text-base leading-snug text-brand-ink">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-lg bg-brand-teal px-7 text-base font-semibold text-white transition-colors hover:bg-brand-teal-dark"
            >
              Discuss a partnership
              <ArrowRight size={17} aria-hidden />
            </Link>
            <a
              href={`tel:${site.phone.replace(/\D/g, "")}`}
              className="inline-flex min-h-13 items-center justify-center rounded-lg border-[1.5px] border-brand-line bg-white px-7 text-base font-semibold text-brand-teal-dark transition-colors hover:border-brand-teal"
            >
              {site.phone}
            </a>
          </div>
        </div>

        <figure className="flex flex-col rounded-xl bg-brand-teal-deep p-9">
          <Quote
            size={36}
            className="mb-5 shrink-0 fill-brand-teal-line text-brand-teal-line"
            aria-hidden
          />
          <blockquote className="mb-7 text-xl leading-relaxed text-[#EAF2EE]">
            As an agency owner, partnering with AVAI PT has been seamless.
            Vivian&apos;s team consistently delivers excellent care to our
            clients while maintaining the highest level of professionalism and
            communication. Our patients love them.
          </blockquote>
          <figcaption className="mt-auto border-t border-brand-teal-line pt-5">
            <p className="text-base font-bold text-white">Robert S.</p>
            <p className="text-[0.95rem] text-brand-sage">
              Home health agency partner
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Agencies;
