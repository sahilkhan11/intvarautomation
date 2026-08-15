export interface DemoItem {
  id: string;
  name: string;
  description: string;
  categories: string[];
  industry: string;
  image?: string;
}

export const DEMOS: DemoItem[] = [
  // Healthcare
  {
    id: "clinic-management",
    name: "Clinic Management System",
    description: "Patient management, appointments, billing and automated follow-ups.",
    categories: ["Website", "ERP", "Automation"],
    industry: "Healthcare",
  },
  {
    id: "dental-clinic-crm",
    name: "Dental Practice CRM",
    description: "Specialized CRM for dental clinics with visual charting and WhatsApp reminders.",
    categories: ["CRM", "Automation"],
    industry: "Healthcare",
  },
  {
    id: "pharmacy-pos",
    name: "Pharmacy POS & Inventory",
    description: "High-speed billing with batch tracking, expiry alerts, and supplier management.",
    categories: ["POS", "Inventory"],
    industry: "Healthcare",
  },
  
  // Education
  {
    id: "school-erp",
    name: "School ERP System",
    description: "Admissions, attendance, fee collection, and parent-teacher communication portal.",
    categories: ["ERP", "Website"],
    industry: "Education",
  },
  {
    id: "coaching-institute-lms",
    name: "Coaching Institute LMS",
    description: "Learning management system with online tests, video lectures, and student progress tracking.",
    categories: ["LMS", "App"],
    industry: "Education",
  },
  {
    id: "library-management",
    name: "Library Management System",
    description: "Automated book tracking, issues, returns, and digital cataloging.",
    categories: ["Software", "Automation"],
    industry: "Education",
  },

  // Fitness
  {
    id: "gym-management",
    name: "Gym Management System",
    description: "Membership tracking, biometric access integration, and automated renewal reminders.",
    categories: ["CRM", "Automation"],
    industry: "Fitness",
  },
  {
    id: "yoga-studio-booking",
    name: "Yoga Studio Booking App",
    description: "Class scheduling, instructor availability, and online payment gateway integration.",
    categories: ["App", "Website"],
    industry: "Fitness",
  },
  {
    id: "personal-trainer-dashboard",
    name: "Personal Trainer Dashboard",
    description: "Client diet plans, workout tracking, and progress visualization.",
    categories: ["App", "Dashboard"],
    industry: "Fitness",
  },

  // Hospitality & Food
  {
    id: "hotel-booking-engine",
    name: "Hotel Booking Engine",
    description: "Direct room bookings, channel management synchronization, and guest communications.",
    categories: ["Website", "ERP"],
    industry: "Hospitality",
  },
  {
    id: "restaurant-pos",
    name: "Restaurant POS System",
    description: "Billing, table management, Kitchen Order Tickets (KOT), and inventory tracking.",
    categories: ["POS", "Inventory"],
    industry: "Food & Beverage",
  },
  {
    id: "food-delivery-app",
    name: "Food Delivery Platform",
    description: "Customer ordering app, rider tracking app, and central restaurant dashboard.",
    categories: ["App", "Dashboard"],
    industry: "Food & Beverage",
  },
  {
    id: "cafe-loyalty-program",
    name: "Cafe Loyalty CRM",
    description: "Digital punch cards, reward points, and personalized promotional WhatsApp blasts.",
    categories: ["CRM", "Automation"],
    industry: "Food & Beverage",
  },

  // Retail & E-commerce
  {
    id: "supermarket-billing",
    name: "Supermarket Billing Software",
    description: "Barcode scanning, rapid checkout, thermal printing, and multi-store inventory.",
    categories: ["POS", "Inventory"],
    industry: "Retail",
  },
  {
    id: "boutique-ecommerce",
    name: "Boutique E-commerce Website",
    description: "Custom online store with size guides, dynamic pricing, and automated order updates.",
    categories: ["Website", "E-commerce"],
    industry: "Retail",
  },
  {
    id: "multi-vendor-marketplace",
    name: "Multi-Vendor Marketplace",
    description: "Platform for multiple sellers with commission splitting and vendor dashboards.",
    categories: ["Website", "App"],
    industry: "E-commerce",
  },
  {
    id: "jewelry-store-inventory",
    name: "Jewelry Store Inventory",
    description: "Track precious metals, stones, and read-made items with high security auditing.",
    categories: ["Inventory", "Software"],
    industry: "Retail",
  },

  // Real Estate
  {
    id: "real-estate-crm",
    name: "Real Estate Broker CRM",
    description: "Lead capture from Facebook ads, automated follow-ups, and site visit scheduling.",
    categories: ["CRM", "Automation"],
    industry: "Real Estate",
  },
  {
    id: "property-management",
    name: "Property Management Portal",
    description: "Tenant onboarding, rent collection, maintenance requests, and lease tracking.",
    categories: ["Website", "ERP"],
    industry: "Real Estate",
  },
  {
    id: "builder-portfolio",
    name: "Builder Portfolio Website",
    description: "Showcase ongoing and completed projects with 3D walkthroughs and floor plans.",
    categories: ["Website", "3D"],
    industry: "Real Estate",
  },

  // Manufacturing & Industrial
  {
    id: "manufacturing-erp",
    name: "Factory Manufacturing ERP",
    description: "Raw material tracking, production planning, quality control, and dispatch.",
    categories: ["ERP", "Dashboard"],
    industry: "Manufacturing",
  },
  {
    id: "warehouse-management",
    name: "Warehouse Management System",
    description: "Bin-level inventory tracking, barcode logistics, and automated reorder points.",
    categories: ["Inventory", "Software"],
    industry: "Logistics",
  },
  {
    id: "fleet-tracking",
    name: "Fleet Tracking Dashboard",
    description: "GPS integration, vehicle maintenance scheduling, and fuel consumption analytics.",
    categories: ["Dashboard", "App"],
    industry: "Logistics",
  },

  // Corporate & B2B
  {
    id: "hr-payroll-system",
    name: "HR & Payroll Software",
    description: "Employee onboarding, attendance tracking, leave management, and automated payroll.",
    categories: ["ERP", "Software"],
    industry: "Corporate",
  },
  {
    id: "b2b-lead-generation",
    name: "B2B Lead Gen Portal",
    description: "Corporate website with whitepapers, webinar signups, and automated email nurturing.",
    categories: ["Website", "Automation"],
    industry: "B2B Services",
  },
  {
    id: "ticket-support-system",
    name: "Customer Support Helpdesk",
    description: "Ticket routing, SLA tracking, knowledge base, and automated customer responses.",
    categories: ["Software", "CRM"],
    industry: "Corporate",
  },
  {
    id: "event-management",
    name: "Event Management Platform",
    description: "Ticketing, attendee registration, QR code check-ins, and speaker schedules.",
    categories: ["Website", "App"],
    industry: "Events",
  },

  // Miscellaneous
  {
    id: "salon-booking",
    name: "Salon & Spa Booking",
    description: "Stylist scheduling, service packages, and automated appointment reminders.",
    categories: ["App", "Automation"],
    industry: "Beauty",
  },
  {
    id: "travel-agency-crm",
    name: "Travel Agency CRM",
    description: "Itinerary builder, flight/hotel booking tracking, and visa document management.",
    categories: ["CRM", "Software"],
    industry: "Travel",
  },
  {
    id: "ngo-donor-management",
    name: "NGO Donor Management",
    description: "Donation tracking, tax receipt generation, and recurring contribution setups.",
    categories: ["Website", "CRM"],
    industry: "Non-Profit",
  }
];
