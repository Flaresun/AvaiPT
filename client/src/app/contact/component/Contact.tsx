"use client";
import React, { useState } from "react";
import { Phone } from "lucide-react";

import TrustBar from "@/app/components/TrustBar";
import { site } from "@/lib/site";

export default function ContactConsultForm({
  title = "Book a Consultation",
  subtitle = "Tell us a bit about you and when you're free. We'll get back to you shortly.",
  action = "/api/contact",
}: {
  title?: string;
  subtitle?: string;
  action?: string;
}) {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<SubmitState>({ state: "idle" });

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({...e, [key] : ""}))
  }

  function validate(values: FormState) {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!values.firstName.trim()) e.firstName = "First name is required.";
    if (!values.lastName.trim()) e.lastName = "Last name is required.";

    if (!values.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Enter a valid email.";

    if (!values.date) e.date = "Please choose a date.";
    else if (new Date(values.date) < todayLocal()) e.date = "Date cannot be today or in the past.";

    if (!values.time) e.time = "Please choose a time.";

    if (!values.message.trim()) e.message = "Please include a short message.";
    else if (values.message.trim().length < 10) e.message = "Message should be at least 10 characters.";

    return e;
  }

  function todayLocal() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const v = validate(form);
    setErrors(v);
    
    // Checks if there are any errors
    if (Object.keys(v).length > 0) return;

    setStatus({ state: "submitting" });

    const payload: ContactPayload = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      date: form.date,
      time: form.time,
      message: form.message.trim(),
      submittedAt: new Date().toISOString(),
    };

    try {

      const r = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await r.json().catch(() => ({}));
      const res: { ok: boolean; message?: string } = { ok: r.ok, message: data?.message };

      if (res.ok) {
        setStatus({ state: "success", message: res.message ?? "Thanks! We'll be in touch soon." });
        setForm({ firstName: "", lastName: "", email: "", date: "", time: "", message: "" });
      } else {
        setStatus({ state: "error", message: res.message ?? "Something went wrong. Please try again." });
      }
    } catch (err) {
      setStatus({ state: "error", message: "Network error. Please try again." ,error:err});
    }
  }


  const tel = site.phone.replace(/\D/g, "");

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-teal-deep">
        <div
          aria-hidden
          className="absolute -right-24 -top-28 size-[26rem] rounded-full border-[2.75rem] border-brand-sage/10"
        />
        <div className="relative mx-auto max-w-[82rem] px-5 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-40">
          <p className="mb-4 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-brand-sage">
            <span className="block h-0.5 w-7 bg-brand-clay" />
            Get in touch
          </p>
          <h1 className="max-w-[18ch] text-[2.25rem] font-extrabold leading-[1.06] tracking-tight text-white md:text-5xl xl:text-[3.5rem]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-brand-on-dark md:text-xl">
              {subtitle}
            </p>
          )}
          <a
            href={`tel:${tel}`}
            className="mt-8 inline-flex min-h-13 items-center justify-center gap-2.5 rounded-lg bg-brand-clay px-7 text-base font-semibold text-white transition-colors hover:bg-brand-clay-dark"
          >
            <Phone size={17} aria-hidden />
            Prefer to call? {site.phone}
          </a>
        </div>
      </section>

      <TrustBar />

      <div className="bg-brand-cream px-5 py-20 text-brand-ink lg:py-24">
        <div className="mx-auto max-w-3xl">

        <form onSubmit={handleSubmit} noValidate className="space-y-6 rounded-2xl border border-brand-line bg-white p-6 md:p-8">
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-brand-ink">First name</label>
              <input
                id="firstName"
                type="text"
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                onBlur={() => setErrors((e) => ({ ...e, ...validate(form) }))}
                required
                className="mt-1 min-h-12 w-full rounded-lg border border-brand-line bg-white px-4 py-2.5 text-base text-brand-ink focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-sage"
                placeholder="Jane"
              />
              {errors.firstName && <p className="mt-1 text-sm text-rose-600">{errors.firstName}</p>}
            </div>
            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-brand-ink">Last name</label>
              <input
                id="lastName"
                type="text"
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                onBlur={() => setErrors((e) => ({ ...e, ...validate(form) }))}
                required
                className="mt-1 min-h-12 w-full rounded-lg border border-brand-line bg-white px-4 py-2.5 text-base text-brand-ink focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-sage"
                placeholder="Doe"
              />
              {errors.lastName && <p className="mt-1 text-sm text-rose-600">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-brand-ink">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              onBlur={() => setErrors((e) => ({ ...e, ...validate(form) }))}
              required
              className="mt-1 min-h-12 w-full rounded-lg border border-brand-line bg-white px-4 py-2.5 text-base text-brand-ink focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-sage"
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-rose-600">{errors.email}</p>}
          </div>

          {/* Date + Time Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-sm font-semibold text-brand-ink">Date</label>
              <input
                id="date"
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                onBlur={() => setErrors((e) => ({ ...e, ...validate(form) }))}
                required
                min={new Date().toISOString().split("T")[0]}
                className="mt-1 min-h-12 w-full rounded-lg border border-brand-line bg-white px-4 py-2.5 text-base text-brand-ink focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-sage"
              />
              {errors.date && <p className="mt-1 text-sm text-rose-600">{errors.date}</p>}
            </div>
            {/* Time */}
            <div>
              <label htmlFor="time" className="block text-sm font-semibold text-brand-ink">Time</label>
              <input
                id="time"
                type="time"
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
                onBlur={() => setErrors((e) => ({ ...e, ...validate(form) }))}
                required
                className="mt-1 min-h-12 w-full rounded-lg border border-brand-line bg-white px-4 py-2.5 text-base text-brand-ink focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-sage"
              />
              {errors.time && <p className="mt-1 text-sm text-rose-600">{errors.time}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-brand-ink">Message</label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              onBlur={() => setErrors((e) => ({ ...e, ...validate(form) }))}
              required
              rows={6}
              placeholder="Briefly describe what you'd like to discuss."
              className="mt-1 min-h-12 w-full rounded-lg border border-brand-line bg-white px-4 py-2.5 text-base text-brand-ink focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-sage"
            />
            {errors.message && <p className="mt-1 text-sm text-rose-600">{errors.message}</p>}
          </div>

          {/* Submit */}
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs text-brand-muted">We respect your privacy. We&apos;ll only use your info to contact you about this consultation.</p>
            <button
              type="submit"
              disabled={status.state === "submitting"}
              className="inline-flex min-h-13 cursor-pointer items-center justify-center rounded-lg bg-brand-teal px-7 text-base font-semibold text-white transition-colors hover:bg-brand-teal-dark disabled:opacity-60"
            >
              {status.state === "submitting" ? <span>Sending…</span> : "Send request"}
            </button>
          </div>

          {/* Status Banner */}
          {status.state !== "idle" && status.message && (
            <div
              role="status"
              className={`mt-2 rounded-xl border px-4 py-3 text-sm ${
                status.state === "success"
                  ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                  : "border-rose-300 bg-rose-50 text-rose-800"
              }`}
            >
              {status.message}
            </div>
          )}
        </form>
        </div>
      </div>
    </>
  );
}

// Types
export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  date: string;  // YYYY-MM-DD
  time: string;  // HH:MM
  message: string;
  submittedAt: string;
};

type FormState = Omit<ContactPayload, "submittedAt">;

type SubmitState =
  | { state: "idle"; message?: string }
  | { state: "submitting"; message?: string }
  | { state: "success"; message: string }
  | { state: "error"; message: string, error?:unknown};
