import { Check, Home, Lock, ShieldCheck } from "lucide-react";

const items = [
  { label: "State-licensed therapists", Icon: ShieldCheck },
  { label: "Medicare compliant", Icon: Check },
  { label: "HIPAA compliant", Icon: Lock },
  { label: "In-home & telehealth", Icon: Home },
];

const TrustBar = () => {
  return (
    <section className="bg-brand-teal">
      <div className="mx-auto flex max-w-[82rem] flex-wrap items-center justify-between gap-x-8 gap-y-4 px-5 py-6 lg:px-10">
        {items.map(({ label, Icon }) => (
          <div key={label} className="flex items-center gap-2.5">
            <Icon size={20} className="shrink-0 text-brand-sage" aria-hidden />
            <span className="text-base font-semibold text-white">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
