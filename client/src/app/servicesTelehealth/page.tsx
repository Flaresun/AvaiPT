import type { Metadata } from "next";

import ServiceLayout from "../components/ServiceLayout";
import { servicePages } from "@/lib/servicePages";

export const metadata: Metadata = {
  title: "Telehealth Therapy Options",
  description:
    "Secure, HIPAA-compliant virtual physical therapy sessions with licensed AVAI PT therapists, from the comfort of your home.",
};

export default function Page() {
  return <ServiceLayout content={servicePages.telehealth} />;
}
