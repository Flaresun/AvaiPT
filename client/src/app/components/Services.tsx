import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/lib/services";
import { site } from "@/lib/site";

const Services = () => {
  return (
    <section id="services" className="bg-brand-sage-pale">
      <div className="mx-auto max-w-[82rem] px-5 py-20 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-brand-teal">
              <span className="block h-0.5 w-7 bg-brand-clay" />
              What we do
            </p>
            <h2 className="max-w-[20ch] text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-ink md:text-5xl">
              Six ways we help you move again.
            </h2>
          </div>
          <a
            href={`tel:${site.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-2 text-lg font-semibold text-brand-teal hover:text-brand-teal-dark"
          >
            Not sure which you need? Call us
            <ArrowRight size={18} aria-hidden />
          </a>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ href, title, desc, Icon }) => (
            <article
              key={href}
              className="flex flex-col gap-3.5 rounded-xl bg-white p-8"
            >
              <span className="flex size-13 items-center justify-center rounded-xl bg-brand-sage-pale">
                <Icon size={24} className="text-brand-teal" aria-hidden />
              </span>
              <h3 className="text-xl font-bold leading-snug tracking-tight text-brand-ink">
                {title}
              </h3>
              <p className="text-base leading-relaxed text-brand-muted">
                {desc}
              </p>
              <Link
                href={href}
                className="mt-auto inline-flex items-center gap-1.5 pt-3 text-base font-semibold text-brand-teal hover:text-brand-teal-dark"
              >
                Explore
                <ArrowRight size={15} aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
