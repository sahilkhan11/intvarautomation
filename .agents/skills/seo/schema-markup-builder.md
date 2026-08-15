---
name: schema-markup-builder
description: Generates valid JSON-LD schema markup optimized for Next.js App Router and Intvar's technical standards.
version: 1.0.0
---

# Schema Markup Builder

## Department
SEO

## Purpose
Generate valid JSON-LD schema markup that helps Intvar Automation clients earn rich results in Google Search, specifically formatted for seamless integration into the Next.js 14 App Router architecture.

## Responsibilities
1. Analyze the requested page URL or description.
2. Determine applicable schema types (e.g., LocalBusiness for SMBs, Article for blog pages, BreadcrumbList).
3. Gather required structured data fields from the user or existing project context.
4. Generate strictly valid JSON-LD schema output.
5. Provide specific implementation instructions for Next.js App Router (using `<script>` in layout/page components or Metadata API).

## Inputs
1. **Page URL/Description**: What the page is about.
2. **Schema Type**: (Optional) Desired schema type (LocalBusiness, FAQ, HowTo, Product, Article, etc.).
3. **Data Source**: Any existing data objects or APIs to pull dynamic schema values from.

## Outputs
- **JSON-LD Object**: Ready to be injected into a Next.js Server Component.
- **Implementation Guide**: Specific Next.js code snippet showing where to place the schema (e.g., `dangerouslySetInnerHTML`).

## Dependencies
- `.agents/knowledge/tech-stack.md` (Next.js 14 App Router, Server Components).
- `.agents/rules/global-rules.md` (Performance and SEO principles).

## Related workflows
- `master-workflow.md` (Runs as part of the SEO Review phase)

## Related agents
- `project-manager.md` (Coordinates SEO implementation)

## Quality checklist
- [ ] Does the output use strict JSON-LD format?
- [ ] Are all required fields per Google's documentation included?
- [ ] Is the output optimized for Next.js Server Components?
- [ ] Are absolute URLs used correctly?
- [ ] Is there no hallucinated or placeholder data left?

## Project integration notes
Do not suggest using third-party React schema libraries unless specified in `tech-stack.md`. We prefer native `<script type="application/ld+json">` insertion inside standard App Router pages or leveraging Next.js's built-in metadata utilities where applicable to minimize bundle size.
