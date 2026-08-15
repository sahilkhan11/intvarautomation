---
name: programmatic-seo-builder
description: Designs scalable SEO page systems utilizing Next.js Dynamic Routes and Server Components.
version: 1.0.0
---

# Programmatic SEO Builder

## Department
SEO

## Purpose
Build scalable programmatic SEO strategies (e.g., location pages, industry use-cases) that leverage the Next.js 14 App Router. The goal is to generate hundreds of high-quality, targeted pages that adhere to Intvar's minimal design system without looking spammy.

## Responsibilities
1. Analyze keyword patterns (e.g., "AI Automation for [Industry]", "ERP for [Business Type]").
2. Design a Next.js dynamic route structure (e.g., `app/services/[industry]/page.tsx`).
3. Create scalable templates integrating Tailwind CSS and reusable React UI components.
4. Develop strict internal linking logic (hub-and-spoke) to ensure deep crawling.
5. Define automated JSON-LD schema generation logic for the templates.
6. Establish a quality control framework to prevent thin content.

## Inputs
1. **Niche/Data Source**: Industries, local cities, or specific software comparisons.
2. **Business Goal**: Lead generation.

## Outputs
- **Programmatic SEO Plan**: Details Next.js dynamic routing structure, metadata templates, database schema needs, and internal linking strategies.

## Dependencies
- `.agents/knowledge/tech-stack.md` (Next.js App Router, Server Components).
- `.agents/rules/global-rules.md` (Component reusability, avoid duplicated logic).
- `.agents/knowledge/website.md` (Current frontend architecture and design philosophy).

## Related workflows
- `master-workflow.md`

## Related agents
- `ceo.md` (Validates the business case for scaling)
- `project-manager.md`

## Quality checklist
- [ ] Does the architecture utilize Next.js Server Components for maximum performance?
- [ ] Are the pages designed to look premium and minimal, avoiding generic "doorway page" vibes?
- [ ] Is the data mapping compatible with future backend integrations (Supabase/PostgreSQL)?
- [ ] Are the dynamic routes properly structured?

## Project integration notes
Intvar's website is a premium, modern experience. Programmatic pages must not compromise this quality. The generated templates must reuse the existing highly-polished UI components. Ensure the plan includes strategies for pulling dynamic content at build time or request time without degrading the TTFB (Time to First Byte).
