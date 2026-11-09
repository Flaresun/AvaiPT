import type { Metadata } from "next";

import Contact from "./component/Contact";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Request an in-home physical therapy consultation with AVAI PT. Tell us about you and when you're free, and we'll get back to you shortly.",
};

export default function ContactPage() {
  return <Contact />;
}
