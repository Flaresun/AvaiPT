import type { Metadata } from "next";

import ServiceLayout from "../components/ServiceLayout";
import { servicePages } from "@/lib/servicePages";

export const metadata: Metadata = {
  title: "Neuromuscular Re-education & Balance Training",
  description:
    "Targeted therapy from AVAI PT that retrains brain-to-muscle communication to improve coordination, stability and fall prevention.",
};

export default function Page() {
  return <ServiceLayout content={servicePages.neuromuscular} />;
}
