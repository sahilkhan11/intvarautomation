export interface ServiceCapability {
  name: string;
}

export interface ServicePillar {
  id: string;
  order: number;
  emoji: string;
  title: string;
  outcome: string;
  isFlagship: boolean;
  description: string;
  capabilities: ServiceCapability[];
  result: string;
  pricing?: {
    label: string;
    rangeLow: number;
    rangeHigh: number;
    currency: "INR";
    note: string;
  };
  slug: string;
  link?: string;
  linkText?: string;
}

export const servicePillars: ServicePillar[] = [
  {
    id: "erp-intvar",
    order: 1,
    emoji: "🏫",
    title: "ERP Intvar for Schools",
    outcome: "Complete school management with offline and online sync.",
    isFlagship: true,
    description: "Designed exclusively for schools and coaching institutes in Rajasthan. Manage student records, staff attendance, and fee tracking without manual register entries. Works offline during internet cuts and synchronizes seamlessly when back online. Principals can query student details and send pending fee alerts on WhatsApp directly.",
    capabilities: [
      { name: "Offline & Cloud Sync" },
      { name: "WhatsApp Fee Alerts" },
      { name: "Student & Staff Attendance" },
      { name: "Fee Receipt Generation" },
      { name: "Report Card Automation" },
      { name: "Principal Voice/Chat Queries" }
    ],
    result: "Schools eliminate uncollected fee leakage and save over 15 hours of manual office work every week.",
    pricing: {
      label: "Complete Implementation",
      rangeLow: 10000,
      rangeHigh: 40000,
      currency: "INR",
      note: "One-time cost based on student volume and modules needed"
    },
    slug: "erp-intvar",
    link: "https://erpintvar.online",
    linkText: "Visit ERP Intvar"
  },
  {
    id: "restaurant-billing",
    order: 2,
    emoji: "🍽️",
    title: "Restaurant POS & Direct Online Ordering",
    outcome: "Fast billing software plus your own commission-free ordering website.",
    isFlagship: true,
    description: "Equip your restaurant, cafe, or cloud kitchen with high-speed touchscreen billing and a custom branded online ordering website. Stop handing over 20% to 30% of your margins to third-party delivery aggregators. Your customers scan a QR code or order directly from your website with instant UPI payments.",
    capabilities: [
      { name: "Fast POS Billing & KOT" },
      { name: "Commission-Free Ordering Website" },
      { name: "QR Code Table Menus" },
      { name: "Direct UPI Payments (0% Cut)" },
      { name: "Kitchen Display System" },
      { name: "Ingredient & Inventory Tracking" }
    ],
    result: "Restaurants save Rs 20,000 to Rs 60,000 every month in commissions while retaining direct customer phone numbers.",
    pricing: {
      label: "Lifetime POS & Website License",
      rangeLow: 15000,
      rangeHigh: 40000,
      currency: "INR",
      note: "One-time lifetime cost. No recurring monthly commission."
    },
    slug: "restaurant-billing",
    link: "/contact",
    linkText: "Request Demo"
  },
  {
    id: "ai-automation",
    order: 3,
    emoji: "⚙️",
    title: "WhatsApp & Business Workflow Automation",
    outcome: "Instant 24/7 lead responses and zero manual spreadsheet data entry.",
    isFlagship: false,
    description: "Stop losing customers because nobody answered the phone or replied to a WhatsApp message in time. We set up automated response systems that qualify inbound leads, answer pricing questions, book clinic appointments, and sync every contact straight into your spreadsheet or CRM in seconds.",
    capabilities: [
      { name: "Official WhatsApp Business API" },
      { name: "Instant Missed-Call Follow-ups" },
      { name: "Clinic Appointment Booking" },
      { name: "Lead Sync to Google Sheets" },
      { name: "Automated Payment Reminders" },
      { name: "Customer Feedback Collection" }
    ],
    result: "Lead response times drop from hours to 10 seconds, doubling consultation bookings for local businesses.",
    pricing: {
      label: "Workflow Automation Setup",
      rangeLow: 15000,
      rangeHigh: 80000,
      currency: "INR",
      note: "Depends on workflow count and tool integrations"
    },
    slug: "business-automation",
    link: "/services/business-automation",
    linkText: "Explore Automation"
  },
  {
    id: "custom-software",
    order: 4,
    emoji: "💻",
    title: "High-Performance Websites & Custom Software",
    outcome: "Websites that rank on Google and software built for your exact workflow.",
    isFlagship: false,
    description: "Move beyond slow, generic WordPress themes. We code custom Next.js websites and Android applications engineered to load in under one second. Whether you need a local clinic booking website, a real estate portal, or an internal factory inventory app in Bhiwadi, we engineer it from scratch.",
    capabilities: [
      { name: "Custom Next.js & React Websites" },
      { name: "Native & Flutter Android Apps" },
      { name: "Local SEO & Google Maps Linking" },
      { name: "Factory Inventory Dashboards" },
      { name: "Secure Customer Portals" }
    ],
    result: "Websites achieve 90+ Google PageSpeed scores and outrank competitors in local search.",
    pricing: {
      label: "Custom Engineering",
      rangeLow: 25000,
      rangeHigh: 100000,
      currency: "INR",
      note: "Tailored to your feature set and database architecture"
    },
    slug: "website-development",
    link: "/services/website-development",
    linkText: "View Web Services"
  }
];
