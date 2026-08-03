export type Project = {
  id: string;
  title: string;
  oneLiner: string;
  imageUrl: string;
  slug: string;
  tags: string[];
  year: number;
};

export const projects: Project[] = [
  {
    id: "lali-super",
    title: "Lali Super",
    oneLiner: "Automated inventory & supplier coordination for retail.",
    imageUrl: "/images/concept 1.png",
    slug: "lali-super",
    tags: ["Automation", "Retail"],
    year: 2026,
  },
  {
    id: "kisanbazaar",
    title: "KisanBazaar",
    oneLiner: "Direct-to-consumer agri-tech platform & app.",
    imageUrl: "/images/concept 2.png",
    slug: "kisanbazaar",
    tags: ["Web Dev", "App Dev"],
    year: 2025,
  },
  {
    id: "fraud-detection-ml",
    title: "Fraud Detection ML",
    oneLiner: "Real-time transaction analysis and AI flagging.",
    imageUrl: "/images/concept 3.png",
    slug: "fraud-detection-ml",
    tags: ["AI", "Finance"],
    year: 2026,
  },
  {
    id: "modulus-smart-school",
    title: "Modulus Smart School",
    oneLiner: "Complete campus digitization and student management system.",
    imageUrl: "/images/concept 4.png",
    slug: "modulus-smart-school",
    tags: ["Web Dev", "Automation"],
    year: 2025,
  },
];
