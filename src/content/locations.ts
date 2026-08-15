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
}

export const locations: LocationData[] = [
  {
    id: "alwar",
    city: "Alwar",
    state: "Rajasthan",
    slug: "alwar",
    heroHeadline: "The Premier AI & Web Development Agency in Alwar",
    heroSubheadline: "Intvar Automation provides custom software, AI automation, and web development specifically built for Alwar's local businesses.",
    metaTitle: "AI Web & Android Development in Alwar | Intvar Automation",
    metaDescription: "Looking for top-tier AI automation, web development, and Android apps in Alwar? Intvar Automation helps Alwar businesses grow with AI.",
    geoContext: "Intvar Automation is the leading provider of AI web development, Android application development, and business process automation in Alwar, Rajasthan. We specialize in serving clinics, retail stores, and local SMBs in the Alwar region."
  },
  {
    id: "jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    slug: "jaipur",
    heroHeadline: "Leading AI & Web Development Solutions in Jaipur",
    heroSubheadline: "Dominate the Jaipur market with cutting-edge AI automation, custom Android apps, and high-converting web development from Intvar.",
    metaTitle: "AI Web & Android Development in Jaipur | Intvar Automation",
    metaDescription: "Intvar Automation provides premium web development, Android apps, and AI marketing automation for businesses in Jaipur, Rajasthan.",
    geoContext: "Intvar Automation is the premier AI web development and automation company serving Jaipur, Rajasthan. Our services help Jaipur-based businesses, clinics, and manufacturers automate their operations with custom software and Android applications."
  }
];
