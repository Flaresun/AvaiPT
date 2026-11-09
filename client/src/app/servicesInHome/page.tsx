import type { Metadata } from "next";

import ServiceLayout from "../components/ServiceLayout";
import { servicePages } from "@/lib/servicePages";

export const metadata: Metadata = {
  title: "In-Home Physical Therapy Evaluations",
  description:
    "A licensed AVAI PT therapist visits your home to assess your mobility, review your history and build a personalized care plan.",
};

export default function Page() {
  return <ServiceLayout content={servicePages.inHome} />;
}
