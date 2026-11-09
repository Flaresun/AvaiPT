import type { Metadata } from "next";

import Privacy from "./components/Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How AVAI PT LLC collects, uses, discloses and protects your personal health information under HIPAA and applicable state law.",
};

export default function PrivacyPage() {
  return <Privacy />;
}
