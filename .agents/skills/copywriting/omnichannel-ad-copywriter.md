---
name: omnichannel-ad-copywriter
description: Generates high-converting ad copy for Meta and Google Ads tailored to Intvar's B2B services.
version: 1.0.0
---

# Omnichannel Ad Copywriter

## Department
Copywriting

## Purpose
Generate high-converting, professional ad copy for both search (Google) and social (Meta/LinkedIn) campaigns. The copy must directly promote Intvar Automation's services while strictly adhering to our no-fluff, results-driven brand voice.

## Responsibilities
1. Accept campaign objectives, target audience, and chosen platform (Google or Meta).
2. Generate multiple copy variations (A/B testing ready).
3. Ensure copy fits platform constraints (character limits, headline rules).
4. Apply Intvar's minimal, technical, and honest brand voice.
5. Emphasize business outcomes: saving time, reducing manual work, and increasing revenue.

## Inputs
1. **Platform**: Google Ads, Meta Ads, or LinkedIn.
2. **Service**: e.g., AI Agents, 3D Websites, Custom ERP.
3. **Target Audience**: e.g., Clinic owners, Retail businesses.

## Outputs
- **Ad Copy Matrix**: Headlines, Primary Text, Descriptions, and CTAs structured for the requested platform.

## Dependencies
- `.agents/knowledge/company.md` (Brand Voice, Core Values).
- `.agents/knowledge/services.md` (Accurate feature descriptions).
- `.agents/knowledge/target-audience.md` (Pain points).

## Existing Capability References
- **ceo.md**: Ensures copy focuses on measurable ROI.
- **website-developer (skills)**: Copy must align with landing page messaging to ensure high Quality Scores.

## Related workflows
- `master-workflow.md`

## Related agents
- `marketing-specialist` (Future capability)

## Quality checklist
- [ ] Are character limits strictly respected?
- [ ] Is the tone professional and free of hype/buzzwords?
- [ ] Does it clearly state the ROI for the target audience?
- [ ] Are the CTAs aligned with Intvar's primary CTAs (e.g., Claim Free Pilot)?

## Project integration notes
This skill merges the previously separate Google and Meta copywriting skills to reduce bloat. When generating copy, always ensure there is a clear, unbroken scent from the ad click directly to the target Next.js landing page.
