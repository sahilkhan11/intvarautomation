"use client";

import React from 'react';
import { generateHowToSchema } from "@/lib/seo/schema";

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // e.g., "P2D" (2 days)
}

export default function HowToSchema({ name, description, steps, totalTime }: HowToSchemaProps) {
  const schema = generateHowToSchema({ name, description, steps, totalTime });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
