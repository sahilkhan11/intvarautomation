export type Project = {
  id: string;
  title: string;
  oneLiner: string;
  problem?: string;
  approach?: string;
  result?: string;
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
    problem: "The client was managing thousands of SKUs across multiple locations using disjointed Excel sheets. Supplier coordination was manual via phone calls, leading to frequent stockouts and 30% overhead in order processing times.",
    approach: "We implemented a centralized inventory dashboard integrated directly into their POS. We then built a WhatsApp-based AI bot that automatically messages suppliers when stock hits reorder levels, confirming quantities and delivery ETAs without human intervention.",
    result: "Reduced stockouts by 85% within the first two months. The automated supplier coordination saved the purchasing team over 15 hours per week, allowing them to focus on vendor negotiation rather than manual follow-ups.",
    imageUrl: "/images/concept 1.png",
    slug: "lali-super",
    tags: ["Automation", "Retail"],
    year: 2026,
  },
  {
    id: "kisanbazaar",
    title: "KisanBazaar",
    oneLiner: "Direct-to-consumer agri-tech platform & app.",
    problem: "Local farmers were struggling to reach end consumers directly, relying on middlemen who took massive commissions. The client needed a platform that was incredibly simple to use for rural farmers while providing a premium shopping experience for urban buyers.",
    approach: "We developed a lightweight, high-performance PWA (Progressive Web App) using Next.js. We integrated a multi-language voice-to-text feature for the farmer dashboard and a WhatsApp notification system to alert buyers about fresh harvests in their area.",
    result: "Onboarded over 500 local farmers in the first 6 months. By eliminating middlemen, farmers saw a 40% increase in profit margins, while end-consumers enjoyed fresh produce delivered within 24 hours.",
    imageUrl: "/images/concept 2.png",
    slug: "kisanbazaar",
    tags: ["Web Dev", "App Dev"],
    year: 2025,
  },
  {
    id: "fraud-detection-ml",
    title: "Fraud Detection ML",
    oneLiner: "Real-time transaction analysis and AI flagging.",
    problem: "A regional fintech firm was experiencing a 15% false-positive rate on transaction blocks, frustrating legitimate customers. Their existing rules-based system couldn't adapt to new, sophisticated fraud patterns quickly enough.",
    approach: "We deployed a custom machine learning model trained on their historical transaction data. We built an API microservice that scores every transaction in real-time (<50ms latency) and integrated a human-in-the-loop dashboard for edge cases.",
    result: "Dropped false-positive blocks to under 2%. The system successfully identified a coordinated fraud ring within its first week of deployment, saving the firm an estimated ₹4.5M in potential chargebacks.",
    imageUrl: "/images/concept 3.png",
    slug: "fraud-detection-ml",
    tags: ["AI", "Finance"],
    year: 2026,
  },
  {
    id: "modulus-smart-school",
    title: "Modulus Smart School",
    oneLiner: "Complete campus digitization and student management system.",
    problem: "The institution relied on paper-based attendance, manual fee collection, and physical notice boards. Parent-teacher communication was fragmented across multiple unofficial WhatsApp groups, causing massive administrative headaches.",
    approach: "We engineered a secure, centralized web portal. Key features included automated fee reminders via SMS/WhatsApp, digital attendance tracking using RFID, and a dedicated parent dashboard for academic progress and official announcements.",
    result: "Reduced administrative paperwork by 90%. Fee collection delays dropped by 60% due to automated reminders, and the school reported a dramatic increase in parent satisfaction due to the transparent communication portal.",
    imageUrl: "/images/concept 4.png",
    slug: "modulus-smart-school",
    tags: ["Web Dev", "Automation"],
    year: 2025,
  },
];
