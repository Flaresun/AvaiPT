const steps = [
  {
    title: "Call or request a visit",
    body: "Tell us what is going on. We confirm your coverage, answer questions about Medicare or your plan, and book a time that works.",
  },
  {
    title: "We come to your home",
    body: "A licensed therapist assesses your strength, balance and range of motion — and checks your actual rooms, stairs and thresholds for hazards.",
  },
  {
    title: "You get a plan, and a therapist",
    body: "A therapy plan built around your goals and your home, with the same therapist showing up for it and adjusting as you progress.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-brand-cream">
      <div className="mx-auto max-w-[82rem] px-5 py-20 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-brand-teal">
              <span className="block h-0.5 w-7 bg-brand-clay" />
              Getting started
            </p>
            <h2 className="max-w-[18ch] text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-ink md:text-5xl">
              It starts with one phone call.
            </h2>
          </div>
          <p className="max-w-[44ch] text-lg leading-relaxed text-brand-muted">
            No referral needed to ask a question. We will tell you plainly
            whether we can help and what it costs.
          </p>
        </div>

        <ol className="mt-12 grid gap-7 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-xl border border-brand-line border-t-[3px] border-t-brand-teal bg-white p-8"
            >
              <p className="mb-4 text-sm font-extrabold tracking-[0.08em] text-brand-clay">
                STEP {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-brand-ink">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-brand-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
