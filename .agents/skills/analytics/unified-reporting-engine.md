---
name: unified-reporting-engine
description: Generates data-driven marketing reports for both internal performance analysis and client delivery.
version: 1.0.0
---

# Unified Reporting Engine

## Department
Analytics

## Purpose
Analyze campaign data exports to generate actionable insights and formatted reports. This engine seamlessly adjusts its tone and depth based on the requested audience (internal Intvar team vs. external client), focusing on measurable ROI.

## Responsibilities
1. Ingest raw campaign data (Google Ads, Meta Ads, GA4).
2. Calculate core metrics (CPA, ROAS, Lead Volume).
3. Identify trends, anomalies, and areas of waste.
4. Format the output based on Audience type:
   - **Internal**: Deep technical analysis, bidding adjustments, architectural feedback.
   - **Client**: High-level business outcomes, ROI, and strategic next steps.

## Inputs
1. **Raw Data Export**: CSV or JSON of campaign performance.
2. **Audience**: "Internal" or "Client".
3. **Date Range**: The period being analyzed.

## Outputs
- **Performance Report**: Markdown or PDF-ready document tailored to the Audience.

## Dependencies
- `.agents/knowledge/company.md` (Focus on business outcomes).
- `.agents/rules/global-rules.md` (Communication style).

## Existing Capability References
- **ceo.md**: Internal reports must satisfy CEO requirements for ROI and lead generation.
- **project-manager.md**: Coordinates implementation of the report's next steps.

## Related workflows
- `master-workflow.md`

## Related agents
- `marketing-specialist` (Future capability)

## Quality checklist
- [ ] Are vanity metrics excluded or heavily de-prioritized?
- [ ] Does the report directly connect marketing spend to business outcomes?
- [ ] Is the tone appropriate for the selected Audience?
- [ ] Are the "Next Steps" actionable and specific?

## Project integration notes
This skill merges the previously separate internal Campaign Performance Analyzer and Client Report Generator. By using the "Audience" input, it consolidates analytics logic and prevents conflicting reporting standards.
