// src/data/certifications.ts

export type Certification = {
  id: string;
  title: string;
  domain: string;
  level: 'Foundation' | 'Intermediate' | 'Advanced';
  description: string;
  image: string; // Path to a representative image or badge
  detailsUrl: string;
  isFeatured: boolean;
  tags: string[];
};

export const certifications: Certification[] = [
  {
    id: "cxaicsp",
    title: "CxAICSP — Certified Applied AI Cybersecurity Professional",
    domain: "AI Security",
    level: "Advanced",
    description: "Validate your expertise in applying AI to solve complex cybersecurity challenges.",
    image: "/images/cxaicsp-badge.svg",
    detailsUrl: "/certification/cxaicsp",
    isFeatured: true,
    tags: ["AI", "Cybersecurity", "Machine Learning"]
  },
  {
    id: "cxairmp",
    title: "CxAIRMP — Certified AI Risk Management Professional",
    domain: "Risk & Compliance",
    level: "Advanced",
    description: "Demonstrate your ability to manage and mitigate risks associated with AI systems.",
    image: "/images/cxairmp-badge.svg",
    detailsUrl: "/certification/cxairmp",
    isFeatured: true,
    tags: ["AI", "Risk Management", "Governance"]
  }
];