/** Single source of truth for business details repeated across pages and metadata. */
export const site = {
  name: "AVAI PT",
  shortName: "AVAIPT",
  legalName: "AVAI PT LLC",
  tagline: "Elevating Home Health Physical Therapy",
  description:
    "AVAI PT delivers licensed in-home physical therapy across Ohio — evaluations, post-operative rehab, balance training, telehealth and discharge planning.",
  url: "https://avaipt.com",
  phone: "216-233-1973",
  email: "avaiptphysicaltherapy@gmail.com",
  address: {
    street: "26535 Chardon Road",
    locality: "Richmond Heights",
    region: "OH",
    postalCode: "44143",
  },
  counties: [
    "Cuyahoga",
    "Franklin",
    "Hamilton",
    "Summit",
    "Montgomery",
  ],
  gtmId: "GTM-WKCRL72N",
} as const;
