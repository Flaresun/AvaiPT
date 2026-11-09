import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";

import { site } from "@/lib/site";

/**
 * Hero background photograph.
 *
 * Set this to an imported image once one is licensed, e.g.
 *   import heroPhoto from "../assets/hero_home_visit.jpg";
 *   const HERO_PHOTO: StaticImageData | null = heroPhoto;
 *
 * Choose a wide landscape shot (2400px+) whose LEFT THIRD is calm and
 * darkish — the headline sits over it. A therapist steadying an older
 * adult in a real living room; eye level, not shot from above.
 *
 * Until then the hero renders as a deep teal field, which is a deliberate
 * look rather than a placeholder.
 */
const HERO_PHOTO: StaticImageData | null = null;

const assurances = [
  "State-licensed therapists",
  "Medicare & HIPAA compliant",
  "In-home & telehealth visits",
];

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-brand-teal-deep">
      {HERO_PHOTO && (
        <Image
          src={HERO_PHOTO}
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}

      {/* Scrim keeps the headline at AA over any photograph. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(100deg,rgba(14,28,25,0.95)_0%,rgba(14,28,25,0.88)_42%,rgba(14,28,25,0.55)_100%)]"
      />
      <div
        aria-hidden
        className="absolute -right-24 -top-28 size-[28rem] rounded-full border-[2.75rem] border-brand-sage/10"
      />

      <div className="relative mx-auto max-w-[82rem] px-5 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-44">
        <p className="mb-5 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-brand-sage">
          <span className="block h-0.5 w-7 bg-brand-clay" />
          In-home physical therapy across Ohio
        </p>

        <h1 className="max-w-[16ch] text-[2.75rem] font-extrabold leading-[1.04] tracking-tight text-white md:text-6xl xl:text-[4.75rem]">
          Therapy that comes to you.
        </h1>

        <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-brand-on-dark md:text-xl">
          Licensed therapists bring evaluations, post-operative rehab and
          balance training into your home — so recovery happens where you are
          most comfortable.
        </p>

        <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg bg-brand-clay px-8 text-lg font-semibold text-white transition-colors hover:bg-brand-clay-dark"
          >
            Request an in-home evaluation
            <ArrowRight size={19} aria-hidden />
          </Link>
          <a
            href={`tel:${site.phone.replace(/\D/g, "")}`}
            className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-white/50 bg-white/10 px-7 text-lg font-semibold text-white transition-colors hover:bg-white/20"
          >
            <Phone size={18} aria-hidden />
            Or call {site.phone}
          </a>
        </div>

        <ul className="mt-12 flex flex-col gap-3 border-t border-white/20 pt-6 sm:flex-row sm:flex-wrap sm:gap-x-8">
          {assurances.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 text-base font-medium text-brand-on-dark"
            >
              <Check size={17} className="shrink-0 text-brand-sage" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
