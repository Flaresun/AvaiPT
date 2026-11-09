import { Quote } from "lucide-react";

type Testimonial = { name: string; role: string; quote: string };

/**
 * Three of the six, chosen to cover a patient, a family member and a
 * serious recovery. The agency-owner quote lives in <Agencies />, next to
 * the readers it persuades.
 */
const testimonials: Testimonial[] = [
  {
    name: "Williams A.",
    role: "Geriatric patient",
    quote:
      "AVAI PT gave me back my independence. Vivian and her team treated me with so much kindness and patience. They never rushed my sessions and always made sure I understood every step. I feel stronger and more confident than I have in years.",
  },
  {
    name: "Angela M.",
    role: "Daughter of a patient",
    quote:
      "My mother received home therapy from AVAI PT, and I cannot thank them enough. The compassion they showed her — and us as a family — was unmatched. We always felt supported and informed throughout the entire process.",
  },
  {
    name: "Evelyn J.",
    role: "Stroke recovery",
    quote:
      "Recovering from my stroke was challenging, but AVAI PT made it possible. They created a plan that was tailored specifically for me, encouraged me when I felt discouraged, and celebrated every milestone. They truly care.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-brand-teal-deep">
      <div className="mx-auto max-w-[82rem] px-5 py-20 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-brand-sage">
              <span className="block h-0.5 w-7 bg-brand-clay" />
              In their words
            </p>
            <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl">
              What clients say.
            </h2>
          </div>
          <p className="max-w-[40ch] text-lg leading-relaxed text-brand-on-dark">
            Shared with permission. Names shortened at each client&apos;s
            request.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map(({ name, role, quote }) => (
            <figure
              key={name}
              className="flex flex-col rounded-xl bg-brand-teal-card p-8"
            >
              <Quote
                size={34}
                className="mb-4 shrink-0 fill-brand-teal-line text-brand-teal-line"
                aria-hidden
              />
              <blockquote className="mb-6 text-lg leading-relaxed text-[#EAF2EE]">
                {quote}
              </blockquote>
              <figcaption className="mt-auto border-t border-brand-teal-line pt-5">
                <p className="text-base font-bold text-white">{name}</p>
                <p className="text-[0.95rem] text-brand-sage">{role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
