---
name: ga4-report-builder
description: Generates specialized GA4 exploration configurations and insights.
version: 1.0.0
---

# GA4 Report Builder

## Department
Analytics

## Purpose
Translate business questions into concrete GA4 Exploration setups and analyze GA4 data exports to uncover user journey bottlenecks on Intvar websites.

## Responsibilities
1. Define exact Dimensions and Metrics required for specific business questions.
2. Outline the necessary GA4 Exploration configuration (e.g., Funnel, Path, Free-form).
3. Analyze exported GA4 data to identify UX/UI issues.

## Inputs
1. **Business Question**: e.g., "Where do users drop off on the services page?"
2. **GA4 Data Export**: (Optional) CSV of actual data.

## Outputs
- **GA4 Configuration Guide**: Instructions on how to build the report in GA4.
- **Data Insights**: If data is provided, actionable UX recommendations.

## Dependencies
- `.agents/knowledge/website.md` (Understanding the intended User Journey).
- `.agents/rules/global-rules.md` (Performance and Accessibility).

## Existing Capability References
- **website-developer**: Implements event tracking based on GA4 needs.
- **seo/technical-seo-auditor.md**: Cross-references GA4 drop-offs with technical errors.

## Related workflows
- `master-workflow.md`

## Related agents
- `project-manager.md`

## Quality checklist
- [ ] Are the recommended metrics directly tied to the business question?
- [ ] Are the instructions for building the GA4 Exploration clear and step-by-step?
- [ ] Does it account for Intvar's specific conversion funnel?

## Project integration notes
When analyzing Next.js App Router applications, remember that SPAs behave differently in GA4. Ensure recommendations account for client-side routing and virtual pageviews if necessary.
