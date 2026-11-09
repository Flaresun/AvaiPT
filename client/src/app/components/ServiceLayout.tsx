import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";

import TrustBar from "./TrustBar";
import FinalCTA from "./FinalCTA";
import type { ListBlock, ServiceContent } from "@/lib/servicePages";
import { site } from "@/lib/site";

/** Section eyebrow: short rule plus label, as used across the homepage. */
const Eyebrow = ({ children, onDark }: { children: string; onDark?: boolean }) => (
  <p
    className={`mb-4 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.08em] ${
      onDark ? "text-brand-sage" : "text-brand-teal"
    }`}
  >
    <span className="block h-0.5 w-7 bg-brand-clay" />
    {children}
  </p>
);

const BulletGrid = ({ heading, items }: ListBlock) => (
  <>
    <h2 className="mb-8 max-w-[22ch] text-3xl font-extrabold leading-[1.1] tracking-tight text-brand-ink md:text-4xl">
      {heading}
    </h2>
    <ul className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3.5 rounded-xl bg-white p-6"
        >
          <Check size={20} className="mt-0.5 shrink-0 text-brand-teal" aria-hidden />
          <span className="text-base leading-relaxed text-brand-ink">{item}</span>
        </li>
      ))}
    </ul>
  </>
);

const ServiceLayout = ({ content }: { content: ServiceContent }) => {
  const {
    eyebrow,
    title,
    lede,
    image,
    imageAlt,
    intro,
    second,
    steps,
    lists,
    whyChoose,
    ctaLabel,
  } = content;

  const tel = site.phone.replace(/\D/g, "");

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-teal-deep">
        <div
          aria-hidden
          className="absolute -right-24 -top-28 size-[26rem] rounded-full border-[2.75rem] border-brand-sage/10"
        />
        <div className="relative mx-auto max-w-[82rem] px-5 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-40">
          <Eyebrow onDark>{eyebrow}</Eyebrow>
          <h1 className="max-w-[20ch] text-[2.25rem] font-extrabold leading-[1.06] tracking-tight text-white md:text-5xl xl:text-[3.5rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-brand-on-dark md:text-xl">
            {lede}
          </p>
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-lg bg-brand-clay px-7 text-base font-semibold text-white transition-colors hover:bg-brand-clay-dark"
            >
              {ctaLabel}
              <ArrowRight size={17} aria-hidden />
            </Link>
            <a
              href={`tel:${tel}`}
              className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-white/50 bg-white/10 px-7 text-base font-semibold text-white transition-colors hover:bg-white/20"
            >
              <Phone size={17} aria-hidden />
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Intro, with the one supporting photograph */}
      <section className="bg-brand-cream">
        <div className="mx-auto grid max-w-[82rem] items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
          <div>
            <h2 className="mb-5 max-w-[22ch] text-3xl font-extrabold leading-[1.1] tracking-tight text-brand-ink md:text-4xl">
              {intro.heading}
            </h2>
            <p className="text-lg leading-relaxed text-brand-muted">
              {intro.body}
            </p>
          </div>
          <Image
            src={image}
            alt={imageAlt}
            className="aspect-[4/3] w-full max-w-full rounded-xl object-cover"
            sizes="(min-width: 1024px) 40rem, 100vw"
          />
        </div>
      </section>

      {second && (
        <section className="bg-brand-sage-pale">
          <div className="mx-auto max-w-[82rem] px-5 py-20 lg:px-10 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <h2 className="max-w-[20ch] text-3xl font-extrabold leading-[1.1] tracking-tight text-brand-ink md:text-4xl">
                {second.heading}
              </h2>
              <p className="text-lg leading-relaxed text-brand-muted">
                {second.body}
              </p>
            </div>
          </div>
        </section>
      )}

      {steps && (
        <section className="bg-brand-cream">
          <div className="mx-auto max-w-[82rem] px-5 py-20 lg:px-10 lg:py-24">
            <h2 className="mb-10 max-w-[22ch] text-3xl font-extrabold leading-[1.1] tracking-tight text-brand-ink md:text-4xl">
              {steps.heading}
            </h2>
            <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {steps.items.map((item, i) => (
                <li
                  key={item}
                  className="rounded-xl border border-brand-line border-t-[3px] border-t-brand-teal bg-white p-7"
                >
                  <p className="mb-3 text-sm font-extrabold tracking-[0.08em] text-brand-clay">
                    STEP {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="text-base leading-relaxed text-brand-ink">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {lists.map((list, i) => (
        <section
          key={list.heading}
          className={i % 2 === 0 ? "bg-brand-sage-pale" : "bg-brand-cream"}
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 lg:px-10 lg:py-24">
            <BulletGrid {...list} />
          </div>
        </section>
      ))}

      {/* Why choose */}
      <section className="bg-brand-teal-deep">
        <div className="mx-auto max-w-[82rem] px-5 py-20 lg:px-10 lg:py-24">
          <Eyebrow onDark>Why AVAI PT</Eyebrow>
          <p className="max-w-[46ch] text-2xl leading-relaxed text-white md:text-3xl md:leading-relaxed">
            {whyChoose}
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
};

export default ServiceLayout;
