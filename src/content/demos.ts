export interface DemoItem {
  id: string;
  name: string;
  description: string;
  categories: string[];
  industry: string;
  image?: string;
}

export const DEMOS: DemoItem[] = [
  {
    id: "clinic-website-erp",
    name: "Clinic Website & ERP System",
    description: "End-to-end digital clinic. Get a high-converting patient acquisition website seamlessly integrated with a complete ERP for appointments, patient records (EMR), billing, and automated WhatsApp follow-ups.",
    categories: ["Website", "ERP", "Automation"],
    industry: "Healthcare",
  },
  {
    id: "hospital-website-erp",
    name: "Hospital Website & ERP System",
    description: "Enterprise-grade hospital management. Professional website to attract patients, coupled with a robust ERP managing IPD/OPD, pharmacy, lab integration, bed management, and staff payroll.",
    categories: ["Website", "ERP", "Dashboard"],
    industry: "Healthcare",
  },
  {
    id: "gym-website-erp",
    name: "Gym Website & ERP System",
    description: "Grow your fitness center on autopilot. A high-energy lead generation website connected to an ERP that handles member subscriptions, biometric access, diet plans, and automated renewal reminders.",
    categories: ["Website", "ERP", "CRM"],
    industry: "Fitness",
  },
  {
    id: "school-website-erp",
    name: "School Website & ERP System",
    description: "Transform your educational institution. A beautiful website for admissions paired with an ERP for fee collection, attendance, parent-teacher communication, exams, and digital report cards.",
    categories: ["Website", "ERP", "Software"],
    industry: "Education",
  },
  {
    id: "coaching-website-erp",
    name: "Coaching Website & ERP System",
    description: "Scale your coaching business online. A student-attracting website integrated with an ERP featuring LMS (Learning Management System), online tests, video lectures, and batch scheduling.",
    categories: ["Website", "ERP", "LMS"],
    industry: "Education",
  },
  {
    id: "real-estate-website-erp",
    name: "Real Estate Website & ERP System",
    description: "Dominate your local property market. A premium property portfolio website with 3D tours, connected to a broker ERP for Facebook ad lead capture, site visit scheduling, and property management.",
    categories: ["Website", "ERP", "CRM"],
    industry: "Real Estate",
  },
  {
    id: "lawyer-website-erp",
    name: "Lawyer Website & ERP System",
    description: "Build authority and manage cases securely. A professional legal website to capture high-value clients, backed by an ERP for case document management, hearing date reminders, and secure client portals.",
    categories: ["Website", "ERP", "Software"],
    industry: "Legal",
  },
  {
    id: "ca-website-erp",
    name: "Chartered Accountant Website & ERP",
    description: "Streamline your financial practice. A trust-building website for client acquisition, paired with a CA ERP for secure document vaults, tax filing deadlines tracking, automated invoicing, and client messaging.",
    categories: ["Website", "ERP", "Automation"],
    industry: "Finance",
  }
];
