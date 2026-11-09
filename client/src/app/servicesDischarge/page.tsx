import type { Metadata } from "next";

import ServiceLayout from "../components/ServiceLayout";
import { servicePages } from "@/lib/servicePages";

export const metadata: Metadata = {
  title: "Discharge Planning & Care Coordination",
  description:
    "AVAI PT coordinates your transition from active therapy to independent living, aligning physicians, caregivers and family on next steps.",
};

export default function Page() {
  return <ServiceLayout content={servicePages.discharge} />;
}
