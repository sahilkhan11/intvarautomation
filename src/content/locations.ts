export interface LocationData {
  id: string;
  city: string;
  state: string;
  slug: string;
  heroHeadline: string;
  heroSubheadline: string;
  metaTitle: string;
  metaDescription: string;
  geoContext: string;
  addressInfo?: string;
  targetIndustries?: string[];
}

export const locations: LocationData[] = [
  {
    id: "alwar",
    city: "Alwar",
    state: "Rajasthan",
    slug: "alwar",
    heroHeadline: "Websites and Software That Bring Clients in Alwar",
    heroSubheadline: "Located right on 200 Feet Road in Alwar. We build lightning-fast web applications, custom Android apps, school ERPs, and automated WhatsApp lead systems for local businesses.",
    metaTitle: "Website & Software Development Company in Alwar | Intvar Automation",
    metaDescription: "Looking for top-tier website development, Android apps, or WhatsApp automation in Alwar? Intvar Automation builds high-converting systems for local businesses on 200 Feet Road.",
    geoContext: "Intvar Automation is headquartered on 200 Feet Road opposite Sundarvan Resort in Alwar. We partner with local healthcare clinics, retail stores, educational schools, and real estate consultants to replace slow WordPress sites and manual Excel records with custom software that drives measurable revenue.",
    addressInfo: "200 Feet Road, opposite Sundarvan Resort, Alwar, Rajasthan 301001",
    targetIndustries: ["Healthcare & Dental Clinics", "Private Schools & Coaching", "Restaurants & Cafes", "Retail Stores & Wholesalers"]
  },
  {
    id: "bhiwadi",
    city: "Bhiwadi",
    state: "Rajasthan",
    slug: "bhiwadi",
    heroHeadline: "Custom ERP and Factory Software in Bhiwadi",
    heroSubheadline: "Helping manufacturing plants and industrial units across Bhiwadi, Khushkhera, and Tapukara track inventory, eliminate paperwork, and streamline operations with custom software.",
    metaTitle: "ERP & Industrial Software Development in Bhiwadi | Intvar Automation",
    metaDescription: "Custom manufacturing ERP, supply chain portals, and factory inventory software in Bhiwadi, Rajasthan. Connect shop-floor operations with modern cloud dashboards.",
    geoContext: "Bhiwadi is the industrial powerhouse of Rajasthan. Intvar Automation builds bespoke factory inventory systems, dispatch tracking mobile applications, and Tally/SAP middleware that help plant managers and manufacturers cut waste and operate with real-time operational visibility.",
    addressInfo: "Serving RIICO Industrial Area, Khushkhera & Tapukara Manufacturing Corridor",
    targetIndustries: ["Manufacturing Plants", "Automotive Ancillaries", "Logistics & Warehousing", "Packaging & Processing"]
  },
  {
    id: "neemrana",
    city: "Neemrana",
    state: "Rajasthan",
    slug: "neemrana",
    heroHeadline: "Industrial Software and Automation in Neemrana",
    heroSubheadline: "Modern software solutions, worker attendance tracking, and equipment maintenance portals for manufacturing facilities along the NH-48 corridor.",
    metaTitle: "Custom Software & Web Development in Neemrana | Intvar Automation",
    metaDescription: "Tailored software development, warehouse management apps, and process automation for businesses and industrial units in Neemrana, Rajasthan.",
    geoContext: "Operating across the Neemrana Japanese Zone and NH-48 industrial corridor, Intvar Automation develops customized digital infrastructure for enterprises that demand high reliability, offline-capable tablet applications, and direct database synchronization.",
    addressInfo: "Serving Neemrana Japanese Zone & NH-48 Industrial Corridor",
    targetIndustries: ["Japanese Zone Manufacturers", "Heavy Industries", "Supply Chain Vendors", "Commercial Complexes"]
  },
  {
    id: "jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    slug: "jaipur",
    heroHeadline: "AI Automation and Web Engineering in Jaipur",
    heroSubheadline: "We build high-converting websites, customer acquisition systems, and intelligent WhatsApp automation for modern Jaipur businesses and multi-branch brands.",
    metaTitle: "Website & AI Automation Agency in Jaipur | Intvar Automation",
    metaDescription: "Premier web development, custom Android apps, and AI business automation in Jaipur. Based in Jhotwara, serving businesses across Mansarovar, Malviya Nagar, and Sitapura.",
    geoContext: "From our regional presence in Jhotwara near Kanta Chauraha, Intvar Automation equips Jaipur enterprises with enterprise-grade Next.js websites, automated lead qualification pipelines, and custom Android applications that help them capture market share in competitive sectors.",
    addressInfo: "Jhotwara, near Kanta Chauraha, Jaipur, Rajasthan 302012",
    targetIndustries: ["B2B Enterprises & Exporters", "Multi-Speciality Hospitals", "Boutique Hotels & Cafes", "D2C Brands"]
  },
  {
    id: "rajasthan",
    city: "Rajasthan",
    state: "Rajasthan",
    slug: "rajasthan",
    heroHeadline: "Statewide Software and AI Automation Across Rajasthan",
    heroSubheadline: "From Alwar and Jaipur to Jodhpur and Kota, we engineer custom digital systems that turn traffic into verified customers and manual chaos into automated workflows.",
    metaTitle: "Custom Software & Web Development in Rajasthan | Intvar Automation",
    metaDescription: "Intvar Automation provides custom web engineering, school ERP systems, restaurant billing platforms, and AI automation for businesses across Rajasthan.",
    geoContext: "Intvar Automation delivers digital engineering for businesses across Rajasthan. We believe local enterprises deserve world-class software that loads instantly, never breaks, and delivers clear financial return on investment.",
    addressInfo: "Serving Alwar, Bhiwadi, Neemrana, Jaipur, Jodhpur, Kota & Statewide",
    targetIndustries: ["Schools & Colleges", "Hospitals & Diagnostics", "Industrial Manufacturing", "Hospitality & Food Services"]
  }
];
