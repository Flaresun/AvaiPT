import type { Metadata } from "next";

import ServiceLayout from "../components/ServiceLayout";
import { servicePages } from "@/lib/servicePages";

export const metadata: Metadata = {
  title: "Strength Training & Functional Conditioning",
  description:
    "Customized strength and functional conditioning programs from AVAI PT that rebuild stability, endurance and everyday independence.",
};

export default function Page() {
  return <ServiceLayout content={servicePages.strength} />;
}
