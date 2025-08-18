"use client";
import React, { useState } from "react";

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


  return (
    <div className="min-h-screen mt-10 w-full bg-gradient-to-br text-slate-800 py-12 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h1>
          {subtitle && <p className="mt-2 text-slate-600 max-w-xl mx-auto">{subtitle}</p>}
        </div>

        <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6">
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">First name</label>
              <input
                id="firstName"
                type="text"
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                onBlur={() => setErrors((e) => ({ ...e, ...validate(form) }))}
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2.5"
                placeholder="Jane"
              />
              {errors.firstName && <p className="mt-1 text-sm text-rose-600">{errors.firstName}</p>}
            </div>
            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">Last name</label>
              <input
                id="lastName"
                type="text"
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                onBlur={() => setErrors((e) => ({ ...e, ...validate(form) }))}
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2.5"
                placeholder="Doe"
              />
              {errors.lastName && <p className="mt-1 text-sm text-rose-600">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              onBlur={() => setErrors((e) => ({ ...e, ...validate(form) }))}
              required
              className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2.5"
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-rose-600">{errors.email}</p>}
          </div>

          {/* Date + Time Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-slate-700">Date</label>
              <input
                id="date"
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                onBlur={() => setErrors((e) => ({ ...e, ...validate(form) }))}
                required
                min={new Date().toISOString().split("T")[0]}
                className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2.5"
              />
              {errors.date && <p className="mt-1 text-sm text-rose-600">{errors.date}</p>}
            </div>
            {/* Time */}
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-slate-700">Time</label>
              <input
                id="time"
                type="time"
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
                onBlur={() => setErrors((e) => ({ ...e, ...validate(form) }))}
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2.5"
              />
              {errors.time && <p className="mt-1 text-sm text-rose-600">{errors.time}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              onBlur={() => setErrors((e) => ({ ...e, ...validate(form) }))}
              required
              rows={6}
              placeholder="Briefly describe what you'd like to discuss."
              className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2.5"
            />
            {errors.message && <p className="mt-1 text-sm text-rose-600">{errors.message}</p>}
          </div>

          {/* Submit */}
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs text-slate-500">We respect your privacy. We&apos;ll only use your info to contact you about this consultation.</p>
            <button
              type="submit"
              disabled={status.state === "submitting"}
              className={`cursor-pointer rounded-2xl bg-slate-900 px-5 py-3 text-white font-medium shadow-lg disabled:opacity-60`}
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
