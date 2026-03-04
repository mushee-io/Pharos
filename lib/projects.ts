export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  verified: boolean;
  creatorHandle: string;
  creatorScore: number;
  milestones: { title: string; note: string; done: boolean }[];
  links: { website: string; twitter: string };
};

export const projects: Project[] = [
  {
    slug: "aurum-rwa-vault",
    name: "Aurum RWA Vault",
    tagline: "Tokenized real-world assets with transparent custody proofs.",
    description:
      "Aurum helps issuers register assets, publish custody attestations, and mint compliant tokens. Designed for calm UX: clear disclosures, verifiable records, and safe defaults for integrations.",
    tags: ["RWA", "Infrastructure", "Verified"],
    verified: true,
    creatorHandle: "aurum.pharos",
    creatorScore: 88,
    milestones: [
      { title: "Asset registry MVP", note: "On-chain registry + metadata schema", done: true },
      { title: "Custody attestation flow", note: "Publish attestations with audit links", done: false },
      { title: "Issuance templates", note: "Mint & manage RWA tokens safely", done: false },
    ],
    links: { website: "https://mushee.cloud", twitter: "https://x.com/m" },
  },
  {
    slug: "lumenpay",
    name: "LumenPay",
    tagline: "Fraud-resistant payments with reputation-aware limits.",
    description:
      "LumenPay is a payment rail concept that leverages Mushee ID signals to reduce fraud and improve reliability. Think: reputation-aware payment limits, low-chargeback scoring, and user-friendly receipts.",
    tags: ["Payments", "DeFi", "New"],
    verified: true,
    creatorHandle: "lumen.pharos",
    creatorScore: 81,
    milestones: [
      { title: "Wallet reputation integration", note: "Use Mushee ID score for limits", done: true },
      { title: "Receipt + dispute flow", note: "Clear receipts, clean disputes", done: false },
      { title: "Merchant toolkit", note: "Plugins + APIs for apps", done: false },
    ],
    links: { website: "https://mushee.cloud", twitter: "https://x.com/m" },
  },
  {
    slug: "calm-lend",
    name: "CalmLend",
    tagline: "Reputation-based lending with human-readable risk labels.",
    description:
      "CalmLend is a DeFi lending concept where access and limits adapt to wallet reputation and contribution history — built to be understandable and transparent, not chaotic.",
    tags: ["DeFi", "Infrastructure", "Trending"],
    verified: false,
    creatorHandle: "calm.pharos",
    creatorScore: 67,
    milestones: [
      { title: "Risk labels v1", note: "Explainable risk tags for positions", done: true },
      { title: "Reputation-gated pools", note: "Pools with safe defaults", done: false },
      { title: "Audits & disclosures", note: "Publish and verify audits", done: false },
    ],
    links: { website: "https://mushee.cloud", twitter: "https://x.com/m" },
  },
  {
    slug: "infra-index",
    name: "Infra Index",
    tagline: "A discovery layer for Pharos infra teams and APIs.",
    description:
      "Infra Index catalogs infrastructure projects with documentation links, uptime signals, and versioned announcements — so builders can choose reliable primitives quickly.",
    tags: ["Infrastructure", "Public Goods"],
    verified: true,
    creatorHandle: "index.pharos",
    creatorScore: 84,
    milestones: [
      { title: "Registry + tags", note: "Searchable registry of infra projects", done: true },
      { title: "Status signals", note: "Uptime and version badges", done: false },
      { title: "Contributor rewards", note: "Reward maintenance and reviews", done: false },
    ],
    links: { website: "https://mushee.cloud", twitter: "https://x.com/m" },
  },
];

export const projectsBySlug: Record<string, Project> = Object.fromEntries(projects.map((p) => [p.slug, p]));
