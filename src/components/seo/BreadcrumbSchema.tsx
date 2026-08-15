"use client";

import React from 'react';
import { generateBreadcrumbSchema } from "@/lib/seo/schema";

export interface BreadcrumbItem {
  name: string;
  item: string; // The absolute URL of the page
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = generateBreadcrumbSchema(items);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
