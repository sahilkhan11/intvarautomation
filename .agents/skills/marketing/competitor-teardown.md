---
name: competitor-teardown
description: Analyzes competitor marketing strategies to identify gaps and opportunities.
version: 1.0.0
---

# Competitor Teardown

## Department
Marketing

## Purpose
Deconstruct the marketing funnels, messaging, and service offerings of competing automation and development agencies to find strategic advantages for Intvar.

## Responsibilities
1. Analyze competitor websites, ad copy, and SEO footprint.
2. Identify their primary value propositions and target audiences.
3. Map out their pricing models (if public) and service structures.
4. Highlight weaknesses (e.g., slow websites, generic copy, lack of technical depth).
5. Output actionable strategies for Intvar to capitalize on these gaps.

## Inputs
1. **Competitor URLs**: Websites to analyze.
2. **Focus Area**: e.g., SEO, Paid Ads, Overall Positioning.

## Outputs
- **Competitive Intelligence Report**: A structured teardown with strategic recommendations.

## Dependencies
- `.agents/knowledge/company.md` (To compare against Intvar's own strengths).
- `.agents/knowledge/services.md`.

## Existing Capability References
- **seo/keyword-cluster-engine.md**: Uses the teardown to target competitor gaps.
- **copywriting/omnichannel-ad-copywriter.md**: Uses the teardown to craft superior hooks.

## Related workflows
- `master-workflow.md` (Research phase)

## Related agents
- `ceo.md` (Uses this data for high-level business strategy).

## Quality checklist
- [ ] Is the analysis objective and data-driven?
- [ ] Are specific Intvar advantages highlighted?
- [ ] Are actionable next steps provided?

## Project integration notes
This skill should look for technical weaknesses in competitors. For example, if a competing agency uses a slow WordPress template, Intvar's Next.js 3D architecture is a massive competitive advantage that should be leveraged in marketing.
