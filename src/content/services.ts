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
}

export const servicePillars: ServicePillar[] = [
  {
    id: "ai-marketing",
    order: 1,
    emoji: "🚀",
    title: "AI Marketing",
    outcome: "Become the business AI recommends.",
    isFlagship: true,
    description: "We help your local business show up when customers ask ChatGPT, Gemini, Claude, or Perplexity for the best in your category. By combining traditional local SEO, reputation management, and entity optimization, we ensure AI platforms understand and recommend your business.",
    capabilities: [
      { name: "AI Visibility Optimization" },
      { name: "AI Search Optimization (GEO)" },
      { name: "Local SEO" },
      { name: "Google Business Profile Optimization" },
      { name: "Reputation Management" },
      { name: "Review Generation" },
      { name: "Knowledge Graph & Entity Optimization" },
      { name: "AI-Friendly Website Optimization" },
      { name: "Authority Content Creation" },
      { name: "Competitor AI Visibility Analysis" }
    ],
    result: "When someone asks an AI assistant for the best business in a category, your business has a stronger chance of being the one it recommends.",
    pricing: {
      label: "Complete AI Marketing Package",
      rangeLow: 21000,
      rangeHigh: 40000,
      currency: "INR",
      note: "Scope depends on business size, number of locations, and current online presence"
    },
    slug: "ai-marketing"
  },
  {
    id: "ai-automation",
    order: 2,
    emoji: "⚙️",
    title: "AI Automation",
    outcome: "Automate repetitive work and improve efficiency.",
    description: "Stop wasting time on manual data entry and missed follow-ups. We build intelligent systems that save your business hours per week, speed up customer response times, and run your back-office on autopilot.",
    isFlagship: false,
    capabilities: [
      { name: "AI Chatbots" },
      { name: "WhatsApp Automation" },
      { name: "CRM Automation" },
      { name: "Sales Automation" },
      { name: "Lead Management" },
      { name: "Appointment Booking" },
      { name: "Email Automation" },
      { name: "Internal Business Automation" },
      { name: "Workflow Automation" },
      { name: "Document Processing" },
      { name: "AI Assistants" }
    ],
    result: "Businesses save hours every week while providing faster service.",
    slug: "ai-automation"
  },
  {
    id: "custom-software",
    order: 3,
    emoji: "💻",
    title: "Custom Software Development",
    outcome: "Websites, apps, and business systems built for growth.",
    description: "Generic tools only take you so far. We engineer tailored software solutions—from lead-generating websites to robust internal management systems—designed specifically to fit and scale with your unique business operations.",
    isFlagship: false,
    capabilities: [
      { name: "Business Websites" },
      { name: "Landing Pages" },
      { name: "Corporate Websites" },
      { name: "Android Apps" },
      { name: "Dashboards" },
      { name: "Customer Portals" },
      { name: "Internal Business Systems" },
      { name: "ERP/Management Systems" },
      { name: "Custom Web Applications" }
    ],
    result: "Businesses get software tailored to their operations instead of relying on generic tools.",
    slug: "custom-software"
  }
];

// legacy 6-item structure, superseded by 3-pillar model
/*
export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  icon: string;
  slug: string;
};

export const services: Service[] = [
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    shortDescription: "Intelligent virtual assistants that engage visitors, answer queries, and capture leads 24/7.",
    fullDescription: "Stop losing customers because you couldn't reply in time. Our AI chatbots integrate directly into your website to handle customer support, answer common questions, qualify leads, and seamlessly escalate complex issues to human agents—operating 24/7 without taking a break.",
    features: [
      "24/7 Lead capture & qualification",
      "Instant FAQ resolution",
      "Human handoff protocols",
      "Multi-language support"
    ],
    icon: "MessageSquare",
    slug: "ai-chatbots",
  },
  {
    id: "whatsapp-automation",
    title: "WhatsApp Automation",
    shortDescription: "Automated follow-ups, appointment reminders, and broadcast campaigns directly on WhatsApp.",
    fullDescription: "Reach your customers where they already are. We build powerful WhatsApp automation systems that handle appointment reminders, feedback collection, cart recovery, and interactive multi-step conversational flows, turning your WhatsApp into a high-converting sales channel.",
    features: [
      "Automated appointment reminders",
      "Two-way conversational AI flows",
      "Bulk broadcast campaigns",
      "CRM & spreadsheet integration"
    ],
    icon: "MessageCircle",
    slug: "whatsapp-automation",
  },
  {
    id: "web-development",
    title: "Web Development",
    shortDescription: "High-performance, modern websites designed to convert visitors into paying customers.",
    fullDescription: "Your website is your digital storefront. We design and build ultra-fast, highly responsive websites tailored for Indian SMBs. From sleek portfolio sites to robust lead-generation landing pages, we ensure your brand looks premium and converts traffic into revenue.",
    features: [
      "Custom UI/UX premium design",
      "Mobile-first responsive architecture",
      "SEO optimized structure",
      "Lightning-fast load times"
    ],
    icon: "Globe",
    slug: "web-development",
  },
  {
    id: "android-app-development",
    title: "Android App Development",
    shortDescription: "Custom native and cross-platform mobile applications tailored for your business needs.",
    fullDescription: "Expand your digital footprint with custom Android applications. Whether you need an internal staff management tool, a direct-to-consumer store, or a utility app, we build robust, scalable applications that offer a seamless user experience on any device.",
    features: [
      "Native & cross-platform builds",
      "Custom API integrations",
      "Push notification systems",
      "Secure user authentication"
    ],
    icon: "Smartphone",
    slug: "android-app-development",
  },
  {
    id: "business-process-automation",
    title: "Business Process Automation",
    shortDescription: "Streamline workflows, sync data across tools, and eliminate repetitive manual tasks.",
    fullDescription: "Eliminate the busywork that eats up your day. We connect your disjointed software tools—CRMs, email, payment gateways, and spreadsheets—into unified, automated workflows. When a lead comes in, invoices are generated, sheets are updated, and team alerts go out, all without a single click.",
    features: [
      "Cross-platform tool syncing (n8n/Make)",
      "Automated invoice generation",
      "Dynamic team notifications",
      "Error-free data entry"
    ],
    icon: "Activity",
    slug: "business-process-automation",
  },
  {
    id: "lead-generation-ai",
    title: "Lead Gen & AI Consulting",
    shortDescription: "Strategic AI implementation to discover high-quality B2B/B2C leads on autopilot.",
    fullDescription: "Don't just wait for customers to find you. We leverage advanced AI scraping, data enrichment, and outbound outreach systems to build a predictable, scalable lead generation engine. We also offer 1-on-1 consulting to help you identify which parts of your business are ready for AI integration.",
    features: [
      "AI-driven lead scraping & enrichment",
      "Automated outbound email/calling",
      "Custom AI strategy roadmap",
      "Team training on AI tools"
    ],
    icon: "LineChart",
    slug: "lead-generation-ai-consulting",
  },
];
*/
