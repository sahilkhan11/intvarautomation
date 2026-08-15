import React from 'react';
import { generateServiceSchema } from "@/lib/seo/schema";

export default function ServiceSchema({
  serviceName,
  description,
  areaServed = ["Rajasthan", "Alwar", "Jaipur", "Bhiwadi"],
  url
}: {
  serviceName: string;
  description: string;
  areaServed?: string[];
  url?: string;
}) {
  const schemaMarkup = generateServiceSchema({
    name: serviceName,
    description: description,
    areaServed: areaServed.join(", ")
  });
  // Note: the updated schema.ts generateServiceSchema accepts a single string for areaServed
  // so we join the array, or we should update schema.ts to accept string[].
  // Let me actually update the object since the utility handles string.

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        ...schemaMarkup,
        "areaServed": areaServed.map(area => ({
          "@type": "City",
          "name": area
        })),
        "url": url || "https://intvarautomation.online/services"
      }) }}
    />
  );
}
