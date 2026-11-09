import {
  Activity,
  ClipboardCheck,
  House,
  Move,
  TrendingUp,
  Video,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  href: string;
  desc: string;
  Icon: LucideIcon;
};

/**
 * The six services, in display order. Consumed by the navbar menus, the
 * homepage service grid and the footer, so each list stays in sync.
 *
 * `shortTitle` is what the footer and nav use where the full title is too
 * long to sit on one line.
 */
export const services: (Service & { shortTitle: string })[] = [
  {
    title: "In-Home Physical Therapy Evaluations",
    shortTitle: "In-Home Evaluations",
    href: "/servicesInHome",
    desc: "Comprehensive assessments in the comfort of your home, used to build a therapy plan around your needs.",
    Icon: House,
  },
  {
    title: "Follow-up and Post-Operative Rehab",
    shortTitle: "Post-Operative Rehab",
    href: "/servicesFollowUp",
    desc: "Focused sessions that support recovery after surgery and keep outcomes on track through consistent follow-ups.",
    Icon: Activity,
  },
  {
    title: "Neuromuscular Re-education & Balance Training",
    shortTitle: "Balance Training",
    href: "/servicesNeuromuscular",
    desc: "Therapy that rebuilds coordination, strength and balance — reducing the risk of falls and restoring confidence.",
    Icon: Move,
  },
  {
    title: "Telehealth Therapy Options",
    shortTitle: "Telehealth Therapy",
    href: "/servicesTelehealth",
    desc: "Secure remote sessions that bring professional guidance to your screen — useful between visits or when travel is hard.",
    Icon: Video,
  },
  {
    title: "Discharge Planning & Care Coordination",
    shortTitle: "Discharge Planning",
    href: "/servicesDischarge",
    desc: "Planning that keeps physicians, caregivers and family aligned as you move from active therapy to independent living.",
    Icon: ClipboardCheck,
  },
  {
    title: "Strength Training & Functional Conditioning",
    shortTitle: "Strength Training",
    href: "/servicesStrength",
    desc: "Customized programs that build the stability, endurance and strength that daily tasks actually demand.",
    Icon: TrendingUp,
  },
];
