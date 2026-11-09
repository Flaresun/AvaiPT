import Link from "next/link";
import { Phone } from "lucide-react";

import { site } from "@/lib/site";

const FinalCTA = () => {
  return (
    <section className="relative isolate overflow-hidden bg-brand-teal">
      <div
        aria-hidden
        className="absolute -right-16 -top-20 size-[24rem] rounded-full border-[2.75rem] border-brand-sage/15"
      />

      <div className="relative mx-auto max-w-[82rem] px-5 py-20 lg:px-10 lg:py-24">
        <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl">
          Ready when you are.
        </h2>
        <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-brand-on-dark md:text-xl">
          Call and talk to a person about what you need. If we are not the
          right fit, we will tell you that too.
        </p>

        <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
          <a
            href={`tel:${site.phone.replace(/\D/g, "")}`}
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-brand-clay px-8 text-xl font-bold text-white transition-colors hover:bg-brand-clay-dark"
          >
            <Phone size={22} aria-hidden />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex min-h-14 items-center justify-center rounded-lg border-[1.5px] border-white/50 bg-white/10 px-7 text-lg font-semibold text-white transition-colors hover:bg-white/20"
          >
            Request a visit online
          </Link>
        </div>

        <p className="mt-8 text-base text-brand-on-dark">
          Serving {site.counties.join(", ")} and more.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
