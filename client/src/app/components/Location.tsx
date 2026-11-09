import Image from "next/image";

import map from "../assets/map.png";
import { site } from "@/lib/site";

const sections = [
  {
    heading: "Serving communities across Ohio",
    body: "We actively serve a growing list of counties throughout Ohio, including Cuyahoga, Franklin, Hamilton, Summit and Montgomery. To these communities we do our utmost to bring healing to their home.",
  },
  {
    heading: "Our mission in every county we serve",
    body: "Restore independence and improve quality of life, one home at a time. Whether patients are recovering from surgery, managing chronic conditions, or working to regain strength and balance, our therapists deliver expert care with compassion and clinical excellence.",
  },
  {
    heading: "Why clients trust us",
    body: "Inviting someone into your home for care is a big decision. Our licensed therapists are clinically skilled, empathetic and respectful, and we hold to HIPAA, Medicare and Ohio regulations so your care stays safe, compliant and personal.",
  },
];

const Location = () => {
  return (
    <section id="locations" className="bg-brand-cream">
      <div className="mx-auto max-w-[82rem] px-5 py-20 lg:px-10 lg:py-24">
        <p className="mb-4 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-brand-teal">
          <span className="block h-0.5 w-7 bg-brand-clay" />
          Where we work
        </p>
        <h2 className="mb-12 max-w-[20ch] text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-ink md:text-5xl">
          Active across {site.counties.length}+ Ohio counties.
        </h2>

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <Image
            src={map}
            alt="Map of the Ohio counties served by AVAI PT"
            className="h-auto w-full max-w-full"
          />

          <div className="flex flex-col gap-9">
            {sections.map(({ heading, body }) => (
              <div key={heading}>
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-brand-ink">
                  {heading}
                </h3>
                <p className="text-base leading-relaxed text-brand-muted">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
