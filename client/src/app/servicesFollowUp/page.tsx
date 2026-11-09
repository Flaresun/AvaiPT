import type { Metadata } from "next";

import ServiceLayout from "../components/ServiceLayout";
import { servicePages } from "@/lib/servicePages";

export const metadata: Metadata = {
  title: "Follow-up and Post-Operative Rehab",
  description:
    "Post-surgery rehabilitation from AVAI PT that restores mobility, rebuilds strength and helps you return to daily activities with confidence.",
};

export default function Page() {
  return <ServiceLayout content={servicePages.followUp} />;
}
