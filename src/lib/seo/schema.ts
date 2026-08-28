export function generateLocalBusinessSchema(options: {
  name: string;
  description: string;
  url: string;
  image: string;
  telephone: string;
  priceRange: string;
  openingHours: string;
  areaServed: string[];
  sameAs?: string[];
  address?: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  } | Array<{
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": options.name,
    "image": options.image,
    "description": options.description,
    "address": options.address,
    "areaServed": options.areaServed,
    "url": options.url,
    "telephone": options.telephone,
    "priceRange": options.priceRange,
    "openingHours": options.openingHours,
    "sameAs": options.sameAs || [],
  };
}

export function generateServiceSchema(options: {
  name: string;
  description: string;
  providerName?: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": options.name,
    "description": options.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": options.providerName || "Intvar Automation"
    },
    "areaServed": options.areaServed ? {
      "@type": "City",
      "name": options.areaServed
    } : undefined
  };
}

export function generateArticleSchema(options: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": options.headline,
    "description": options.description,
    "image": options.image,
    "datePublished": options.datePublished,
    "dateModified": options.dateModified || options.datePublished,
    "author": {
      "@type": "Organization",
      "name": options.authorName
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.item
    }))
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateHowToSchema(options: {
  name: string;
  description: string;
  totalTime?: string;
  steps: { name: string; text: string; url?: string; image?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": options.name,
    "description": options.description,
    "totalTime": options.totalTime || "P1D",
    "step": options.steps.map(step => ({
      "@type": "HowToStep",
      "name": step.name,
      "text": step.text,
      "url": step.url,
      "image": step.image
    }))
  };
}

export function generateVideoSchema(options: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": options.name,
    "description": options.description,
    "thumbnailUrl": options.thumbnailUrl,
    "uploadDate": options.uploadDate,
    "contentUrl": options.contentUrl
  };
}
